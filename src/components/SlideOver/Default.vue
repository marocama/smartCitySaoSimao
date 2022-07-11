<template>
  <div>
    <transition enter-class="opacity-0" enter-active-class="ease-in-out duration-500" enter-to-class="opacity-100" leave-class="opacity-100" leave-active-class="ease-in-out duration-500" leave-to-class="opacity-0">
      <div v-if="value" @click="$emit('input', false)" class="fixed inset-0 bg-black bg-opacity-60 transition-opacity z-50" aria-hidden="true" />
    </transition>
    <transition :enter-class="`${side == 'LEFT' ? '-' : ''}translate-x-full`" enter-active-class="transform transition ease-in-out duration-500" enter-to-class="translate-x-0" leave-class="translate-x-0" leave-active-class="transform transition ease-in-out duration-500" :leave-to-class="`${side == 'LEFT' ? '-' : ''}translate-x-full`">
      <div v-if="value" class="fixed inset-y-0 right-0 w-screen h-full flex flex-col bg-white z-50" :class="`max-w-${size} ${side === 'LEFT' ? 'left-0' : 'right-0'}`">
        <!-- Header padrão -->
        <div v-if="!hiddenheader" class="py-3 px-4 sm:px-6 bg-gray-50 border-b-2 border-gray-100">
          <div class="flex justify-between">
            <h2 class="text-gray-500 font-medium">{{ title }}</h2>
            <button @click="$emit('input', false)" type="button" class="text-gray-400 hover:text-gray-500 focus:outline-none"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
          </div>
          <p v-if="subtitle" class="text-xs text-gray-400">{{ subtitle }}</p>
        </div>
        <!-- Header personalizado -->
        <slot name="header" />
        <!-- Conteúdo -->
        <div class="overflow-y-auto scrollbar" :class="css"><slot /></div>
        <!-- Rodapé e ações -->
        <slot name="footer" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    size: { type: String, default: 'sm' },
    side: { type: String, default: 'LEFT' },
    subtitle: { type: String, default: '' },
    value: { type: Boolean, default: false },
    hiddenheader: { type: Boolean, default: false },
    css: { type: String, default: 'mt-4 px-4 sm:px-6' },
  }
}
</script> 