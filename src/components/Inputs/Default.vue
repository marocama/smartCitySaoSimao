<template>
  <div>
    <label v-if="label" :for="name" class="block text-xs font-normal antialiased truncate" :class="(errors && error.show) ? 'text-red-600' : 'text-gray-700'" v-html="label" @click="$emit('label')" />
    <div class="relative" :class="{'mt-1': label }">
      <span v-if="prefix" v-html="prefix" class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 sm:text-sm" @click="$emit('prefix')" />
      <input v-if="rows === 1" ref="inpt" :name="name" :value="value" :inputmode="inputmode" :type="inputmode" :disabled="disabled || loading" :placeholder="placeholder" :autocomplete="autocomplete" class="w-full border rounded-md focus:ring-purple-500 focus:border-purple-500 shadow-sm pl-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm" :class="classes" @blur="$emit('blur')" @focus="$emit('focus')" @change="$emit('change')" @input="$emit('input', $event.target.value)" />
      <textarea v-else ref="inpt" :name="name" :value="value" :inputmode="inputmode" :rows="rows" :disabled="disabled || loading" :placeholder="placeholder" :autocomplete="autocomplete" class="w-full border rounded-md focus:ring-purple-500 focus:border-purple-500 shadow-sm pl-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm" :class="classes" @blur="$emit('blur')" @focus="$emit('focus')" @change="$emit('change')" @input="$emit('input', $event.target.value)" />
      <svg v-if="loading" class="absolute top-3 right-3 h-4 w-4 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
      <span v-if="suffix" v-html="suffix" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 sm:text-sm" @click="$emit('suffix')" />
      <slot />
    </div>
    <p v-if="errors && error.show" class="mt-1 text-xs text-red-600 antialiased">{{ errors }}</p>
  </div>
</template>

<script>
export default {
  props: {
    css: { type: String, default: '' },
    rows: { type: Number, default: 1 },
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '' },
    name: { type: String, default: 'input' },
    placeholder: { type: String, default: '' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    inputmode: { type: String, default: 'text' },
    autocomplete: { type: String, default: 'off' },
    validations: { type: Object, default: () => { return new Object() } },
    error: { type: Object, default: () => { return { show: false, list: {} } } },
  }, 

  computed: {
    classes: function () {
      let aux = this.css + ' '
      if (this.prefix) { aux += 'pl-8 ' }
      if (this.suffix) { aux += 'pr-9 ' }
      if (!this.css.includes('bg-')) { aux += 'bg-white '}
      if (!this.css.includes('border-')) { aux += 'border-gray-300 '}
      if (!this.css.includes('placeholder-')) { aux += 'placeholder-gray-400 '}
      if (this.disabled || this.loading) { aux += 'bg-gray-50 text-gray-500 ' }
      if (this.error.show && this.errors) { aux += 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 ' }
      return aux
    },

    errors: function () {
      // Required validation
      if (this.validations?.required && !this.value) { return 'Campo requerido' }
      // Numeric validation
      if ('numeric' in this.validations && isNaN(this.value.replace(',', '.'))) { return 'Este campo só aceita valores númericos' }
      // Min validation
      if ('min' in this.validations && this.value.length < this.validations.min) { return 'Este campo deve conter pelo menos ' + this.validations.min + ' caracteres' }
      // Max validation
      if ('max' in this.validations && this.value.length > this.validations.max) { return 'Este campo deve conter até ' + this.validations.max + ' caracteres' }
      // Regex validation
      if ('regex' in this.validations && !/^[0-9A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ.,()²ºª'\s]+$|^$/.test(this.value)) { return 'Campo inválido' }
      // Email validation
      if ('email' in this.validations && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value)) { return 'Preencha um email válido' }
      return ''
    },
  },

  mounted() { if (this.autofocus) { this.focus() } this.setErrors() },

  methods: { 
    blur() { this.$refs.inpt.blur() },
    focus() { this.$refs.inpt.focus() },
    setErrors() { if (!this.errors) { delete this.error.list[this.name] } else { this.error.list[this.name] = this.errors } },
  },

  watch: { errors: function () { this.setErrors() } },
  
  beforeDestroy() { delete this.error.list[this.name] },
}
</script>