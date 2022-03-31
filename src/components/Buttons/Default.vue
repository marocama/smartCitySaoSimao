<template>
  <button @click="$emit('click')" :type="type" class="py-2 px-4 w-full flex justify-center border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <svg v-if="loading" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' },
    type: { type: String, default: 'button' },
    loading: { type: Boolean, default: false },
  }
}
</script>