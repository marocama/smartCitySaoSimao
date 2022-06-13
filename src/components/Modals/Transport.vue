<template>
  <modal id="transport" width="25%">
    <!-- Nome Completo -->
    <label for="name" class="block text-sm font-medium text-gray-700">Nome Completo</label>
    <div class="mt-1">
      <input id="name" name="name" type="name" autocomplete="name" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <!-- Telefone -->
    <label for="phone" class="block text-sm font-medium text-gray-700">Telefone</label>
     <div class="mt-1">
      <input id="phone" name="phone" type="phone" autocomplete="phone" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <!-- Endereço Residencial -->
    <label for="homeAddress" class="block text-sm font-medium text-gray-700">Endereço Residencial</label>
     <div class="mt-1">
      <input id="homeAddress" name="homeAddress" type="homeAddress" autocomplete="homeAddress" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <!-- Endereço Destino -->
    <label for="destinationAddress" class="block text-sm font-medium text-gray-700">Endereço de Destino</label>
     <div class="mt-1">
      <input id="destinationAddress" name="destinationAddress" type="destinationAddress" autocomplete="destinationAddress" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <!--Data-->
    <label for="date" class="block text-sm font-medium text-gray-700">Data</label>
     <div class="mt-1">
      <input id="date" name="date" type="date" autocomplete="date" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <!--Horário-->
    <label for="time" class="block text-sm font-medium text-gray-700">Horário</label>
     <div class="mt-1">
      <input id="time" name="time" type="time" autocomplete="time" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>



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

