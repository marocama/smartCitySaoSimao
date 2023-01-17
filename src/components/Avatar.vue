<template>
  <div @click="$emit('click')" class="bg-white relative flex-shrink-0" :class="`${css} h-${size} w-${size}${sm ? ` sm:h-${sm} sm:w-${sm}` : ``}`">
    <div v-if="loading" class="bg-gray-200 animate-pulse" :class="`h-${size} w-${size}${sm ? ` sm:h-${sm} sm:w-${sm}` : ``} ${css}`" style="z-index: 1" />
    <svg v-else-if="!data" :class="`${size < 6 ? 'p-0.5' : 'p-2'} h-${size} w-${size}${sm ? ` sm:h-${sm} sm:w-${sm}` : ``} text-white bg-gray-300 ${css}`" style="z-index: 1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
    <img v-else :src="data" :class="`h-${size} w-${size}${sm ? ` sm:h-${sm} sm:w-${sm}` : ``} ${css}`" @error="data = false" style="z-index: 1" />
    <Uploader v-if="editable" ref="avatar" :path="`users/${id === 'CURRENTUSER' ? (user.uid || '') : id}`" @change="$toast.error('Foto atualizada.'), get()" @loading="loading = true" />
    <button @click.stop="$refs.avatar.browse()" v-if="editable" type="button" class="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 ring ring-white rounded-full focus:select-none"><svg class="p-1.5 w-8 h-8 text-white" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3s3-1.374 3-3s-1.374-3-3-3z" fill="currentColor"/><path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5s2.29-5 5-5s5 2.29 5 5s-2.29 5-5 5z" fill="currentColor"/></svg></button>
    <slot />
  </div>
</template>

<script>
import { auth, storageRef } from '@/firebase'

export default {
  props: {
    id: { type: String, default: '' },
    sm: { type: String, default: '' },
    size: { type: String, default: '20' },
    edit: { type: Boolean, default: false },
    css: { type: String, default: 'rounded-full' },
  },

  components: { Uploader: () => import('@/components/Inputs/FileHidden') },

  data() { return { data: '', user: auth.currentUser, loading: true, editable: false } },

  mounted() { if (this.id) { this.get() } },

  methods: {
    async get() {
      if (this.edit && (this.id === 'CURRENTUSER' || this.id === auth?.currentUser?.uid)) { this.editable = true }
      this.loading = true
      await storageRef.child(`users/${this.id === 'CURRENTUSER' ? auth?.currentUser?.uid : this.id}`).getDownloadURL().then(result => this.data = result).catch(() => this.data = false)
      this.loading = false
    }
  },

  watch: { id: function(val) { if (val) { this.get() } } }
}
</script>