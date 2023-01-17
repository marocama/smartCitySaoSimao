<template>
  <div class="h-full flex flex-col overflow-hidden relative">
    <header class="p-4 sm:px-6 flex justify-between items-center bg-green-50 border-b border-green-200 shadow-sm rounded-t-lg">
      <div>
        <h3 class="text-green-700 text-lg font-medium">Produtos rurais</h3>
        <p class="text-sm text-green-400">Localizado {{ items.length }} {{ items.length > 1 ? 'resultados' : 'resultado' }}</p>
      </div>
      <div class="inline-flex justify-start space-x-3">
        <button @click="callModal" type="button" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Anunciar</button>
      </div>
    </header>
    <section v-if="view" class="p-4 h-full w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-scroll">
      <Card v-for="(item, index) in items" :key="index" :data="item" origin="products" @load="load" />
      <p v-if="!items.length" class="text-gray-500 text-sm text-center">Nenhum produto encontrada no momento</p>
    </section>
    <section v-else class="flex-grow grid md:grid-cols-2 overflow-hidden">
      <div class="bg-white overflow-y-scroll scrollbar">
        <p class="p-4 md:pt-10 md:px-10 text-justify text-gray-500 text-lg">Nosso objetivo é incentivar a agricultura orgânica, agroecológica e a produção artesanal brasileira, com respeito ao meio-ambiente e aos animais.</p>
        <p class="p-4 md:px-10 text-justify text-gray-500 text-lg">Além dos ingredientes para abastecer sua despensa, estamos sempre à procura de frutas, legumes e verduras da estação diferentes dos convencionais.</p>
        <button @click="view = true" type="button" class="m-4 md:mx-10 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Ver produtos disponíveis</button>
      </div>
      <img class="hidden md:block h-full object-cover" src="https://images.pexels.com/photos/10539745/pexels-photo-10539745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Rural" />
    </section>
    <footer v-if="!view" class="pb-4 px-4 sm:px-6 w-full flex justify-start md:justify-end items-end flex-wrap space-y-4 space-x-4 bg-gray-50 border-t border-gray-200 rounded-b-lg overflow-hidden">
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/3.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/7.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/8.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/11.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/12.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/17.svg')" />
    </footer>
    <!-- Anunciar -->
    <modal id="announce" title="Anunciar" fullscreen>
      <form @submit.prevent="announce('MEDIAS')" class="mt-2 mb-4 sm:w-80 space-y-3">
        <Input v-model="form.Title" name="title" label="Título" placeholder="Título para os seus produtos" :loading="loading === 'SAVING'" :disabled="!!loading" />
        <Input v-model="form.Description" name="description" label="Descrição" placeholder="Descreva seus produtos em algumas linhas" :rows="3" :loading="loading === 'SAVING'" :disabled="!!loading" />
        <File v-model="form.Gallery" name="uploader" ref="uploader" path="/products" :maxfiles="3" class="pb-5" required :disabled="!!loading" @uploaded="announce('DATA')" />
      </form>
      <template #actions>
        <Button @click="announce('MEDIAS')" text="Salvar" class="mt-auto" />
      </template>
    </modal>
  </div>
</template>

<script>
import { auth, ProductsColl } from '@/firebase'

export default {
  components: {
    File: () => import('@/components/Inputs/File'),
    Card: () => import('@/components/Cards/Solutions'),
    Input: () => import('@/components/Inputs/Default'),
    Button: () => import('@/components/Button'),
  },
  
  data() { return {
    items: [],
    view: false,
    loading: false,
    user: auth.currentUser || {},
    form: { Title: '', Description: '', Gallery: [] },
  } },
  
  mounted() { this.load() },
  
  methods: {
    async load() {
      await ProductsColl.get()
      .then(result => { this.items = result.docs.map(item => ({ id: item.id, ...item.data() })) })
      .catch(() => this.$toast.error('Falha ao carregar, tente novamente.'))
    },
    
    callModal() { if (!auth.currentUser) { this.$router.push('/auth') } else if (!this.$store.state.user.Whatsapp) { this.$toast.error('Preencha seu whatsapp para continuar.'), this.$router.push('/profile') } else { this.$store.dispatch('modals/open', 'announce') } },

    async announce(step) {
      if (!this.form.Title || !this.form.Description || !this.$refs.uploader?.files?.length) { return this.$toast.error('Preencha todos os campos.') }

      this.loading = 'SAVING'
      if (step === 'MEDIAS') { this.$refs.uploader.upload(); return }
      if (step === 'DATA') { 
        await ProductsColl.add({ ...this.form, ...(auth.currentUser && { User: auth.currentUser.uid }), CreatedAt: new Date() })
        .then(() => {
          this.$toast.success('Produto cadastrado com sucesso')
          this.$store.dispatch('modals/close', 'announce')
          this.load()
        })
        .catch(() => this.$toast.error('Ocorreu um erro, tente novamente'))
      }
      this.loading = false
      this.form.Title = '', this.form.Description = '', this.form.Gallery = []
    }
  }
}
</script>