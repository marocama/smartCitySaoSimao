<template>
  <main class="mt-2 mx-20 h-full flex flex-col">
    <ul class="mb-5 grid grid-cols-4 gap-5">
      <router-link to="/solutions/transport" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md transform duration-150 cursor-pointer hover:scale-105 hover:shadow-xl select-none" active-class="scale-105">
        <div class="-mt-7 mb-2 flex justify-between items-end">
          <span class="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
          </span>
          <svg class="pb-0.5 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
        </div>
        <span class="block font-semibold antialiased">Transporte acessível</span>
        <span class="block text-xs text-gray-500">Agende horários online.</span>
      </router-link>
      <router-link to="/solutions/ride" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md transform duration-150 cursor-pointer hover:scale-105 hover:shadow-xl select-none" active-class="scale-105">
        <div class="-mt-7 mb-2 flex justify-between items-end">
          <span class="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>
          </span>
          <svg class="pb-0.5 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
        </div>
        <span class="block font-semibold antialiased">Carona solidária</span>
        <span class="block text-xs text-gray-500">Compartilhe suas viagens.</span>
      </router-link>
      <router-link to="/solutions/rural" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md transform duration-150 cursor-pointer hover:scale-105 hover:shadow-xl select-none" active-class="scale-105">
        <div class="-mt-7 mb-2 flex justify-between items-end">
          <span class="rounded-lg inline-flex p-3 bg-green-50 text-green-700 ring-4 ring-white">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>
          </span>
          <svg class="pb-0.5 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
        </div>
        <span class="block font-semibold antialiased">Produtos rurais</span>
        <span class="block text-xs text-gray-500">Feira orgânica local.</span>
      </router-link>
      <router-link to="/solutions/collect" class="p-4 bg-white border border-gray-200 rounded-lg shadow-md transform duration-150 cursor-pointer hover:scale-105 hover:shadow-xl select-none" active-class="scale-105">
        <div class="-mt-7 mb-2 flex justify-between items-end">
          <span class="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
          </span>
          <svg class="pb-0.5 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
        </div>
        <span class="block font-semibold antialiased">Coleta inteligente</span>
        <span class="block text-xs text-gray-500">Resíduos especiais.</span>
      </router-link>
    </ul>
    <section class="h-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div v-if="$route.name === 'Solucões Inteligentes'" class="p-4 h-full flex flex-col justify-center items-center">
        <img :src="require('@/assets/5278.svg')" class="h-72" />
        <p class="text-2xl font-bold antialiased">Soluções Inteligentes</p>
        <p class="mt-3 w-2/3 text-gray-500 text-center">Recursos para auxiliar o munícipe de São Simão e incentivar a sustentabilidade e o desenvolvimento local.</p>
      </div>
      <div v-else class="h-full flex flex-col overflow-hidden">
        <router-view />
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>