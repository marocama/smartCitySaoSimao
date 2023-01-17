<template>
  <div class="h-full flex flex-col overflow-hidden relative">
    <header class="p-4 sm:px-6 flex justify-between items-center bg-blue-50 border-b border-blue-200 shadow-sm rounded-t-lg">
      <div>
        <h3 class="text-blue-700 text-lg font-medium">Carona Solidária</h3>
        <p class="text-sm text-blue-400">Localizado {{ items.length }} {{ items.length > 1 ? 'resultados' : 'resultado' }}</p>
      </div>
      <div class="inline-flex justify-start space-x-3">
        <button @click="callModal" type="button" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">Anunciar</button>
      </div>
    </header>
    <ul v-if="view" class="p-4 h-full w-full flex-grow space-y-4 overflow-y-scroll">
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
              <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" /></svg>
              {{ item.To || 'Indefinido' }}
            </p>
            <p class="mt-2 flex items-center text-sm">
              <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" /></svg>
              {{ item.From || 'Indefinido' }}
            </p>
          </div>
        </div>
        <div class="flex flex-col space-y-2 text-sm">
          <p class="p-2 bg-blue-50 text-blue-700 font-semibold antialiased rounded-lg">R$ 7,00</p>
          <button @click="del(item.id)" v-if="item.User && item.User.Id === user.uid" type="button" class="p-2 bg-red-50 hover:bg-red-100 text-red-700 font-semibold antialiased rounded-lg"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg></button>
          <button @click="callUser(item.User)" v-else type="button" class="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold antialiased rounded-lg"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></button>
        </div>
      </li>
      <p v-if="!items.length" class="text-gray-500 text-sm text-center">Nenhuma carona encontrada no momento</p>
    </ul>
    <section v-else class="flex-grow grid md:grid-cols-2 overflow-hidden">
      <div class="bg-white overflow-y-scroll scrollbar">
        <p class="p-4 md:pt-10 md:px-10 text-justify text-gray-500 text-lg">Toda semana, todo mês. Para reencontrar seus entes queridos ou simplesmente para descobrir novos lugares. Com uma família grande ou com uma mala grande. De São Paulo, Porto Alegre, Recife ou qualquer outra cidade brasileira. Seja qual for o destino, sua viagem é mais simples.</p>
        <p class="p-4 md:px-10 text-justify text-gray-500 text-lg">Não importa para onde você vai, encontre a carona com a viagem perfeita entre nossos vários destinos e trajetos, todos com preços baixos.</p>
        <button @click="view = true" type="button" class="m-4 md:mx-10 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">Ver caronas disponíveis</button>
      </div>
      <img class="hidden md:block h-full object-cover" src="https://images.pexels.com/photos/3787149/pexels-photo-3787149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Transport" />
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
import { auth, RidesColl, UsersColl } from '@/firebase'

export default {
  components: {
    Avatar: () => import('@/components/Avatar'),
    Input: () => import('@/components/Inputs/Default'),
    InputMask: () => import('@/components/Inputs/Mask'),
    Button: () => import('@/components/Button'),
  },
  
  data() { return {
    items: [],
    view: false,
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
    
    async callUser(user) {
      await UsersColl.doc(user.Id).get()
      .then(result => {
        if (result.data()?.Whatsapp) { window.open(`https://api.whatsapp.com/send?phone=55${result.data()?.Whatsapp}&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20sua%20carona.`, '_blank') }
        else { this.$toast.error('Telefone não localizado.') }
      })
      .catch(() => this.$toast.error('Erro ao buscar, tente novamente.'))
    },

    formatPrice() {
      let decimal = '00'
      const split = this.form.Price.split(',')
      if ((split[1] || '').length === 1) { decimal = `${split[1]}0` } else if ((split[1] || '').length === 2) { decimal = split[1] }
      this.form.Price = `${split[0] || '0'},${decimal}`
    },
    
    async announce() {
      if (!this.form.OccursAt || !this.form.From || !this.form.To || !this.form.Price) { return this.$toast.error('Preencha todos os campos.') }

      this.loading = 'SAVING'
      await RidesColl.add({
        CreatedAt: new Date(),
        To: this.form.To || '',
        From: this.form.From || '',
        OccursAt: new Date(this.form.OccursAt || ''),
        Price: parseFloat((this.form.Price || '').replace(',', '.') || 0),
        ...(auth.currentUser && { User: { Id: auth.currentUser.uid, Name: this.$store.state.user.Name || '' } }),
      })
      this.$store.dispatch('modals/close', 'announce')
      this.loading = false
      this.load()
      this.form.OccursAt = '', this.form.From = '', this.form.To = '', this.form.Price = '0,00'
    },

    async del(id) {
      await RidesColl.doc(id).delete()
      this.load()
    }
  }
}
</script>