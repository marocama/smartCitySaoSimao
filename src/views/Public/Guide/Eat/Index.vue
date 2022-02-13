<template>
  <div class="grid grid-cols-4 gap-5">
    <Card v-for="(item, index) in list" :key="index" />
  </div>
</template>

<script>
export default {
  components: {
    Card: () => import('@/components/Cards/Guide')
  },

  data() { return {
    list: ['1', '2', '3', '4']
  } },
}
</script>