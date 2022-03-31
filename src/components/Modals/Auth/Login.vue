<template>
  <modal id="login" width="25%">
    <!-- Email -->
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <Input v-model="form.email" type="email" required :loading="loading" />
    <!-- Senha -->
    <label for="password" class="mt-4 block text-sm font-medium text-gray-700">Senha</label>
    <Input v-model="form.password" type="password" required :loading="loading" />
    <!-- Esqueci minha senha -->
    <button type="button" class="mt-2 w-full text-right font-medium text-sm text-indigo-600 hover:text-indigo-500">Esqueceu sua senha?</button>
    <!-- Entrar -->
    <Button @click="login" text="Entrar" type="submit" :loading="loading" />
    <!-- Registrar -->
    <div class="mt-2 w-full text-center space-x-1">
      <span class="font-medium text-gray-600">Não possui conta?</span>
      <button @click="$store.dispatch('modals/close', 'login'), $store.dispatch('modals/open', 'register')" type="button" class="font-medium text-indigo-600">Registre-se</button>
    </div>
  </modal>
</template>

<script>
import { auth } from '@/firebase'

export default {
  components: {
    Input: () => import('@/components/Inputs/Default'),
    Button: () => import('@/components/Buttons/Default'),
  },

  data() { return {
    form: {
      email: '',
      password: ''
    },
    loading: false
  } },

  methods: {
    async login() {
      this.loading = true
      await auth.signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(() => { this.$toast.success('Login efetuado com sucesso'), this.$store.dispatch('modals/close', 'login') })
      .catch(err => this.$toast.error({ 
        'auth/invalid-email': 'E-mail inválido, tente novamente', 
        'auth/user-disabled': 'Conta desativada, entre em contato', 
        'auth/user-not-found': 'Conta não localizada, tente novamente', 
        'auth/wrong-password': 'Senha incorreta, tente novamente' }[err.code] || 'Erro ao entrar, tente novamente'))
      this.loading = false
    }
  }
}
</script>