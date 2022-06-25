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
    <div class="mt-1 flex grid-cols-1 gap-1"><br>
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
    <div class="sm:col-span-2">
      <label for="message" class="block text-sm font-medium text-gray-700">Observações</label>
        <div class="mt-1">
          <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" />
        </div>
    </div>
    <div class="sm:col-span-2">
      <div class="flex items-start">
        <div class="flex-shrink-0">
        </div>
        <div class="ml-3">
        </div>
      </div>
    </div>
    <div class="sm:col-span-2">
      <button @click="$stor.dispatch('modals/close', 'transport')" type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Agendar</button>
    </div>
  </modal>
</template>
