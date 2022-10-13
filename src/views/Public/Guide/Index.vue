<template>
  <main>
    <!-- Header -->
    <header class="mb-5 p-4 sm:px-6 flex justify-between items-center bg-white border border-gray-200 shadow-md rounded-lg">
      <div>
        <h3 class="text-gray-600 text-lg font-medium">{{ selected || 'Guia Comercial' }}</h3>
        <p class="text-sm text-gray-500">Exibindo {{ items.length }} resultados</p>
      </div>
      <div class="inline-flex justify-start space-x-3">
        <router-link to="/guide/announce" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Anunciar</router-link>
        <button type="button" class="p-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-sm font-medium rounded-md"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg></button>
        <button type="button" class="p-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-sm font-medium rounded-md"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg></button>
      </div>
    </header>
    <!-- Conteúdo -->
    <section class="grid grid-cols-3 gap-6">
      <Card v-for="(item, index) in items" :key="index" :data="item" />
    </section>
    <!-- Filtro -->
    <div @click="menu = true" class="fixed right-6 flex flex-col items-center cursor-pointer" :class="$store.state.mobile ? 'bottom-20' : 'bottom-4'">
      <button type="button" class="p-2 w-min rounded-full shadow-sm bg-purple-600 text-white focus:outline-none">
        <svg class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" /></svg>
      </button>
      <span v-if="!$store.state.mobile" class="mt-1 py-0.5 px-2.5 block bg-black text-white text-xs antialiased rounded-full">FILTRAR</span>
    </div>
    <SliderOver v-model="menu" :size="$store.state.mobile ? 'sm' : 'xs'" title="Categoria" subtitle="Filtre os resultados da sua busca.">
      <ul class="grid grid-cols-2 gap-3">
        <button @click="get(item.label)" v-for="(item, index) in options" :key="index" type="button" class="p-3 h-18 flex flex-col items-center justify-center hover:bg-gray-50 rounded-lg" :class="item.label === selected ? 'border-2 bg-purple-50 border-purple-600 text-purple-600' : 'border border-gray-200 text-gray-500'">
          <svg class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" v-html="item.icon"></svg>
          <span class="mt-1 w-full text-center text-xs">{{ item.label }}</span>
        </button>
      </ul>
    </SliderOver>
  </main>
</template>

<script>
import { GuideColl } from '@/firebase'

export default {
  components: {
    Card: () => import('@/components/Cards/Guide'),
    SliderOver: () => import('@/components/SlideOver/Default'),
  },

  data() { return {
    items: [],
    menu: false,
    selected: '',
    options: [
      { label: 'Bebidas e Alimentos', icon: `<path d="M7 4.5c-.3 0-.5.3-.5.5v2.5h-1V5c0-.3-.2-.5-.5-.5s-.5.3-.5.5v2.5h-1V5c0-.3-.2-.5-.5-.5s-.5.3-.5.5v3.3c0 .9.7 1.6 1.5 1.7v7c0 .6.4 1 1 1s1-.4 1-1v-7c.8-.1 1.5-.8 1.5-1.7V5c0-.2-.2-.5-.5-.5zM9 5v6h1v6c0 .6.4 1 1 1s1-.4 1-1V2c-1.7 0-3 1.3-3 3zm7-1c-1.4 0-2.5 1.5-2.5 3.3c-.1 1.2.5 2.3 1.5 3V17c0 .6.4 1 1 1s1-.4 1-1v-6.7c1-.7 1.6-1.8 1.5-3C18.5 5.5 17.4 4 16 4z" fill="currentColor" />` },
      { label: 'Esportes', icon: `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" fill="currentColor" />` },
      { label: 'Roupas e Acessórios', icon: `<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" />` },  
      { label: 'Saúde, Estética e Beleza', icon: `<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill="currentColor" />` },    
      { label: 'Educação e Cultura', icon: `<path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" fill="currentColor" />` },
      { label: 'Eventos e Serviços', icon: `<path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd" fill="currentColor" />`},
      { label: 'Outros', icon: `<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" fill="currentColor" />`},
    ],
  } },

  mounted() {
    this.get()
  },

  methods: {
    async get(item) {
      this.selected = (item === this.selected) ? '' : item

      const query = this.selected ? GuideColl.where('Sector', '==', this.selected) : GuideColl.orderBy('CreatedAt', 'desc')

      await query.limit(8).get()
      .then(result => { console.log(result), this.items = result.docs.map(item => { return { id: item.id, ...item.data() } }) })
      .catch(err => console.log(err))
    }
  },
}
</script>