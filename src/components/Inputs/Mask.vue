<template>
  <div>
    <label v-if="label" :for="name" class="block text-xs font-normal antialiased truncate" :class="`${(errors && error.show) ? 'text-red-600' : 'text-gray-700'}${marked ? ` text-${marked}-600` : ''}`">{{ label }}</label>
    <div class="relative" :class="{'mt-1': label }">
      <span v-if="prefix" v-html="prefix" class="absolute inset-y-0 left-3 flex items-center text-gray-500 sm:text-sm" @click="$emit('prefix')" />
      <input :id="name" :name="name" :value="value" :inputmode="inputmode" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" :autocomplete="autocomplete" v-mask="format ? format : ''" :class="classes" class="w-full border bg-white border-gray-300 placeholder-gray-400 focus:ring-primary focus:border-primary rounded-md shadow-sm pl-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm" @blur="$emit('blur')" @focus="$emit('focus')" @change="$emit('change')" @input="$emit('input', $event.target.value)" />
      <svg v-if="loading" class="absolute top-3 right-3 h-4 w-4 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
      <span v-if="suffix" v-html="suffix" class="absolute inset-y-0 right-3 flex items-center text-gray-500 sm:text-sm" @click="$emit('suffix')" />
      <slot></slot>
    </div>
    <p v-if="errors && error.show" class="mt-1 text-xs text-red-600 antialiased">{{ errors }}</p>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  props: {
    format: { required: true },
    css: { type: String, default: '' },
    label: { type: String, default: '' },
    marked: { type: String, default: '' },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '' },
    name: { type: String, required: true },
    value: { type: String, required: true },
    loading: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    inputmode: { type: String, default: 'text' },
    autocomplete: { type: String, default: 'off' },
    error: { type: Object, default: () => { return { show: false, list: {} } } },
  }, 

  computed: {
    errors: function () {
      // String validation
      if (!Array.isArray(this.format) && this.value.length !== this.format.length) { return 'Campo inválido' }
      // Array validation
      if (Array.isArray(this.format) && !this.format.filter(item => item.length === this.value.length).length) { return 'Campo inválido' }
      return ''
    },

    classes: function () {
      let aux = this.css + ' '
      if (this.prefix) { aux += 'pl-9 ' }
      if (this.suffix) { aux += 'pr-9 ' }
      if (this.disabled) { aux += 'bg-gray-100 text-gray-500 ' }
      if (this.error.show && this.errors) { aux += 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 ' }
      if (this.marked) { aux += `border-${this.marked}-300 text-${this.marked}-900 placeholder-${this.marked}-300 focus:ring-${this.marked}-500 focus:border-${this.marked}-500 ` }
      return aux
    },
  },

  mounted() { this.setErrors() },

  methods: { setErrors() { if (!this.errors) { delete this.error.list[this.name] } else { this.error.list[this.name] = this.errors } } },

  watch: { errors: function () { this.setErrors() } },
  
  beforeDestroy() { delete this.error.list[this.name] },

  directives: { mask },
}
</script>