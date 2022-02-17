<template>
  <div class="grid grid-cols-4 gap-5">
    <Card v-for="(item, index) in items" :key="index" :data="item" />
  </div>
</template>

<script>
import { GuideColl } from '@/firebase'

export default {
  components: {
    Card: () => import('@/components/Cards/Guide')
  },

  data() { return {
    items: []
  } },

  mounted() {
    this.get()
  },

  methods: {
    get() {
      GuideColl.get()
      .then(result => this.items = result.docs.map(item => { return { id: item.id, ...item.data() } }))
      .catch(err => console.log(err))
    }
  },
}
</script>