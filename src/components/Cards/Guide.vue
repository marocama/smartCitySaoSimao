<template>
  <article class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md" @mouseenter="arrows = true" @mouseleave="arrows = false">
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
      <span class="py-0.5 px-3 absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm rounded-full" style="z-index: 1">{{ data.Sector }}</span>
    </div>
    <!-- Conteúdo -->
    <div class="px-3 py-2 border-b">
      <p class="text-lg font-medium">{{ data.Title }}</p>
      <p v-if="data.Address" class="text-sm text-gray-500">{{ data.Address.City }} / {{ data.Address.State }}</p>
    </div>
    <div class="py-2 grid grid-cols-2 divide-x bg-gray-50 text-gray-500 antialiased">
      <button type="button" class="flex justify-center items-center space-x-2 hover:text-purple-500">
        <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
        <span>Como chegar</span>
      </button>
      <button type="button" class="flex justify-center items-center space-x-2 hover:text-purple-500">
        <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
        <span>Contato</span>
      </button>
    </div>
  </article>
</template>

<script>
Swiper.use([ Navigation, Lazy ])
import 'swiper/swiper-bundle.css'
import Swiper, { Navigation, Lazy } from 'swiper'

export default {
  props: { data: { type: Object, required: true } },

  components: {
    // Dropdown: () => import('@/components/Buttons/Dropdown')
  },

  data() { return {
    arrows: false
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