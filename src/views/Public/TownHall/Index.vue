<template>
  <main class="mt-2 mx-20">
    <div class="mb-5">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="justify-around -mb-px flex space-x-8" aria-label="Tabs">
            <a v-for="(item, index) in menu" :key="index" :href="item.path" class="py-4 px-1 inline-flex items-center text-gray-500 hover:text-gray-700 font-medium text-sm border-b-2 border-transparent hover:border-gray-300 group">
              <svg class="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" v-html="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </nav>
        </div>
      </div>
    </div>

    <iframe src="https://www.saosimao.sp.gov.br/" height="520" width="100%" title="Prefeitura de São Simão" />

    <router-view />
    
  </main>
</template>

<script>
export default {
  data() { return {
    menu: [
      { label: 'Página Inicial', path: 'https://www.saosimao.sp.gov.br/', icon: `<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="currentColor" />` },
      { label: 'Turismo e Lazer', path: 'https://www.saosimao.sp.gov.br/turismosaosimao', icon: `<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" fill="currentColor" />` },
      { label: 'ODS',  path: 'https://odsbrasil.gov.br/', icon: `<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" fill="currentColor" />` },
      { label: 'eOuve', path: 'https://eouve.com.br/#/', icon: `<path d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"  fill="currentColor" />` },  
    ]
  } }
}
</script>

