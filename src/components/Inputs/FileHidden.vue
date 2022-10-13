<template>
  <FilePond
    :ref="name"
    :name="name"
    labelIdle=""
    class="hidden"
    v-model="file"
    credits="false"
    :required="true"
    :instant-upload="true"
    :drop-validation="true"
    min-file-size="1KB"
    max-file-size="5MB"
    imageValidateSizeMinWidth="300"
    imageValidateSizeMaxWidth="5400"
    imageValidateSizeMinHeight="300"
    imageValidateSizeMaxHeight="5400"
    :imageTransformOutputQuality="80"
    image-transform-output-mime-type="image/webp"
    :accepted-file-types="['image/png', 'image/jpg', 'image/jpeg', 'image/webp']"
    :allowProcess="false"
    :allowRemove="false"
    :allowRevert="false"
    labelTapToCancel=""
    :server="{ process: (fieldName, file, metadata, load, error, progress) => { uploadFiles(fieldName, file, metadata, load, error, progress) } }"
    @error="error"
  />
</template>

<script>
import { auth, storageRef } from '@/firebase'
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
    path: { type: String, required: true },
    name: { type: String, default: 'hidden' },
  },

  components: { FilePond },

  data() { return { file: '' } },

  methods: {
    browse() { console.log('browse', this.$refs[this.name].browse()), this.$refs[this.name].browse() },

    error(event) { this.$toast.error(event.sub || 'Falha ao salvar, tente novamente.') },

    async uploadFiles(fieldName, file, metadata, load, error, progress) {
      if (!auth.currentUser) { this.$router.push('/auth'); return }
      
      this.$emit('loading')
      const uploadTask = storageRef.child(this.path).put(file)

      uploadTask.on('state_changed', 
        snapshot => progress(true, snapshot.bytesTransferred, snapshot.totalBytes), 
        err => error(err.message),
        async () => uploadTask.snapshot.ref.getDownloadURL()
        .then(async result => this.$emit('change', result))
        .catch(() => this.$toast.error('Falha ao salvar, tente novamente.'))
      )
    }
  }
}
</script>