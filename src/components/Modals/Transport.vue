<template>
  <modal id="transport" width="25%">
    <!-- Email -->
    <label for="email" class="block text-sm font-medium text-gray-700">Emapatooil</label>
    <!-- <Input v-model="form.email" type="email" required :loading="loading" /> -->
    <!-- Senha -->
    <label for="password" class="mt-4 block text-sm font-medium text-gray-700">Senha</label>
    <!-- <Input v-model="form.password" type="password" required :loading="loading" /> -->
    <!-- Esqueci minha senha -->
    <button type="button" class="mt-2 w-full text-right font-medium text-sm text-indigo-600 hover:text-indigo-500">Esqueceu sua senha?</button>
    <!-- Entrar -->
    <!-- <Button @click="login" text="Entrar" type="submit" :loading="loading" /> -->
    <!-- Registrar -->
    <div class="mt-2 w-full text-center space-x-1">
      <span class="font-medium text-gray-600">Não possui conta?</span>
      <button @click="$store.dispatch('modals/close', 'transport')" type="button" class="font-medium text-indigo-600">Registre-se</button>
    </div>
  </modal>
</template>