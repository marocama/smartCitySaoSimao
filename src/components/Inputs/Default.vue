<template>
  <input :value="value" :type="type" autocomplete="off" :required="required" :disabled="loading" class="py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" :class="loading ? 'bg-gray-100' : ''" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
    type: { type: String, default: 'text'},
    loading: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  }
}
</script>