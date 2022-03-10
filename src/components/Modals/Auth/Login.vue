<template>
  <modal id="login" width="25%">
    <!-- Email -->
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <input id="email" name="email" type="email" autocomplete="off" required class="mt-1 py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <!-- Senha -->
    <label for="password" class="mt-4 block text-sm font-medium text-gray-700">Senha</label>
    <input id="password" name="password" type="password" required class="mt-1 py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <!-- Esqueci minha senha -->
    <button type="button" class="mt-2 w-full text-right font-medium text-sm text-indigo-600 hover:text-indigo-500">Esqueceu sua senha?</button>
    <!-- Entrar -->
    <button @click="login" type="submit" class="mt-3 py-2 px-4 w-full flex justify-center border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Entrar</button>
    <!-- Registrar -->
    <div class="mt-2 w-full text-center space-x-1">
      <span class="font-medium text-gray-600">Não possui conta?</span>
      <button @click="$store.dispatch('modals/close', 'login'), $store.dispatch('modals/open', 'register')" type="button" class="font-medium text-indigo-600">Registre-se</button>
    </div>
  </modal>
</template>

<script>
export default {
  methods: {
    async login() {
      // faz login
      console.log("realizando login")
    }
  }
}
</script>