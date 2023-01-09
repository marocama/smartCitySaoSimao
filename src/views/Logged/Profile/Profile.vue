<template>
  <form @submit.prevent="set" class="pt-6 divide-y divide-gray-200">
    <!-- Perfil -->
    <div class="pb-6 px-4 sm:px-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Perfil</h2>
      <p class="mt-1 text-sm text-gray-500">Verifique suas informações públicas.</p>
      <div class="mt-6 pb-2 flex flex-col lg:flex-row items-center">
        <div class="w-full space-y-3">
          <Input v-model="form.name" name="name" label="Nome Completo" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <InputMask v-model.lazy="form.whatsapp" name="whatsapp" label="Whatsapp" placeholder="(__) ____-____" inputmode="numeric" :format="['', '(##) ####-####', '(##) #####-####']" :disabled="!!loading" :error="err" />
          <Input v-model="form.email" name="email" label="Email" disabled />
        </div>
        <div class="mt-8 lg:mt-0 lg:ml-8 flex-grow lg:flex-grow-0 lg:flex-shrink-0">
          <Avatar id="CURRENTUSER" edit size="32" />
        </div>
      </div>
    </div>
    <!-- Endereço -->
    <div class="pt-6 px-4 sm:px-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Endereço</h2>
      <p class="mt-1 text-sm text-gray-500">Mantenha seus dados de endereço atualizados.</p>
      <div class="mt-6 pb-2 space-y-3">
        <Input v-model="form.address.postalcode" name="postalcode" label="CEP" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" @change="getAddress" />
        <div class="grid grid-cols-2 gap-5">
          <Input v-model="form.address.street" name="street" label="Logradouro" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
          <Input v-model="form.address.number" name="number" label="Número" inputmode="numeric" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
        </div>
        <Input v-model="form.address.neighborhood" name="neighborhood" label="Bairro" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
        <div class="grid grid-cols-2 gap-5">
          <Input v-model="form.address.city" name="city" label="Cidade" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
          <Select v-model="form.address.state" name="state" required label="Estado" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" :values="['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']" maxheight="10rem" />
        </div>
      </div>
    </div>
    <div class="mt-4 p-4 sm:px-6 flex justify-end">
      <button type="submit" class="py-2 px-4 inline-flex justify-center bg-purple-600 hover:opacity-80 border border-transparent text-sm font-medium text-white rounded-md shadow-sm">Salvar</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import { auth, UsersColl } from '@/firebase'

export default {
  components: {
    Avatar: () => import('@/components/User/Avatar'),
    Input: () => import('@/components/Inputs/Default'),
    Select: () => import('@/components/Inputs/Select'),
    InputMask: () => import('@/components/Inputs/Mask'),
  },
  
  data() { return {
    loading: false,
    err: { show: false, list: {} },
    form: { name: '', email: '', whatsapp: '', address: { number: '', postalcode: '', street: '', neighborhood: '', city: '', state: '' } },
  } },
  
  methods: {
    get() {
      this.form.name = this.$store.state.user?.Name || ''
      this.form.email = this.$store.state.user?.Email || ''
      this.form.whatsapp = this.$store.state.user?.Whatsapp || ''
      this.form.address.city = this.$store.state.user?.Address?.City || ''
      this.form.address.state = this.$store.state.user?.Address?.State || ''
      this.form.address.number = this.$store.state.user?.Address?.Number || ''
      this.form.address.street = this.$store.state.user?.Address?.Street || ''
      this.form.address.postalcode = this.$store.state.user?.Address?.PostalCode || ''
      this.form.address.neighborhood = this.$store.state.user?.Address?.Neighborhood || ''
    },
    
    async getAddress() {
      if (this.form.address.postalcode.length < 7) { this.form.address = { number: '', postalcode: '', street: '', neighborhood: '', city: '', state: '' }; return }
      
      this.loading = 'ADDRESS'
      await axios.get(`https://brasilapi.com.br/api/cep/v2/${this.form.address.postalcode}`)
      .then(result => {
        this.form.address.city = result.data.city || ''
        this.form.address.state = result.data.state || ''
        this.form.address.street = result.data.street || ''
        this.form.address.neighborhood = result.data.neighborhood || ''
      })
      .catch(() => {})
      this.loading = false
    },
    
    async set() {
      this.err.show = false
      for (const field in this.err.list) { if (this.err.list[field]) { this.err.show = true; break } }
      if (this.err.show) { this.$toast.error('Dados pendentes'); return }
      
      this.loading = 'SETTING'
      await UsersColl.doc(auth.currentUser.uid).update({
        Name: this.form.name || '',
        Whatsapp: this.form.whatsapp || '',
        Address: { Number: this.form.address.number || '', PostalCode: this.form.address.postalcode || '', Street: this.form.address.street || '', Neighborhood: this.form.address.neighborhood || '', City: this.form.address.city || '', State: this.form.address.state || '' },
      })
      this.$toast.success('Dados atualizados com sucesso')
      this.loading = false
    }
  },
  
  mounted() { this.get() },
  
  watch: { '$store.state.user': function() { this.get() } }
}
</script>