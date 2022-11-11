<template>
  <section class="divide-y divide-gray-200">
    <!-- Profile section -->
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 class="text-lg leading-6 font-medium text-gray-900">Perfil</h2>
                <p class="mt-1 text-sm text-gray-500">Verifique suas informações públicas.</p>
              </div>

              <div class="mt-6 flex flex-col lg:flex-row items-center">
                <div class="flex-grow space-y-6">
                  <Input v-model="form.name" name="name" label="Nome Completo" :validations="{ required: true }" :loading="loading === 'GETTING'" :disabled="!!loading" :error="err" />
                  <Input v-model="form.email" name="email" label="Email" :loading="loading === 'GETTING'" disabled />
                </div>
                <div class="mt-6 flex-grow lg:mt-0 lg:ml-10 lg:flex-grow-0 lg:flex-shrink-0">
                  <Avatar id="CURRENTUSER" edit size="32" />
                </div>
              </div>
            </div>

            <!-- Privacy section -->
            <div class="pt-6 divide-y divide-gray-200">
              <div class="px-4 sm:px-6">
                <div>
                  <h2 class="text-lg leading-6 font-medium text-gray-900">Endereço</h2>
                  <p class="mt-1 text-sm text-gray-500">Mantenha seus dados de endereço atualizados.</p>
                </div>
                <div class="mt-6">
                  <!-- CEP -->
                  <Input v-model="form.address.postalcode" name="postalcode" label="CEP" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" @change="getAddress" />
                  <!-- Logradouro e número -->
                  <div class="my-6 grid grid-cols-2 gap-5">
                    <Input v-model="form.address.street" name="street" label="Logradouro" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
                    <Input v-model="form.address.number" name="number" label="Número" inputmode="numberic" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
                  </div>
                  <!-- Bairro -->
                  <Input v-model="form.address.neighborhood" name="neighborhood" label="Bairro" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
                  <!-- Cidade e estado -->
                  <div class="mt-6 grid grid-cols-2 gap-5">
                    <Input v-model="form.address.city" name="city" label="Cidade" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
                    <Select v-model="form.address.state" name="state" required label="Estado" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" :values="['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']" maxheight="10rem" />
                  </div>
                </div>
              </div>
              <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
                <button type="submit" class="ml-5 bg-purple-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Salvar</button>
              </div>
            </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    Avatar: () => import('@/components/User/Avatar'),
    Input: () => import('@/components/Inputs/Default'),
    Select: () => import('@/components/Inputs/Select'),
    // Button: () => import('@/components/Buttons/Default'),
  },

  data() { return {
    loading: false,
    err: { show: false, list: {} },
    form: { name: '', email: '', address: { number: '', postalcode: '', street: '', neighborhood: '', city: '', state: '' } },
  } },

  methods: {
    get() {
      this.form.name = this.$store.state.user?.Name || ''
      this.form.email = this.$store.state.user?.Email || ''
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
      // salvar, parei aqui
    }
  },

  mounted() { this.get() },

  watch: { '$store.state.user': function() { this.get() } }
}
</script>