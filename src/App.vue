<template>
  <main id="app" class="flex flex-col overflow-hidden" style="background-color: rgb(240, 240, 240)" :style="`height: ${$store.state.window.height}px`">
    <!-- Navbar -->
    <nav v-if="$route.name !== 'Auth'" class="p-2 flex justify-between items-center bg-white border-b-2" style="z-index: 2">
      <router-link to="/" class="flex-shrink-0" />
      <div v-if="!$store.state.mobile && $route.name !== 'Início'" class="flex space-x-4 text-sm font-medium text-gray-900">
        <router-link v-for="(item, index) in menu" :key="`menu-${index}`" :to="item.to" class="py-2 px-3 rounded-md hover:bg-gray-100" :class="{ 'bg-gray-100': $route.name === item.name }">{{ item.label }}</router-link>
      </div>
      <router-link v-if="logged" to='/profile'><Avatar id="CURRENTUSER" size="9" /></router-link>
      <router-link v-else to="/auth" class="bt-rounded inline-flex items-center"><svg class="h-4 w-4" preserveAspectRatio="xMidYMid meet" viewBox="0 0 717 672"><path d="M391 672h195c37 0 68-13 92-38c24-24 39-56 39-92V151c0-36-15-68-39-92s-56-38-92-38H391v82h195c28 0 49 21 49 48v391c0 27-21 49-49 49H391v81zM0 269v156c0 18 15 33 33 33h182v123c0 11 5 20 15 25c4 1 9 1 11 1c7 0 13-2 18-7l235-235c9-9 8-27 0-37L259 94c-8-8-18-9-29-6c-10 5-15 13-15 24v124H33c-18 0-33 15-33 33z" fill="currentColor"/></svg><span class="ml-2 text-xs font-medium">Entrar</span></router-link>
    </nav>
    <!-- Conteúdo -->
    <section class="flex-grow overflow-y-scroll overflow-x-hidden relative">
      <div ref="main" class="" :class="{ 'container': !extended, 'p-3': !['Início', 'Auth'].includes($route.name) }">
        <router-view />
      </div>
    </section>
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
      <router-link to="/solutions" :class="{ 'text-gray-700': $route.path.includes('solutions') }">
        <div class="flex flex-col items-center">
          <svg v-if="$route.path.includes('solutions')" class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M11 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3Zm4.657 2.757a1 1 0 0 0-1.414-1.414l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707ZM18 10a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5.05 6.464A1 1 0 1 0 6.464 5.05l-.707-.707a1 1 0 0 0-1.414 1.414l.707.707ZM5 10a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm3 6v-1h4v1a2 2 0 1 1-4 0Zm4-2c.015-.34.208-.646.477-.859a4 4 0 1 0-4.954 0c.27.213.462.519.476.859h4.002Z"/></svg>
          <svg v-else class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z"/></svg>
          <span class="text-xs">Soluções</span>
        </div>
      </router-link>
      <router-link to="/city" :class="{ 'text-gray-700': $route.name === 'Município' }">
        <div class="flex flex-col items-center">
          <svg v-if="$route.name === 'Município'" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="text-xs">Município</span>
        </div>
      </router-link>
    </div>
  </main>
</template>

<script>
import { auth } from './firebase'

export default {
  components: { Avatar: () => import('@/components/User/Avatar') },

  data() { return {
    menu: [
      { name: 'Início', label: 'Início', to: '/' },
      { name: 'Guia', label: 'Guia', to: '/guide' },
      { name: 'Soluções', label: 'Soluções Inteligentes', to: '/solutions' },
      { name: 'Município', label: 'Município', to: '/city' },
    ]
  } },

  computed: { 
    logged: function () { return auth.currentUser?.uid },
    extended: function() { return this.$route?.meta?.extended || false },
  },

  mounted() { window.onresize = () => { this.$store.commit('setWindow', { width: window.innerWidth, height: window.innerHeight }) } },
}
</script>