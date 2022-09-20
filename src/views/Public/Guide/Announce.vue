<template>
  <main>
    <form @submit.prevent="announce('MEDIAS')" class="p-5 bg-white border border-gray-200 space-y-8 divide-y divide-gray-200 rounded-lg shadow-md">
      <!-- Informações gerais -->
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Anunciar</h3>
        <p class="mt-1 text-sm text-gray-500">Cadastre seu comercio e ganhe visibilidade.</p>
        <div class="mt-6 grid sm:grid-cols-3 gap-5">
          <!-- Título -->
          <Input v-model="form.title" name="title" label="Título" placeholder="Nome do seu comércio" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Setor -->
          <Select v-model="form.sector" :values="sectors" name="sector" label="Setor" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Telefone -->
          <InputMask v-model.lazy="form.phone" name="phone" label="Telefone (Celular)" placeholder="(__) ____-____" inputmode="numeric" :format="['', '(##) ####-####', '(##) #####-####']" :disabled="!!loading" :error="err">
            <button type="button" class="absolute top-2 right-3" :class="form.phone && form.whatsapp ? 'text-green-500' : 'text-gray-500 hover:text-gray-600'"><svg class="h-5 w-5" aria-hidden="true" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2c.2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5c-.1.1-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1z" fill="currentColor"/></svg></button>
          </InputMask> 
        </div>
        <!-- Descrição -->
        <Input v-model="form.description" name="description" label="Descrição" placeholder="Descreva seu comércio em algumas linhas" :rows="3" class="my-6" :validations="{ min: 20 }" :disabled="!!loading" :error="err" />
        <!-- Funcionamento -->
        <div>
          <label for="clock" class="block text-xs font-normal antialiased truncate" :class="`${(err.show) ? 'text-red-600' : 'text-gray-700'}`">Horário de funcionamento</label>
          <ul class="mt-1.5 relative grid grid-cols-7 text-center text-gray-700 space-x-6">
            <li @click="$store.dispatch('modals/open', 'time')" class="bg-gray-200 rounded-full opacity-40">Domingo</li>
            <li @click="$store.dispatch('modals/open', 'time')" class="bg-gray-200 rounded-full opacity-40">Segunda</li>
            <li @click="$store.dispatch('modals/open', 'time')" class="bg-gray-200 rounded-full opacity-40">Terça</li>
            <li @click="$store.dispatch('modals/open', 'time')" class="bg-gray-200 rounded-full opacity-40">Quarta</li>
            <li @click="$store.dispatch('modals/open', 'time')" class="bg-gray-200 rounded-full opacity-40">Quinta</li>
            <li @click="$store.dispatch('modals/open', 'time')" class="bg-gray-200 rounded-full opacity-40">Sexta</li>
            <li @click="$store.dispatch('modals/open', 'time')" class="bg-gray-200 rounded-full opacity-40">Sábado</li>
          </ul>
        </div>
        <!-- Imagens -->
        <File v-model="form.gallery" name="uploader" ref="uploader" path="/guide" :maxfiles="3" required :disabled="!!loading" :error="err" class="mt-6" @uploaded="announce('DATA')" />
      </div>
      <!-- Endereço -->
      <div class="pt-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Endereço</h3>
        <p class="mt-1 text-sm text-gray-500">Defina a localização do seu comércio.</p>
        <div class="mt-6 grid grid-cols-6 gap-5">
          <!-- CEP -->
          <Input v-model="form.address.postalcode" name="cep" label="CEP" class="col-span-2" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Logradouro -->
          <Input v-model="form.address.street" name="street" label="Logradouro" class="col-span-3" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Número -->
          <Input v-model="form.address.number" name="number" label="Número" inputmode="number" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Bairro -->
          <Input v-model="form.address.neighborhood" name="neighborhood" label="Bairro" class="col-span-2" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Cidade -->
          <Input v-model="form.address.city" name="city" label="Cidade" class="col-span-2" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Estado -->
          <Select v-model="form.address.state" name="state" label="Estado" class="col-span-2" :validations="{ required: true }" :disabled="!!loading" :error="err" :values="['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']" maxheight="5rem" />
        </div>
      </div>
      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Anunciar</button>
    </form>
    <modal id="time" title="Defina o horário de funcionamento" fullscreen>
      <div class="my-5 grid grid-cols-3 gap-5">
        <p class="my-auto text-gray-600">Domingo</p>
        <Input name="startDomingo" inputmode="time" />
        <Input name="endDomingo" inputmode="time" />
        <p class="my-auto text-gray-600">Segunda</p>
        <Input name="startDomingo" inputmode="time" />
        <Input name="endDomingo" inputmode="time" />
        <p class="my-auto text-gray-600">Terça</p>
        <Input name="startDomingo" inputmode="time" />
        <Input name="endDomingo" inputmode="time" />
        <p class="my-auto text-gray-600">Quarta</p>
        <Input name="startDomingo" inputmode="time" />
        <Input name="endDomingo" inputmode="time" />
        <p class="my-auto text-gray-600">Quinta</p>
        <Input name="startDomingo" inputmode="time" />
        <Input name="endDomingo" inputmode="time" />
        <p class="my-auto text-gray-600">Sexta</p>
        <Input name="startDomingo" inputmode="time" />
        <Input name="endDomingo" inputmode="time" />
        <p class="my-auto text-gray-600">Sábado</p>
        <Input name="startDomingo" inputmode="time" />
        <Input name="endDomingo" inputmode="time" />
      </div>
      <template #actions>
        <Button text="Salvar" class="mt-auto" />
      </template>
    </modal>
  </main>
