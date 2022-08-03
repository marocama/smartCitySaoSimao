<template>
  <div id="app" class="h-screen bg-gray-100">
    <Login />
    <Register />
    <!-- Aplicação -->
    <div class="wrapper">
      <!-- Navbar -->
      <nav class="py-5 px-10 flex justify-between items-center bg-transparent">
        <!-- Logo --> 
        <router-link to="/" class="flex-shrink-0">
          <img :src="require('@/assets/logo.svg')" class="py-0.5 w-auto h-10" alt="São Simão" />
        </router-link>
        <!-- Rotas -->
        <div v-if="!$store.state.mobile" class="flex space-x-4 text-sm font-medium text-gray-900">
          <router-link to="/" class="py-2 px-3 rounded-md hover:bg-gray-100" :class="{ 'bg-gray-100': $route.name === 'Início' }">Início</router-link>
          <router-link to="/guide" class="py-2 px-3 rounded-md hover:bg-gray-100" :class="{ 'bg-gray-100': $route.name === 'Guia' }">Guia</router-link>
          <router-link to="/smartSolutions" class="py-2 px-3 rounded-md hover:bg-gray-100" :class="{ 'bg-gray-100': $route.name === 'Soluções' }">Soluções Inteligentes</router-link>
          <router-link to="/townHall" class="py-2 px-3 rounded-md hover:bg-gray-100" :class="{ 'bg-gray-100': $route.name === 'Município' }">Município</router-link>
        </div>
        <!-- Minha Conta -->
        <button type="button" class="p-1.5 bg-gray-300 rounded-full text-white focus:outline-none">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
        </button>
      </nav>
      <!-- Conteúdo -->
      <main class="content">
        <div class="py-3 main scrollbar">
          <!-- <router-view class="h-full container" /> -->
          <router-view class="h-full" />
        </div>
      </main>
      <!-- Bottom Navigation -->
      <div v-if="$store.state.mobile" class="py-2.5 px-5 flex justify-between items-center bg-white text-gray-400 border-t-2 shadow-lg">
        <router-link to="/" :class="{ 'text-gray-700': $route.name === 'Início' }">
          <div class="flex flex-col items-center">
            <svg v-if="$route.name === 'Início'" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>	
            <span class="text-xs">Início</span>
          </div>
        </router-link>
        <router-link to="/guide" :class="{ 'text-gray-700': $route.name === 'Guia' }">
          <div class="flex flex-col items-center">
            <svg v-if="$route.name === 'Guia'" class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273c.112-.576.584-.717.988-.727H21V4a2 2 0 0 0-2-2zm0 9l-2-1l-2 1V4h4v7z"/></svg>
            <svg v-else class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 2.01H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.998 5 19.815 5 19.01c0-.101.009-.191.024-.273c.112-.575.583-.717.987-.727H20c.018 0 .031-.009.049-.01H21V4.01c0-1.103-.897-2-2-2zm0 14H5v-11c0-.806.55-.988 1-1h7v7l2-1l2 1v-7h2v12z"/></svg>
            <span class="text-xs">Guia</span>
          </div>
        </router-link>
        <router-link to="/smartSolutions" :class="{ 'text-gray-700': $route.name === 'Soluções' }">
          <div class="flex flex-col items-center">
            <svg v-if="$route.name === 'Soluções'" class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M11 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3Zm4.657 2.757a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707ZM18 10a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5.05 6.464A1 1 0 1 0 6.464 5.05l-.707-.707a1 1 0 0 0-1.414 1.414l.707.707ZM5 10a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm3 6v-1h4v1a2 2 0 1 1-4 0Zm4-2c.015-.34.208-.646.477-.859a4 4 0 1 0-4.954 0c.27.213.462.519.476.859h4.002Z"/></svg>
            <svg v-else class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z"/></svg>
            <span class="text-xs">Soluções</span>
          </div>
        </router-link>
        <router-link to="/townHall" :class="{ 'text-gray-700': $route.name === 'Município' }">
          <div class="flex flex-col items-center">
            <svg v-if="$route.name === 'Município'" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span class="text-xs">Município</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    Login: () => import('@/components/Modals/Auth/Login'),
    Register: () => import('@/components/Modals/Auth/Register'),
  },

  mounted() { window.onresize = () => { this.$store.commit('setWindow', { width: window.innerWidth, height: window.innerHeight }) } },
}
</script>