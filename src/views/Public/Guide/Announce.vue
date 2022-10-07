<template>
  <main>
    <form @submit.prevent="announce('MEDIAS')" class="p-5 bg-white border border-gray-200 space-y-8 divide-y divide-gray-200 rounded-lg shadow-md">
      <!-- Informações gerais -->
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Anunciar</h3>
        <p class="mt-1 text-sm text-gray-500">Cadastre seu comercio e ganhe visibilidade.</p>
        <div class="mt-6 grid sm:grid-cols-3 gap-5">
          <!-- Título -->
          <Input v-model="form.Title" name="title" label="Título" placeholder="Nome do seu comércio" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Setor -->
          <Select v-model="form.Sector" :values="sectors" name="sector" label="Setor" required :disabled="!!loading" :error="err" />
          <!-- Telefone -->
          <InputMask v-model.lazy="form.Phone" name="phone" label="Telefone (Celular)" placeholder="(__) ____-____" inputmode="numeric" required :format="['', '(##) ####-####', '(##) #####-####']" :disabled="!!loading" :error="err">
            <button @click="form.Whatsapp = form.Phone.length >= 14 ? !form.Whatsapp : false" type="button" class="absolute top-2 right-3" :class="form.Phone && form.Whatsapp ? 'text-green-500' : 'text-gray-500 hover:text-gray-600'"><svg class="h-5 w-5" aria-hidden="true" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2c.2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5c-.1.1-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1z" fill="currentColor"/></svg></button>
          </InputMask> 
        </div>
        <!-- Descrição -->
        <Input v-model="form.Description" name="description" label="Descrição" placeholder="Descreva seu comércio em algumas linhas" :rows="3" class="my-6" :validations="{ min: 20 }" :disabled="!!loading" :error="err" />
        <!-- Funcionamento -->
        <div>
          <label for="clock" class="block text-gray-700 text-xs font-normal antialiased truncate">Horário de funcionamento</label>
          <ul class="mt-1.5 relative grid grid-cols-3 md:grid-cols-7 gap-6 text-center text-gray-700">
            <li @click="$store.dispatch('modals/open', 'time')" v-for="(day, index) in Object.keys(days)" :key="index" class="rounded-full" :class="form.Time[day].Start && form.Time[day].End ? 'bg-purple-600 text-white' : 'bg-gray-200 opacity-40'">{{ days[day] }}</li>
          </ul>
        </div>
        <!-- Imagens -->
        <File v-model="form.Gallery" name="uploader" ref="uploader" path="/guide" :maxfiles="3" required :disabled="!!loading" :error="err" class="mt-6" @uploaded="announce('DATA')" />
      </div>
      <!-- Endereço -->
      <div class="pt-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Endereço</h3>
        <p class="mt-1 text-sm text-gray-500">Defina a localização do seu comércio.</p>
        <div class="mt-6 grid grid-cols-6 gap-5">
          <!-- CEP -->
          <InputMask v-model.lazy="form.Address.PostalCode" name="cep" label="CEP" inputmode="numeric" class="col-span-2" :format="'#####-###'" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" @change="getAddress()" />
          <!-- Logradouro -->
          <Input v-model="form.Address.Street" name="street" label="Logradouro" class="col-span-3" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
          <!-- Número -->
          <Input v-model="form.Address.Number" name="number" label="Número" inputmode="number" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
          <!-- Bairro -->
          <Input v-model="form.Address.Neighborhood" name="neighborhood" label="Bairro" class="col-span-2" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
          <!-- Cidade -->
          <Input v-model="form.Address.City" name="city" label="Cidade" class="col-span-2" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
          <!-- Estado -->
          <Select v-model="form.Address.State" name="state" label="Estado" class="col-span-2" required :disabled="!!loading" :error="err" :values="['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']" maxheight="5rem" />
        </div>
      </div>
      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Anunciar</button>
    </form>
    <modal id="time" title="Defina o horário de funcionamento" fullscreen>
      <div class="m-5 pt-5  grid grid-cols-3 gap-5">
        <p class="my-auto text-gray-600">Domingo</p>
        <Input v-model="form.Time.Sunday.Start" name="startDomingo" inputmode="time" />
        <Input v-model="form.Time.Sunday.End" name="endDomingo" inputmode="time" />
        <p class="my-auto text-gray-600">Segunda</p>
        <Input v-model="form.Time.Monday.Start" name="startSegunda" inputmode="time" />
        <Input v-model="form.Time.Monday.End" name="endSegunda" inputmode="time" />
        <p class="my-auto text-gray-600">Terça</p>
        <Input v-model="form.Time.Tuesday.Start" name="startTerça" inputmode="time" />
        <Input v-model="form.Time.Tuesday.End" name="endTerça" inputmode="time" />
        <p class="my-auto text-gray-600">Quarta</p>
        <Input v-model="form.Time.Wednesday.Start" name="startQuarta" inputmode="time" />
        <Input v-model="form.Time.Wednesday.End" name="endQuarta" inputmode="time" />
        <p class="my-auto text-gray-600">Quinta</p>
        <Input v-model="form.Time.Thursday.Start" name="startQuinta" inputmode="time" />
        <Input v-model="form.Time.Thursday.End" name="endQuinta" inputmode="time" />
        <p class="my-auto text-gray-600">Sexta</p>
        <Input v-model="form.Time.Friday.Start" name="startSexta" inputmode="time" />
        <Input v-model="form.Time.Friday.End" name="endSexta" inputmode="time" />
        <p class="my-auto text-gray-600">Sábado</p>
        <Input v-model="form.Time.Saturday.Start" name="startSábado" inputmode="time" />
        <Input v-model="form.Time.Saturday.End" name="endSábado" inputmode="time" />
      </div>
      <template #actions>
        <Button @click="$store.dispatch('modals/close', 'time')" text="Salvar" class="mt-auto" />
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
    loading: false,
    err: { show: false, list: {} },
    days: { Sunday: 'Domingo', Monday: 'Segunda', Tuesday: 'Terça', Wednesday: 'Quarta', Thursday: 'Quinta', Friday: 'Sexta', Saturday: 'Sábado' },
    sectors: ['Bebidas e Alimentos', 'Esportes', 'Roupas e Acessórios', 'Saúde, Estética e Beleza', 'Educação e Cultura', 'Eventos e Serviços', 'Outros'],
    form: {
      Title: '',
      Phone: '',
      Sector: '', 
      Gallery: [],
      Description: '',
      Whatsapp: false,
      Address: { PostalCode: '', Street: '', Number: '', Neighborhood: '', City: '', State: '' },
      Time: { Sunday: { Start: '', End: '' }, Monday: { Start: '', End: '' }, Tuesday: { Start: '', End: '' }, Wednesday: { Start: '', End: '' }, Thursday: { Start: '', End: '' }, Friday: { Start: '', End: '' }, Saturday: { Start: '', End: '' } },
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
        await GuideColl.add({ ...this.form, CreatedAt: new Date() })
        .then(() => {
          this.$toast.success('Anuncio cadastrado com sucesso')
          this.$router.replace('/guide')
        })
        .catch(() => this.$toast.error('Ocorreu um erro, tente novamente'))
      }
      this.loading = false
    },
    
    async getAddress() {
      this.loading = 'ADDRESS'
      await axios.get(`https://brasilapi.com.br/api/cep/v2/${this.form.Address.PostalCode}`)
      .then(result => {
        this.form.Address.City = result.data.city || ''
        this.form.Address.State = result.data.state || ''
        this.form.Address.Street = result.data.street || ''
        this.form.Address.Neighborhood = result.data.neighborhood || ''
      })
      .catch(() => {})
      this.loading = false
    }
  }
}
</script>