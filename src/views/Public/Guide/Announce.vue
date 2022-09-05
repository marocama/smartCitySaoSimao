<template>
  <main class="mb-10 container">
    <form @submit.prevent="announce('MEDIAS')" class="p-5 bg-white border border-gray-200 space-y-8 divide-y divide-gray-200 rounded-lg shadow-md">
      <!-- Informações gerais -->
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Anunciar</h3>
        <p class="mt-1 text-sm text-gray-500">Cadastre seu comercio e ganhe visibilidade.</p>
        <div class="mt-6 grid sm:grid-cols-2 gap-5">
          <!-- Título -->
          <Input v-model="form.title" name="title" label="Título" placeholder="Nome do seu comércio" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Setor -->
          <Select v-model="form.sector" :values="sectors" name="sector" label="Setor" :validations="{ required: true }" :disabled="!!loading" :error="err" />
        </div>
        <!-- Descrição -->
        <Input v-model="form.description" name="description" label="Descrição" placeholder="Descreva seu comércio em algumas linhas" :rows="3" class="mt-6" :validations="{ min: 20 }" :disabled="!!loading" :error="err" />
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
  },
    
  data() { return {
    files: [],
    loading: false,
    err: { show: false, list: {} },
    sectors: ['Bebidas e Alimentos', 'Esportes', 'Roupas e Acessórios', 'Saúde, Estética e Beleza', 'Educação e Cultura', 'Eventos e Serviços', 'Outros'],
    form: {
      title: '',
      sector: '', 
      gallery: [],
      description: '',
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