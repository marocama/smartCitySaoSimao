<template>
  <main>
    <!-- Fundo -->
    <video v-if="$store.state.mobile || $store.state.window.width / $store.state.window.height < 1.25" playsinline autoplay muted preload loop class="absolute inset-0 block object-cover object-center">
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Fportrait.mp4?alt=media&token=c08a3527-bbf3-4e7d-bf1f-349fcdef6483" type="video/mp4" />
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Fportrait.mov?alt=media&token=80540beb-c09e-4f07-99bc-577ea59a68dd" type="video/quicktime" />
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Fportrait.webm?alt=media&token=d4c4c82d-ad12-40c9-9096-6547370ec754" type="video/webm" />
    </video>
    <video v-else playsinline autoplay muted preload loop class="absolute inset-0 h-full w-full block object-cover object-center">
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Flandscape.mov?alt=media&token=2ac2fbba-1208-4987-8d46-eb59c57490cf" type="video/quicktime" />
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Flandscape.webm?alt=media&token=c6f7f67c-e2bd-443f-9751-1d500d37d5ac" type="video/webm" />
      <source src="https://firebasestorage.googleapis.com/v0/b/saosimao.appspot.com/o/config%2Flandscape.mp4?alt=media&token=44f10d8a-c021-4ee5-9d1a-fb33d4f1cbed" type="video/mp4" />
    </video>
    <!-- Máscara -->
    <div class="absolute inset-0 bg-black bg-opacity-60" />
    <!-- Legenda -->
    <section class="absolute inset-y-0 w-full flex flex-col justify-center items-center" style="z-index: 1">
      <p class="title text-center text-7xl text-white font-bold antialiased">Conheça o vale da saúde!</p>
      <p class="mt-4 mb-6 md:w-1/2 text-gray-200 text-center antialiased">Fomentar o desenvolvimento do turismo local de forma participativa, por meio de pesquisas, projetos, programas, eventos e gerenciamento.</p>
      <div class="grid grid-cols-2 gap-5">
        <router-link to="/guide" class="p-3 h-18 flex items-center justify-center space-x-3 bg-black bg-opacity-50 hover:bg-opacity-60 rounded-lg text-white">
          <p class="px-4 font-semibold text-sm antialiased">GUIA</p>
        </router-link>
        <router-link to="/smartSolutions" class="p-3 h-18 flex items-center justify-center space-x-3 bg-black bg-opacity-50 hover:bg-opacity-60 rounded-lg text-white">
          <p class="px-4 font-semibold text-sm antialiased">SOLUÇÕES INTELIGENTES</p>
        </router-link>
      </div>
    </section>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oleo+Script+Swash+Caps&display=swap');

.title { font-family: 'Dancing Script', cursive; }
</style>