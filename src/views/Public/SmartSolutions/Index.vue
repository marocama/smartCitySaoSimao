<template>
  <main class="mt-2 mx-20">
    <!-- Header -->
    <section class="mb-5 p-4 sm:px-6 flex justify-between items-center bg-white border border-gray-200 shadow-md rounded-lg">
      <div>
        <h3 class="text-gray-600 text-lg font-medium">{{ selected || 'Soluções Inteligentes' }}</h3>
        <p class="text-sm text-gray-500">Exibindo {{ items.length }} resultados</p>
      </div>
      <div class="inline-flex justify-start space-x-3">
        <Button text="Cadastre uma Solução" />
        <button type="button" class="p-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-sm font-medium rounded-md"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg></button>
        <button type="button" class="p-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-sm font-medium rounded-md"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg></button>
      </div>
    </section>
    <!-- Conteúdo -->
    <section class="grid grid-cols-4 gap-6">
      <Card v-for="(item, index) in items" :key="index" :data="item" />
    </section>
    <!-- Filtro -->
     <button @click="menu = true" type="button" class="p-2 fixed right-7 w-min rounded-full shadow-sm bg-purple-600 text-white focus:outline-none" :class="$store.state.mobile ? 'bottom-20' : 'bottom-4'">
      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" /></svg>
    </button>
    <SliderOver v-model="menu" :size="$store.state.mobile ? 'sm' : 'xs'" title="Categoria" subtitle="Filtre os resultados da sua busca.">
      <ul class="grid grid-cols-2 gap-3">
        <router-link v-for="(item, index) in options" :key="index" :to="item.path" class="p-3 h-18 flex flex-col items-center justify-center hover:bg-gray-50 rounded-lg" :class="item.label === selected ? 'border-2 bg-purple-50 border-purple-600 text-purple-600' : 'border border-gray-200 text-gray-500'">
          <svg class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" v-html="item.icon"></svg>
          <span class="mt-1 w-full text-center text-xs">{{ item.label }}</span>
        </router-link>
      </ul>
    </SliderOver>
  </main>
</template>

<script>

import { GuideColl } from '@/firebase'

export default {

  components: {
    Button: () => import('@/components/Buttons/Default'),
    SliderOver: () => import('@/components/SlideOver/Default'),
},
  data() { return {

    items: [],
    selected: '',
    menu: false,
    options: [ 
      { label: 'Transporte Acessível', path:'transport', icon: `<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" fill="currentColor" />` },
      { label: 'Carona Solidária', path:'rides', icon: `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0zs" fill="currentColor" />` },
      { label: 'Produtos Rurais', path:'organic', icon: `<path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" fill="currentColor" />` }, 
      { label: 'Resíduos Sólidos', path:'#', icon: `<path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" fill="currentColor" />` },    
      ]
  } },

  mounted() {
    this.get()
  },

  methods: {
    async get(item) {
      this.selected = (item === this.selected) ? '' : item

      const query = this.selected ? GuideColl.where('Category', '==', this.selected) : GuideColl.orderBy('CreatedAt', 'desc')

      await query.limit(8).get()
      .then(result => { console.log(result), this.items = result.docs.map(item => { return { id: item.id, ...item.data() } }) })
      .catch(err => console.log(err))
    }
  },

  
}
</script>