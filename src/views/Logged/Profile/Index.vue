<template>
  <main>
    <div class="max-w-screen-xl mx-auto pb-5 px-4 sm:px-6">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
          <aside class="py-6 lg:col-span-3">
            <nav class="space-y-1">
              <!-- Current: "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700", Default: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
              <a href="#" class="bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 group border-l-4 px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
                <!--
                  Heroicon name: outline/user-circle

                  Current: "text-teal-500 group-hover:text-teal-500", Default: "text-gray-400 group-hover:text-gray-500"
                -->
                <svg class="text-teal-500 group-hover:text-teal-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="truncate"> Perfil </span>
              </a>

              <a href="#" class="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium">
                <!-- Heroicon name: outline/key -->
                <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span class="truncate"> Senha </span>
              </a>

              <button @click="$store.dispatch('logout')" type="button" class="w-full border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium">
                <svg class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <span class="truncate"> Sair </span>
              </button>
            </nav>
          </aside>

          <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
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
                <button type="submit" class="ml-5 bg-purple-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
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
  }
}
</script>