<template>
  <article class="bg-white border border-gray-200 rounded-lg hover:shadow-lg overflow-hidden shadow-md" style="height: min-content" @mouseenter="arrows = true" @mouseleave="arrows = false">
    <!-- Carrossel -->
    <div class="swiperCarousel swiper-button-hidden relative text-white rounded-b-lg overflow-hidden shadow-md z-0">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in data.Gallery" :key="index" class="swiper-slide flex justify-center">
          <img class="h-40 w-full object-cover rounded-t-lg swiper-lazy" :src="item" />
          <div class="swiper-lazy-preloader" />
        </div>
      </div>
      <div v-show="arrows" class="swiper-button-next" />
      <div v-show="arrows" class="swiper-button-prev" />
      <button @click="del" v-if="data.User === user.uid" type="button" class="p-2 absolute top-3 right-3 bg-red-50 hover:bg-red-100 bg-opacity-80 text-red-700 font-semibold antialiased rounded-full z-10"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg></button>
    </div>
    <!-- Conteúdo -->
    <div class="px-3 py-2 w-full flex items-center space-x-2 overflow-hidden">
      <div class="w-full truncate">
        <p class="text-lg font-medium truncate">{{ data.Title }}</p>
        <p class="text-sm text-gray-500 truncate">{{ data.Description }}</p>
      </div>
      <button @click="callUser" type="button" class="p-2 flex-shrink-0 bg-green-50 hover:bg-green-100 bg-opacity-80 text-green-700 font-semibold antialiased rounded-full z-10"><svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" /></svg></button>
    </div>
  </article>
</template>

<script>
Swiper.use([ Navigation, Lazy ])
import 'swiper/swiper-bundle.css'
import { auth, CollectsColl, ProductsColl, UsersColl } from '@/firebase'
import Swiper, { Navigation, Lazy } from 'swiper'

export default {
  props: { 
    origin: { type: String, default: ''},
    data: { type: Object, required: true }, 
  },

  data() { return { 
    arrows: false, 
    user: auth.currentUser || {} 
  } },

  mounted() {
    this.swiper = new Swiper('.swiperCarousel', {
      lazy: { loadPrevNext: true },
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: true,
      }
    })
  },

  methods: {
    async callUser() {
      await UsersColl.doc(this.data.User || '').get()
      .then(result => {
        if (result.data()?.Whatsapp) { window.open(`https://api.whatsapp.com/send?phone=55${result.data()?.Whatsapp}&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20${ (this.data.Title || '...').replace(/ /ig, '%20') }.`, '_blank') }
        else { this.$toast.error('Telefone não localizado.') }
      })
      .catch(() => this.$toast.error('Erro ao buscar, tente novamente.'))
    },

    async del() {
      if (this.origin === 'collects') { await CollectsColl.doc(this.data.id).delete() }
      else if (this.origin === 'products') { await ProductsColl.doc(this.data.id).delete() }
      this.$emit('load')
    }
  }
}
</script>

<style>
.swiper-button-next, .swiper-button-prev {
  right: 10px;
  padding: 1rem;
  border-radius: 20px;
  fill: black !important;
  width: 0.5rem !important;
  color: black !important;
  height: 0.5rem !important;
  stroke: black !important;
  background-color: rgba(255, 255, 255, 1);
}
.swiper-button-next:hover, .swiper-button-prev:hover { background-color: rgba(255, 255, 255, 1) }
.swiper-button-prev:after, .swiper-button-next:after {
  font-size: 10px !important;
  font-weight: bold !important;
}
</style>