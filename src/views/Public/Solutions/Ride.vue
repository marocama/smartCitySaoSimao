<template>
  <div class="h-full flex flex-col overflow-hidden relative">
    <header class="p-4 sm:px-6 flex justify-between items-center bg-blue-50 border-b border-blue-200 shadow-sm rounded-t-lg">
      <div>
        <h3 class="text-blue-700 text-lg font-medium">Carona Solidária</h3>
        <p class="text-sm text-blue-400">Exibindo {{ items.length }} {{ items.length > 1 ? 'resultados' : 'resultado' }}</p>
      </div>
      <div class="inline-flex justify-start space-x-3">
        <button @click="callModal" type="button" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">Anunciar</button>
      </div>
    </header>
    <ul class="p-4 h-full w-full flex-grow space-y-4 overflow-y-scroll">
      <li v-for="(item, index) in items" :key="index" class="py-2 px-4 sm:px-6 flex items-center hover:bg-gray-50 text-gray-500 border border-gray-200 rounded-lg shadow-sm">
        <Avatar v-if="!$store.state.mobile" :id="item.User.Id" size="12" class="flex-shrink-0" />
        <div class="min-w-0 flex-1 md:px-4 md:grid md:grid-cols-2 md:gap-4">
          <div>
            <p class="truncate text-sm font-medium text-blue-700">{{ item.User.Name || 'Desconhecido' }}</p>
            <p class="mt-2 flex items-center text-sm">
              <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" /></svg>
              <span class="truncate">{{ item.OccursAt ? item.OccursAt.toDate().toLocaleString().slice(0, -3).split(' ').join(' às ') : 'Indefinido' }}</span>
            </p>
          </div>
          <div class="mt-2 md:mt-0">
            <p class="text-sm flex items-center">
              <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" /></svg>
              {{ item.To || 'Indefinido' }}
            </p>
            <p class="mt-2 flex items-center text-sm">
              <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
              {{ item.From || 'Indefinido' }}
            </p>
          </div>
        </div>
        <div class="flex flex-col space-y-2 text-sm">
          <p class="p-2 bg-blue-50 text-blue-700 font-semibold antialiased rounded-lg">R$ 7,00</p>
          <button @click="del(item.id)" v-if="item.User && item.User.Id === user.uid" type="button" class="p-2 bg-red-50 hover:bg-red-100 text-red-700 font-semibold antialiased rounded-lg"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg></button>
          <a v-else :href="`https://api.whatsapp.com/send?phone=55${item.User.Whatsapp}&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20sua%20carona.`" target="_blank" class="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold antialiased rounded-lg"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></a>
        </div>
      </li>
    </ul>
    <footer class="pb-4 md:pb-7 px-4 sm:px-6 w-full flex justify-start md:justify-end items-end flex-wrap space-y-4 space-x-4 bg-gray-50 border-t border-gray-200 rounded-b-lg overflow-hidden">
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/3.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/7.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/8.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/11.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/12.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/17.svg')" />
    </footer>
    <!-- Anunciar -->
    <modal id="announce" title="Anunciar" fullscreen>
      <div class="mt-2 mb-4 sm:w-80 space-y-3">
        <div>
          <label class="mb-1 block text-gray-700 text-xs font-normal antialiased truncate">Horário de partida</label>
          <Input v-model="form.OccursAt" name="startTime" inputmode="datetime-local" :loading="loading === 'SAVING'" :disabled="!!loading" />
        </div>
        <Input v-model="form.From" name="from" label="Local de Partida" placeholder="Bairro de Partida" :loading="loading === 'SAVING'" :disabled="!!loading" />
        <Input v-model="form.To" name="to" label="Local de Destino" placeholder="Bairro de Destino" :loading="loading === 'SAVING'" :disabled="!!loading" />
        <InputMask v-model.lazy="form.Price" name="price" label="Preço" inputmode="numeric" placeholder="0,00" prefix="R$" :format="['#,##', '##,##']" :loading="loading === 'SAVING'" :disabled="!!loading" @change="formatPrice" />
      </div>
      <template #actions>
        <Button @click="announce" text="Salvar" class="mt-auto" />
      </template>
    </modal>
  </div>
</template>

<script>
import { auth, RidesColl } from '@/firebase'

export default {
  components: {
    Avatar: () => import('@/components/User/Avatar'),
    Input: () => import('@/components/Inputs/Default'),
    InputMask: () => import('@/components/Inputs/Mask'),
    Button: () => import('@/components/Buttons/Default'),
  },
  
  data() { return {
    items: [],
    loading: false,
    user: auth.currentUser || {},
    form: { OccursAt: '', From: '', To: '', Price: '0,00' },
  } },
  
  mounted() { this.load() },
  
  methods: {
    async load() {
      await RidesColl.where('OccursAt', '>=', new Date()).orderBy('OccursAt').get()
      .then(result => { this.items = result.docs.map(item => ({ id: item.id, ...item.data() })) })
      .catch(() => this.$toast.error('Falha ao carregar, tente novamente.'))
    },
    
    callModal() { if (!auth.currentUser) { this.$router.push('/auth') } else if (!this.$store.state.user.Whatsapp) { this.$toast.error('Preencha seu whatsapp para continuar.'), this.$router.push('/profile') } else { this.$store.dispatch('modals/open', 'announce') } },
    
    formatPrice() {
      let decimal = '00'
      const split = this.form.Price.split(',')
      if ((split[1] || '').length === 1) { decimal = `${split[1]}0` } else if ((split[1] || '').length === 2) { decimal = split[1] }
      this.form.Price = `${split[0] || '0'},${decimal}`
    },
    
    async announce() {
      this.loading = 'SAVING'
      await RidesColl.add({
        ...this.form,
        CreatedAt: new Date(),
        ...(auth.currentUser && { User: { Id: auth.currentUser.uid, Name: this.$store.state.user.Name || '', Whatsapp: this.$store.state.user.Whatsapp || '' } }),
      })
      this.$store.dispatch('modals/close', 'announce')
      this.loading = false
      this.load()
    },

    async del(id) {
      await RidesColl.doc(id).delete()
      this.load()
    }
  }
}
</script>