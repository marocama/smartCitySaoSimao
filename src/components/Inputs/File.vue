<template>
  <div class="relative">
    <p class="mb-1 block text-xs font-normal antialiased text-gray-700">Imagens</p>
    <FilePond
      ref="pond"
      :name="name"
      :files="files"
      v-model="files"
      :disabled="disabled"
      :required="required"
      :max-files="maxfiles"
      :allow-reorder="true"
      :allow-revert="false"
      :drop-validation="true"
      :instant-upload="false"
      :allow-multiple="maxfiles > 1"
      min-file-size="1KB"
      max-file-size="5MB"
      :imageTransformOutputQuality="80"
      image-transform-output-mime-type="image/webp"
      :accepted-file-types="['image/png', 'image/jpg', 'image/jpeg', 'image/webp']"
      imageValidateSizeMinHeight="250"
      imageValidateSizeMinWidth="250"
      imageValidateSizeMaxHeight="5400"
      imageValidateSizeMaxWidth="5400"
      labelTapToCancel=""
      :allowProcess="false"
      :server="{ 
        remove: (source, load, error) => { removeFiles(source, load, error) },
        load: (source, load, error, progress) => { getFiles(source, load, error, progress) },
        process: (fieldName, file, metadata, load, error, progress) => { uploadFiles(fieldName, file, metadata, load, error, progress) }, 
      }"
      @updatefiles="$emit('change', $event)"
    />
    <span v-if="errors && error.show" class="text-xs text-red-600 antialiased">{{ errors }}</span>
  </div>
</template>

<script>
import { storage, storageRef } from '@/firebase'
import 'filepond/dist/filepond.min.css'
import pt_BR from 'filepond/locale/pt-br.js'
import vueFilePond, { setOptions } from 'vue-filepond'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size'

// Translator
setOptions(pt_BR)
// Uploader
const FilePond = vueFilePond(FilePondPluginImagePreview, FilePondPluginImageTransform, FilePondPluginFileValidateSize, FilePondPluginFileValidateType, FilePondPluginImageValidateSize)

export default {
  props: {
    path: { type: String, default: '' },
    maxfiles: { type: Number, default: 1 },
    name: { type: String, required: true },
    value: { type: Array, required: true },
    prev: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    error: { type: Object, default: () => { return { show: false, list: {} } } },
  },

  components: { FilePond },

  data() { return { files: [] } },

  computed: { 
    errors: function () {
      // Required validation
      if (this.required && !this.files.length) { return 'Campo requerido' }
      // Files with error
      if (this.files.filter(item => item.status === 8).length) { return 'Corrija os erros destacados' }
      // Max 
      if (this.files.length > this.maxfiles) { return 'Este campo deve conter até ' + this.maxfiles + ' arquivos' }
      return ''
    } 
  },
	
  mounted() { 
    this.setErrors()
    if (this.value.length) { this.files = this.value.map(item => { return { source: item, options: { type: 'local' } } }) } 
  },

  methods: {
    browse() { this.$refs.pond.browse() },

    async upload() { await this.$refs.pond.processFiles().then(async () => this.$emit('uploaded')) },
    
    getFiles(source, load, error, progress) {
      progress(true, 0, 1024)      
      const xhr = new XMLHttpRequest()
      xhr.onload = function () { load(xhr.response) }
      xhr.responseType = 'blob'
      xhr.open('GET', source)
      xhr.send()
    },

    async uploadFiles(fieldName, file, metadata, load, error, progress) {
      
      const id = `${Math.floor(Math.random() * (99999999 - 10000000)) + 10000000}${new Date().getTime()}`
      const uploadTask = storageRef.child(`${this.path}/${id}`).put(file)

      uploadTask.on('state_changed', 
        snapshot => progress(true, snapshot.bytesTransferred, snapshot.totalBytes), 
        err => error(err.message),
        async () => uploadTask.snapshot.ref.getDownloadURL().then(res => { this.$emit('input', [ ...this.value, res ]), load(id) })
      )
    },

    async removeFiles(source, load, error) { await storage.refFromURL(source).delete().then(() => load()).catch(() => error()) },

    setErrors() { if (!this.errors) { delete this.error.list[this.name] } else { this.error.list[this.name] = this.errors } }
	},

  watch: { 
    errors: function () { this.setErrors() },
    prev: function (val) { if (val.length) { this.files = val.map(item => { return { source: item, options: { type: 'local' } } }); Array.prototype.push.apply(this.value, val) } } 
  },
  
  beforeDestroy() { delete this.error.list[this.name] },
}
</script>

<style>
.filepond--item {
  height: 200px !important;
  overflow: hidden !important;
  border-radius: 0.5rem !important;
}
.filepond--file-info { 
  display: none;
}
@media (min-width: 30em) {
  .filepond--item {
    width: calc(50% - 0.5em);
  }
}
@media (min-width: 50em) {
  .filepond--item {
    width: calc(33.33% - 0.5em);
  }
}
</style>