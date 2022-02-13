<template>
  <article class="bg-white rounded-lg shadow-md" @mouseenter="arrows = true" @mouseleave="arrows = false">
    <!-- Carrossel -->
    <div class="swiperCarousel swiper-button-hidden relative rounded-b-xl overflow-hidden text-white z-0">
      <div class="swiper-wrapper">
        <div class="swiper-slide flex justify-center">
          <img class="h-40 w-full object-cover rounded-t-lg swiper-lazy" src="https://pesweb.azureedge.net/spimg/restaurantphotos/5-star-hotel-porto-restaurant-details-new.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=775&h=530&mode=crop" alt="Restaurante" />
          <div class="swiper-lazy-preloader" />
        </div>
        <div class="swiper-slide flex justify-center">
          <img class="h-40 w-full object-cover rounded-t-lg swiper-lazy" src="https://pesweb.azureedge.net/spimg/restaurantphotos/5-star-hotel-porto-restaurant-details-new.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=775&h=530&mode=crop" alt="Restaurante" />
          <div class="swiper-lazy-preloader" />
        </div>
      </div>
      <div v-if="arrows" class="swiper-button-next" />
      <div v-if="arrows" class="swiper-button-prev" />
    </div>
    <!-- Conteúdo -->
    <div class="py-1 px-3 flex justify-between items-center">
      <div>
        <p class="text-lg font-medium">Restaurante Vila Nova</p>
        <p class="text-sm text-gray-500">Restaurante</p>
      </div>
      <!-- Contato -->
      <div class="flex" style="height: min-content">
        <Dropdown />
      </div>
    </div>
  </article>
</template>

<script>
Swiper.use([ Navigation, Lazy ])
import 'swiper/swiper-bundle.css'
import Swiper, { Navigation, Lazy } from 'swiper'

export default {
  components: {
    Dropdown: () => import('@/components/Buttons/Dropdown')
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