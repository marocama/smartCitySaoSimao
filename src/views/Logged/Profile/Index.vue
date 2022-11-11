<template>
  <main class="bg-white divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x rounded-lg shadow">
    <aside class="py-5 lg:col-span-3 space-y-1 text-gray-500 text-sm font-medium">
      <router-link to="/profile" class="py-2 px-3 flex items-center border-l-4 border-transparent hover:opacity-80" active-class="border-purple-500 text-purple-500"><svg class="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Perfil</router-link>
      <router-link to="/profile/password" class="py-2 px-3 flex items-center border-l-4 border-transparent hover:opacity-80" active-class="border-purple-500 text-purple-500"><svg class="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>Senha</router-link>
      <button @click="$store.dispatch('logout')" type="button" class="py-2 px-3 flex items-center hover:opacity-80 font-medium"><svg class="ml-1 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>Sair</button>
    </aside>
    <section class="lg:col-span-9">
      <router-view />
    </section>
  </main>
</template>