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
    <div class="mt-1 flex grid-cols-1 gap-1">
        <label for="date" class="block text-sm font-medium text-gray-700">Data</label>
      <div class="mt-1">
        <input id="date" name="date" type="date" autocomplete="date" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <label for="time" class="block text-sm font-medium text-gray-700">Horário</label>
      <div class="mt-1">
        <input id="time" name="time" type="time" autocomplete="time" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
    </div>
    <!--Acompanhantes-->
    <div class="space-y-8 divide-y divide-gray-200">
      <fieldset class="mt-6">
        <legend class="contents text-base font-medium text-gray-700">Deseja levar Acompanhantes?</legend>
        <div class="mt-4 space-y-4">
            <div class="flex items-center">
              <input id="yes" name="yes" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
              <label for="yes" class="ml-3 block text-sm font-medium text-gray-700"> Sim </label>
            </div>
          <div class="flex items-center">
            <input id="no" name="no" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
            <label for="no" class="ml-3 block text-sm font-medium text-gray-700"> Não </label>
          </div>
        </div>
      </fieldset>
    </div>
    <!--Observações-->
    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
      <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Observações</label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <textarea id="about" name="about" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md" />
        </div>
    </div>
    <!-- <Button @click="login" text="Entrar" type="submit" :loading="loading" /> -->
    <!-- Registrar -->
    <div class="mt-2 w-full text-center space-x-1">
      <button @click="$stor.dispatch('modals/close', 'transport')" type="button" class="font-medium text-indigo-600">Agendar</button>
    </div>
  </modal>
</template>
