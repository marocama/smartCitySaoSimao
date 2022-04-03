<template>
  <main>
    <form @submit.prevent="announce" class="mb-5 p-5 bg-white border border-gray-200 space-y-8 divide-y divide-gray-200 rounded-lg shadow-md">
      <div class="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Anunciar</h3>
            <p class="mt-1 text-sm text-gray-500">Cadastre seu comercio e ganhe visibilidade.</p>
          </div>
          <!-- Título -->
          <label for="title" class="mt-4 block text-sm font-medium text-gray-700">Título</label>
          <div class="mt-1">
            <input v-model="form.title" type="text" id="title" autocomplete="off" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
          </div>
          <!-- Descrição -->
          <label for="description" class="mt-4 block text-sm font-medium text-gray-700">Descrição</label>
          <div class="mt-1">
            <textarea v-model="form.description" id="description" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
          </div>
          <p class="mt-2 text-sm text-gray-500">Descreva seu comércio em algumas linhas.</p>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <!-- Setor -->
            <div>
              <label for="sector" class="block text-sm font-medium text-gray-700">Setor</label>
              <select v-model="form.sector" id="sector" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Alimentação</option>
                <option>Lazer</option>
              </select>
            </div>
            <!-- Categoria -->
            <div>
              <label for="categorie" class="block text-sm font-medium text-gray-700">Categoria</label>
              <select v-model="form.category" id="categorie" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Restaurante</option>
                <option>Choperia</option>
              </select>
            </div>
          </div>
        </div>
        <div class="pt-8">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Endereço</h3>
            <p class="mt-1 text-sm text-gray-500">Defina a localização do seu comércio.</p>
          </div>
          <div class="mt-6 grid grid-cols-6 gap-4">
            <div class="col-span-2">
              <label for="zipcode" class="block text-sm font-medium text-gray-700">CEP</label>
              <div class="mt-1">
                <input v-model="form.address.zipcode" type="text" id="zipcode" autocomplete="off" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
            <div class="col-span-3">
              <label for="street" class="block text-sm font-medium text-gray-700">Logradouro</label>
              <div class="mt-1">
                <input v-model="form.address.street" type="text" id="street" autocomplete="off" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
            <div class="col-span-1">
              <label for="number" class="block text-sm font-medium text-gray-700">Número</label>
              <div class="mt-1">
                <input v-model="form.address.number" type="text" id="number" autocomplete="off" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
            <div class="col-span-2">
              <label for="neighborhood" class="block text-sm font-medium text-gray-700">Bairro</label>
              <div class="mt-1">
                <input v-model="form.address.neighborhood" type="text" id="neighborhood" autocomplete="off" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
            <div class="col-span-2">
              <label for="city" class="block text-sm font-medium text-gray-700">Cidade</label>
              <div class="mt-1">
                <input v-model="form.address.city" type="text" id="city" autocomplete="city" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
            <div class="col-span-2">
              <label for="state" class="block text-sm font-medium text-gray-700">Estado</label>
              <select v-model="form.address.state" id="state" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>SP</option>
                <option>MG</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Anunciar</button>
    </form>
  </main>
</template>

<script>
import { GuideColl } from '@/firebase'

export default {
  data() { return {
    form: {
      title: '',
      description: '',
      sector: '', 
      category: '',
      address: {
        zipcode: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: ''
      }
    }
  }},

  methods: {
    async announce() {
      await GuideColl.add({
        Title: this.form.title,
        Description: this.form.description,
        Sector: this.form.sector,
        Category: this.form.category,
        Address: {
          Zipcode: this.form.address.zipcode,
          Street: this.form.address.street,
          Number: this.form.address.number,
          Neighborhood: this.form.address.neighborhood,
          City: this.form.address.city,
          State: this.form.address.state
        }
      })
      .then(() => {
        this.$toast.success('Anuncio cadastrado com sucesso')
        this.$router.push('/guide/eat')
      })
      .catch(() => {
        this.$toast.error('Ocorreu um erro, tente novamente')
      })
    }
  }
}
</script>