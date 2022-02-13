<template>
  <section>
    <!-- Máscara -->
    <div @click="show = false" v-if="show == true" class="absolute inset-0" style="z-index: 1" />
    <!-- Botão -->
    <div class="relative">
      <button @click="show = !show" type="button" class="p-1 flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-600" id="menu-button" aria-expanded="true" aria-haspopup="true"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg></button>   
      <!-- Opções -->
      <transition enter-class="transform opacity-0 scale-95" enter-active-class="transition ease-out duration-100" enter-to-class="transform opacity-100 scale-100" leave-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-to-class="transform opacity-0 scale-95">
        <div v-if="show == true" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" style="z-index: 2">
          <div class="py-1" role="none">
            <button type="button" class="py-2 px-4 flex items-center space-x-2 text-gray-700 text-sm">
              <svg class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              <span>Contato</span>
            </button>
            <button type="button" class="py-2 px-4 flex items-center space-x-2 text-gray-700 text-sm">
              <svg class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
              <span>Como chegar</span>
            </button>
            <button type="button" class="py-2 px-4 flex items-center space-x-2 text-gray-700 text-sm">
              <svg class="h-3.5 w-3.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
              <span>Compartilhar</span>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data() { return {
    show: false
  } }
}
</script>