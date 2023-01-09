<template>
  <form @submit.prevent="set" class="pt-6 divide-y divide-gray-200">
    <div class="px-4 sm:px-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Alterar senha</h2>
      <p class="mt-1 text-sm text-gray-500">Atualize sua senha de acesso.</p>
      <div class="mt-6 pb-2 space-y-3">
        <Input v-model="form.old" name="old" label="Senha antiga" :disabled="!!loading" :validations="{ required: true }" :error="err" />
        <Input v-model="form.new" name="new" label="Senha nova" :disabled="!!loading" :validations="{ required: true }" :error="err" />
      </div>
    </div>
    <div class="mt-4 p-4 sm:px-6 flex justify-end">
      <button type="submit" class="py-2 px-4 inline-flex justify-center bg-purple-600 hover:opacity-80 border border-transparent text-sm font-medium text-white rounded-md shadow-sm">Salvar</button>
    </div>
  </form>
</template>

<script>
import { auth, UsersColl } from '@/firebase'

export default {
  components: { Input: () => import('@/components/Inputs/Default')},
  
  data() { return {
    loading: false,
    form: { old: '', new: '' },
    err: { show: false, list: {} },
  } },
  
  methods: {
    async set() {
      this.err.show = false
      for (const field in this.err.list) { if (this.err.list[field]) { this.err.show = true; break } }
      if (this.err.show) { this.$toast.error('Dados pendentes'); return }
      
      this.loading = 'SETTING'
      await UsersColl.doc(auth.currentUser.uid).update({
        Name: this.form.name || '',
        Whatsapp: this.form.whatsapp || '',
        Address: { Number: this.form.address.number || '', PostalCode: this.form.address.postalcode || '', Street: this.form.address.street || '', Neighborhood: this.form.address.neighborhood || '', City: this.form.address.city || '', State: this.form.address.state || '' },
      })
      this.$toast.success('Dados atualizados com sucesso')
      this.loading = false
    }
  }
}
</script>