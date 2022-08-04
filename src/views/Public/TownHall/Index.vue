<template>
  <main class="mt-2 mx-20">
    <div class="bg-white overflow-hidden">
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">São Simão</h3>
            <h1 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">O município</h1>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img class="rounded-lg shadow-lg object-cover object-center" src="https://static.wixstatic.com/media/cf9a27_1e03f8e62db04ed4b3f94bdf1d39dd26~mv2.jpg/v1/fill/w_838,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Morro%20do%20Cruzeiro.jpg" alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376">
                </div>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="text-justify max-w-prose mx-auto lg:max-w-none">
              <p class="text-lg text-gray-500">O vale da Saúde. Possui uma identidade única no cenário regional, estadual e nacional e esta imagem é comprovada por fatos e documentos históricos como o “Berço da Proclamação da República” e “Terra de Marcelo Grassmann”.</p>
            </div>
            <div class="mt-5 prose prose-indigo text-justify text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">  
              <div class="lg:mt-5">
                <p class="text-lg text-gray-500">Com uma área de 617.252 Km² e uma população de 15.446 habitantes (estimativa do IBGE 2021), São Simão esta localizada à nordeste do Estado de São Paulo. Há 282 Km de distância da capital, encravada entre morros possui vastas e belas paisagens naturais assim como uma longa e bela história que se confunde com a do estado e a da própria nação.</p>
              </div>
              <div class="lg:mt-5">
                <p class="text-lg text-gray-500">Se destaca pela qualidade de vida, pela cultura e paisagens naturais, na indústria a produção de agua, argila branca, areia, jeans, poliestireno e moveis de escritório. Na agricultura a cana de açúcar e o reflorestamento para celulose e agricultura de subsistência.</p>
              </div>
            </div>
            <div class="mt-8 inline-flex rounded-md shadow">
              <a href="https://www.saosimao.sp.gov.br/inicial" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Acessar </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative py-16 bg-white overflow-hidden">
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Turismo</span>
            <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">O Vale da Saúde</span>
          </h1>
          <p class="mt-8 text-xl text-center text-gray-500 leading-8">Clima privilegiado em virtude das serras que a cercam. Água potável e cristalina é encontrada em abundância, o que a faz ter potencial para estância hidromineral, climática e/ou turística.</p>
        </div>
      </div>
    </div>
    <button @click="menu = true" type="button" class="p-2 fixed right-7 w-min rounded-full shadow-sm bg-purple-600 text-white focus:outline-none" :class="$store.state.mobile ? 'bottom-20' : 'bottom-4'">
    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" /></svg>
    </button>
    <SliderOver v-model="menu" :size="$store.state.mobile ? 'sm' : 'xs'" title="Categoria" subtitle="Filtre os resultados da sua busca.">
      <ul class="grid grid-cols-2 gap-3">
        <router-link v-for="(item, index) in options" :key="index" :to="item.path" class="p-3 h-18 flex flex-col items-center justify-center hover:bg-gray-50 rounded-lg" :class="item.label === selected ? 'border-2 bg-purple-50 border-purple-600 text-purple-600' : 'border border-gray-200 text-gray-500'">
          <svg class="h-6 w-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" v-html="item.icon"></svg>
          <span class="mt-1 w-full text-center text-xs">{{ item.label }}</span>
        </router-link>
      </ul>
    </SliderOver>
  </main>
</template>

<script>
export default {
  
  components: {

    SliderOver: () => import('@/components/SlideOver/Default'),
},
  data() { return {

    itens: [],
    selected: '',
    menu: false,
    options: [
      { label: 'Página Inicial', path: 'https://www.saosimao.sp.gov.br/', icon: `<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="currentColor" />` },
      { label: 'Turismo e Lazer', path: 'https://www.saosimao.sp.gov.br/turismosaosimao', icon: `<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" fill="currentColor" />` },
      { label: 'ODS',  path: 'https://odsbrasil.gov.br/', icon: `<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" fill="currentColor" />` },
      { label: 'eOuve', path: 'https://eouve.com.br/#/', icon: `<path d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"  fill="currentColor" />` },  
    ]
  } }
}
</script>

