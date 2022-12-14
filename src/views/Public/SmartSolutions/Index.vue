<template>
  <main class="mt-2 mx-20 h-full flex flex-col">
    <ul class="mb-5 grid grid-cols-4 gap-5">
      <li @click="visible = visible === 'transport' ? '' : 'transport'" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md transform duration-150 cursor-pointer hover:scale-105 hover:shadow-xl select-none" :class="{ 'scale-105': visible === 'transport' }">
        <div class="-mt-7 mb-2 flex justify-between items-end">
          <span class="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
          </span>
          <svg class="pb-0.5 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
        </div>
        <span class="block font-semibold antialiased">Transporte acessível</span>
        <span class="block text-xs text-gray-500">Agende horários online.</span>
      </li>
      <li @click="visible = visible === 'ride' ? '' : 'ride'" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md transform duration-150 cursor-pointer hover:scale-105 hover:shadow-xl select-none" :class="{ 'scale-105': visible === 'ride' }">
        <div class="-mt-7 mb-2 flex justify-between items-end">
          <span class="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>
          </span>
          <svg class="pb-0.5 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
        </div>
        <span class="block font-semibold antialiased">Carona solidária</span>
        <span class="block text-xs text-gray-500">Compartilhe suas viagens.</span>
      </li>
      <li @click="visible = visible === 'rural' ? '' : 'rural'" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md transform duration-150 cursor-pointer hover:scale-105 hover:shadow-xl select-none" :class="{ 'scale-105': visible === 'rural' }">
        <div class="-mt-7 mb-2 flex justify-between items-end">
          <span class="rounded-lg inline-flex p-3 bg-green-50 text-green-700 ring-4 ring-white">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>
          </span>
          <svg class="pb-0.5 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
        </div>
        <span class="block font-semibold antialiased">Produtos rurais</span>
        <span class="block text-xs text-gray-500">Feira orgânica local.</span>
      </li>
      <li @click="visible = visible === 'collect' ? '' : 'collect'" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md transform duration-150 cursor-pointer hover:scale-105 hover:shadow-xl select-none" :class="{ 'scale-105': visible === 'collect' }">
        <div class="-mt-7 mb-2 flex justify-between items-end">
          <span class="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
          </span>
          <svg class="pb-0.5 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
        </div>
        <span class="block font-semibold antialiased">Coleta inteligente</span>
        <span class="block text-xs text-gray-500">Resíduos especiais.</span>
      </li>
    </ul>
    <section class="p-4 h-full bg-white border border-gray-200 rounded-lg shadow-md">
      <div v-if="!visible" class="h-full flex flex-col justify-center items-center">
        <img :src="require('@/assets/5278.svg')" class="h-72" />
        <p class="text-2xl font-bold antialiased">Soluções Inteligentes</p>
        <p class="mt-3 w-2/3 text-gray-500 text-center">Recursos para auxiliar o munícipe de São Simão e incentivar a sustentabilidade e o desenvolvimento local.</p>
      </div>
      <div v-else-if="visible === 'transport'" class="h-full">
        <header class="-mx-4 -mt-4 mb-5 p-4 sm:px-6 flex justify-between items-center bg-purple-50 border-b border-purple-200 shadow-sm rounded-t-lg">
          <div>
            <h3 class="text-purple-700 text-lg font-medium">Transporte acessível</h3>
            <p class="text-sm text-purple-400">Exibindo 10 resultados</p>
          </div>
          <div class="inline-flex justify-start space-x-3">
            <router-link to="/guide/announce" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">Agendar</router-link>
            <button type="button" class="p-2 bg-white hover:bg-gray-50 text-purple-700 border border-purple-200 text-sm font-medium rounded-md"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" /></svg></button>
          </div>
        </header>
        meus agendamentos
      </div>
      <div v-else-if="visible === 'ride'" class="h-full">
        <header class="-mx-4 -mt-4 mb-5 p-4 sm:px-6 flex justify-between items-center bg-blue-50 border-b border-blue-200 shadow-sm rounded-t-lg">
          <div>
            <h3 class="text-blue-700 text-lg font-medium">Carona Solidária</h3>
            <p class="text-sm text-blue-400">Exibindo 10 resultados</p>
          </div>
          <div class="inline-flex justify-start space-x-3">
            <router-link to="/guide/announce" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">Anunciar</router-link>
            <button type="button" class="p-2 bg-white hover:bg-gray-50 text-blue-700 border border-blue-200 text-sm font-medium rounded-md"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" /></svg></button>
          </div>
        </header>
        <ul class="w-full space-y-4">
          <li class="border border-gray-200 rounded-lg shadow-sm">
            <a href="#" class="block hover:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex min-w-0 flex-1 items-center">
                  <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p class="truncate text-sm font-medium text-blue-700">Ricardo Cooper</p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" /></svg>
                        <span class="truncate">amanhã, às 12:00</span>
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <div class="text-gray-700">
                        <p class="text-sm flex items-center">
                          <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" /></svg>
                          Centro, São Simão
                        </p>
                        <p class="mt-2 flex items-center text-sm">
                          <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
                          Ribeirão Preto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-blue-50 p-2 rounded-lg text-blue-700 font-semibold antialiased">
                  <p>R$ 7,00</p>
                  <!-- Heroicon name: mini/chevron-right -->
                  <!-- <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg> -->
                </div>
              </div>
            </a>
          </li>
          <li class="border border-gray-200 rounded-lg shadow-sm">
            <a href="#" class="block hover:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex min-w-0 flex-1 items-center">
                  <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p class="truncate text-sm font-medium text-blue-700">Ricardo Cooper</p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" /></svg>
                        <span class="truncate">amanhã, às 12:00</span>
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <div class="text-gray-700">
                        <p class="text-sm flex items-center">
                          <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" /></svg>
                          Centro, São Simão
                        </p>
                        <p class="mt-2 flex items-center text-sm">
                          <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
                          Ribeirão Preto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-blue-50 p-2 rounded-lg text-blue-700 font-semibold antialiased">
                  <p>R$ 7,00</p>
                  <!-- Heroicon name: mini/chevron-right -->
                  <!-- <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg> -->
                </div>
              </div>
            </a>
          </li>
          <li class="border border-gray-200 rounded-lg shadow-sm">
            <a href="#" class="block hover:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex min-w-0 flex-1 items-center">
                  <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p class="truncate text-sm font-medium text-blue-700">Ricardo Cooper</p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" /></svg>
                        <span class="truncate">amanhã, às 12:00</span>
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <div class="text-gray-700">
                        <p class="text-sm flex items-center">
                          <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" /></svg>
                          Centro, São Simão
                        </p>
                        <p class="mt-2 flex items-center text-sm">
                          <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
                          Ribeirão Preto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-blue-50 p-2 rounded-lg text-blue-700 font-semibold antialiased">
                  <p>R$ 7,00</p>
                  <!-- Heroicon name: mini/chevron-right -->
                  <!-- <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg> -->
                </div>
              </div>
            </a>
          </li>
          <li class="border border-gray-200 rounded-lg shadow-sm">
            <a href="#" class="block hover:bg-gray-50">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex min-w-0 flex-1 items-center">
                  <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p class="truncate text-sm font-medium text-blue-700">Ricardo Cooper</p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" /></svg>
                        <span class="truncate">amanhã, às 12:00</span>
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <div class="text-gray-700">
                        <p class="text-sm flex items-center">
                          <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" /></svg>
                          Centro, São Simão
                        </p>
                        <p class="mt-2 flex items-center text-sm">
                          <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
                          Ribeirão Preto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-blue-50 p-2 rounded-lg text-blue-700 font-semibold antialiased">
                  <p>R$ 7,00</p>
                  <!-- Heroicon name: mini/chevron-right -->
                  <!-- <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg> -->
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div v-else-if="visible === 'rural'" class="h-full">
        <header class="-mx-4 -mt-4 mb-5 p-4 sm:px-6 flex justify-between items-center bg-green-50 border-b border-green-200 shadow-sm rounded-t-lg">
          <div>
            <h3 class="text-green-700 text-lg font-medium">Produtos rurais</h3>
            <p class="text-sm text-gray-400">Exibindo 10 resultados</p>
          </div>
          <div class="inline-flex justify-start space-x-3">
            <router-link to="/guide/announce" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Anunciar</router-link>
            <button type="button" class="p-2 bg-white hover:bg-gray-50 text-green-700 border border-green-200 text-sm font-medium rounded-md"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" /></svg></button>
          </div>
        </header>
        <section class="grid grid-cols-3 gap-6">
          <!-- <Card v-for="(item, index) in items" :key="index" :data="item" /> -->
        </section>
      </div>
      <div v-else-if="visible === 'collect'" class="h-full">
        <header class="-mx-4 -mt-4 mb-5 p-4 sm:px-6 flex justify-between items-center bg-yellow-50 border-b border-yellow-200 shadow-sm rounded-t-lg">
          <div>
            <h3 class="text-yellow-700 text-lg font-medium">Coleta inteligente</h3>
            <p class="text-sm text-gray-400">Exibindo 10 resultados</p>
          </div>
          <div class="inline-flex justify-start space-x-3">
            <router-link to="/guide/announce" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">Anunciar</router-link>
            <button type="button" class="p-2 bg-white hover:bg-gray-50 text-yellow-700 border border-yellow-200 text-sm font-medium rounded-md"><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" /></svg></button>
          </div>
        </header>
      </div>
    </section>
  </main>
</template>

<script>

import { GuideColl } from '@/firebase'

export default {
  
  components: {
    // Button: () => import('@/components/Buttons/Default'),
    // SliderOver: () => import('@/components/SlideOver/Default'),
  },
  data() { return {
    visible: '',
    
    items: [],
    selected: '',
    menu: false,
    options: [ 
    { label: 'Transporte Acessível', path:'transport', icon: `<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" fill="currentColor" />` },
    { label: 'Carona Solidária', path:'rides', icon: `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0zs" fill="currentColor" />` },
    { label: 'Produtos Rurais', path:'organic', icon: `<path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" fill="currentColor" />` }, 
    { label: 'Resíduos Sólidos', path:'trash', icon: `<path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" fill="currentColor" />` },    
    ]
  } },
  
  mounted() {
    this.get()
  },
  
  methods: {
    async get(item) {
      this.selected = (item === this.selected) ? '' : item
      
      const query = this.selected ? GuideColl.where('Category', '==', this.selected) : GuideColl.orderBy('CreatedAt', 'desc')
      
      await query.limit(8).get()
      .then(result => { console.log(result), this.items = result.docs.map(item => { return { id: item.id, ...item.data() } }) })
      .catch(err => console.log(err))
    }
  },
  
  
}
</script>