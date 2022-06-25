<template>
  <div>
    <label v-if="label" :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input v-if="rows === 1" :name="name" :value="value" :type="type" autocomplete="off" :required="required" :disabled="loading" class="py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" :class="loading ? 'bg-gray-100' : ''" @input="$emit('input', $event.target.value)" />
    <textarea v-else :name="name" :value="value" :type="type" :rows="rows" autocomplete="off" :required="required" :disabled="loading" class="py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" :class="loading ? 'bg-gray-100' : ''" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: ''},
    rows: { type: Number, default: 1 },
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    type: { type: String, default: 'text'},
    loading: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  }
}
</script>