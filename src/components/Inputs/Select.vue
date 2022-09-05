<template>
  <div :id="name">
    <label v-if="label" class="block text-xs font-normal antialiased" :class="(errors && error.show) ? 'text-red-600' : 'text-gray-700'">{{ label }}</label>
    <div class="relative" :class="{'mt-1': label }">
      <!-- Botão externo -->
      <button @click="click()" type="button" :disabled="disabled" :class="classes" class="relative border bg-white border-gray-300 focus:ring-purple-500 focus:border-purple-500 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 sm:text-sm">
        <span class="block truncate">{{ value || placeholder }}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2" v-html="icon" />
      </button>
      <p v-if="errors && error.show && !visible && !hiddenerror" class="mt-1 text-xs text-red-600 antialiased">{{ errors }}</p>
      <transition enter-active-class="transition ease-in duration-50 transform" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-50 transform" leave-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="visible" class="z-40 fixed inset-0"><div @click="visible = false" class="absolute inset-0 bg-black opacity-10" tabindex="0"></div></div>
      </transition>
      <!-- Parte interna -->
      <transition enter-active-class="transition ease-in duration-50 transform" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-50 transform" leave-class="opacity-100" leave-to-class="opacity-0">
        <ul v-if="visible" class="absolute mt-1 w-full z-40 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto scrollbar focus:outline-none sm:text-sm" :style="`${maxheight ? `max-height: ${maxheight}; overflow-y: scroll` : ''}`">
          <!-- Itens -->
          <li @click="$emit('input', item), visible = false" v-for="(item, key) in values" :key="key" :id="name+'-'+key" class="cursor-pointer select-none relative py-2 pl-3 pr-9" :class="over === item ? 'text-white bg-purple-500' : 'text-gray-900'" @mouseleave="over = ''" @mouseover="over = item">
            <span class="truncate" :class="{ 'font-semibold': item === value, 'font-normal': item !== value, 'flex justify-between': captions.length }">
              {{ item }}
              <span v-if="captions.length" class="text-sm" :class="over === item ? 'text-white' : 'text-gray-500'">{{ captions[key] }}</span>
            </span>
            <!-- Check p/ item selecionado -->
            <span v-if="item === value" class="absolute inset-y-0 right-0 flex items-center pr-4" :class="over === item ? 'text-white' : 'text-purple-500'"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg></span>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    css: { type: String, default: '' },
    label: { type: String, default: '' },
    value: { type: String, required: true },
    values: { type: Array, required: true },
    maxheight: { type: String, default: '' }, 
    name: { type: String, default: 'select' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    hiddenerror: { type: Boolean, default: false },
    placeholder: { type: String, default: 'Selecione' },
    captions: { type: Array, default: () => { return [] } },
    error: { type: Object, default: () => { return { show: false, list: {} } } },
    icon: { type: String, default: '<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>' },
  },
  
  data() { return { over: '', visible: false } },
  
  computed: {
    errors: function () { 
      if (this.required && !this.value) { return 'Campo requerido' }
      if (this.required && !this.values.includes(this.value)) { return 'Seleção inválida' }
      return '' 
    },
    
    classes: function () {
      let aux = this.css + ' '
      if (!this.css.includes('w-')) { aux += ' w-full '}
      if (this.disabled) { aux += 'bg-gray-50 text-gray-500 ' }
      if (this.error.show && this.errors) { aux += 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 ' }
      return aux
    },
  },
  
  mounted() { this.over = this.value, this.setErrors() },

  methods: { 
    setErrors() { if (!this.errors) { delete this.error.list[this.name] } else { this.error.list[this.name] = this.errors } },

    click() { if(!this.disabled) { this.visible = !this.visible, this.over = this.value } },
  },

  watch: { errors: function () { this.setErrors() } },
  
  beforeDestroy() { delete this.error.list[this.name] },
}
</script>