</template>

<script>
import axios from 'axios'
import { GuideColl } from '@/firebase'
  
export default {
  components: { 
    File: () => import('@/components/Inputs/File'),
    Input: () => import('@/components/Inputs/Default'),
    Select: () => import('@/components/Inputs/Select'),
    InputMask: () => import('@/components/Inputs/Mask'),
    Button: () => import('@/components/Buttons/Default'),
  },
    
  data() { return {
    files: [],
    loading: false,
    err: { show: false, list: {} },
    sectors: ['Bebidas e Alimentos', 'Esportes', 'Roupas e Acessórios', 'Saúde, Estética e Beleza', 'Educação e Cultura', 'Eventos e Serviços', 'Outros'],
    form: {
      title: '',
      phone: '',
      sector: '', 
      gallery: [],
      description: '',
      whatsapp: false,
      address: { postalcode: '', street: '', number: '', neighborhood: '', city: '', state: '' },
    },
  }},
    
  methods: {
    async announce(step) {
      this.err.show = false
      for (const field in this.err.list) { if (this.err.list[field]) { this.err.show = true; break } }
      if (this.err.show) { this.$toast.error('Dados pendentes'); return }

      this.loading = true
      if (step === 'MEDIAS') { this.$refs.uploader.upload(); return }
      if (step === 'DATA') { 
        await GuideColl.add({
          Title: this.form.title || '',
          Sector: this.form.sector || '',
          Gallery: this.form.gallery || [],
          Description: this.form.description || '',
          Address: {
            City: this.form.address.city || '',
            State: this.form.address.state || '',
            Street: this.form.address.street || '',
            Number: this.form.address.number || '',
            PostalCode: this.form.address.postalcode || '',
            Neighborhood: this.form.address.neighborhood || '',
          }
        })
        .then(() => {
          this.$toast.success('Anuncio cadastrado com sucesso')
          this.$router.replace('/guide')
        })
        .catch(() => this.$toast.error('Ocorreu um erro, tente novamente'))
      }
      this.loading = false
    },
    
    async getAddress() {
      await axios.get(`https://brasilapi.com.br/api/cep/v2/${this.form.address.postalcode}`)
      .then(result => {
        this.form.address.city = result.data.city || ''
        this.form.address.state = result.data.state || ''
        this.form.address.street = result.data.street || ''
        this.form.address.neighborhood = result.data.neighborhood || ''
      })
      .catch(() => {})
    }
  }
}
</script>