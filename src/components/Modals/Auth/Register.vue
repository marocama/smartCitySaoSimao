<template>
  <modal id="register" width="25%">
    <!--Nome Completo-->
    <label for="name" class="block text-sm font-medium text-gray-700"> Nome Completo </label>
    <input v-model="form.name" id="name" name="name" type="name" autocomplete="off" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <!--Endereço de Email-->
    <label for="email" class="mt-4 block text-sm font-medium text-gray-700"> Endereço de Email </label>
    <input v-model="form.email" id="email" name="email" type="email" autocomplete="off" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <!--Senha-->
    <label for="password" class="mt-2 w-full block text-sm font-medium text-gray-700"> Senha </label>
    <input v-model="form.password" id="password" name="password" type="password" autocomplete="off" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <!--Lembrança da Senha-->
    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
    <label for="remember-me" class="block text-sm text-gray-900"> Lembre-me </label>
    <!--Esqueceu sua Senha?-->
    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Esqueceu sua Senha? </a>
    <button @click="register" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registre-se</button>
    <!--Ja possui Conta?-->      
    <p class="mt-2 w-full font-medium text-center text-gray-600 hover:text-indigo-500"> Já possui conta? <span @click="$store.dispatch('modals/close', 'register'), $store.dispatch('modals/open', 'login')" class="text-indigo-600">Entrar</span> </p>
  </modal>
</template>

<script>
import { auth } from '@/firebase'

export default {
  data() { return {
    form: {
      name: '',
      email: '',
      password: ''
    },
    loading: false,
  } },

  methods: {
    async register() {
      this.loading = true
      auth.createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then(result => { console.log(result) })
      .catch(err => { 
        this.$toast.error({ 
          'auth/invalid-email': 'E-mail inválido, tente novamente.', 
          'auth/email-already-in-use': 'E-mail já vinculado, tente novamente.', 
          'auth/weak-password': 'Senha fraca, tente novamente.' 
        }[err.code] || err.response?.data?.message || 'Ocorreu um erro, tente novamente.')
      })
      this.loading = false
    }
  }
}
</script>