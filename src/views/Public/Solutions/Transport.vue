<template>
  <div class="h-full flex flex-col overflow-hidden relative">
    <header class="p-4 sm:px-6 flex justify-between items-center bg-purple-50 border-b border-purple-200 shadow-sm rounded-t-lg">
      <div>
        <h3 class="text-purple-700 text-lg font-medium">Transporte acessível</h3>
        <p class="text-sm text-purple-400">Disponível agora</p>
      </div>
      <div class="inline-flex justify-start space-x-3">
        <a href="mailto:saude@saosimao.sp.gov.br?subject=Agendamento de transporte acessível" target="_blank" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">Email</a>
      </div>
    </header>
    <section class="flex-grow grid md:grid-cols-2 overflow-hidden">
      <div class="bg-white overflow-y-scroll scrollbar">
        <p class="p-4 md:p-10 text-justify text-gray-500 text-lg">O projeto Transporte Acessível tem como intuito ajudar pessoas deficientes a se locomoverem com mais facilidade no dia a dia, nossa tecnologia se compromete com o avanço das adaptações de transportes para as comunidades que não tem acesso aos locais específicos que abrangem seu cotidiano.</p>
        <a href="tel:+551639849081" class="py-2 px-4 md:px-10 flex items-center text-purple-500">
          <svg viewBox="0 0 24 24" fill="currentColor" class="mr-1 w-4 h-4"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" /></svg>
          Casa Rosa
        </a>
        <a href="tel:+551639849087" class="py-2 px-4 md:px-10 flex items-center text-purple-500">
          <svg viewBox="0 0 24 24" fill="currentColor" class="mr-1 w-4 h-4"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" /></svg>
          Bento Quirino
        </a>
        <a href="tel:+551639849132" class="py-2 px-4 md:px-10 flex items-center text-purple-500">
          <svg viewBox="0 0 24 24" fill="currentColor" class="mr-1 w-4 h-4"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" /></svg>
          Vila Monteiro
        </a>
      </div>
      <img class="hidden md:block object-cover" src="https://images.pexels.com/photos/8524619/pexels-photo-8524619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Transport" />
    </section>
    <footer class="pb-4 md:pb-10 px-4 sm:px-6 w-full flex justify-start md:justify-end items-end flex-wrap space-y-4 space-x-4 bg-gray-50 border-t border-gray-200 rounded-b-lg overflow-hidden">
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/3.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/8.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/10.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/11.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/16.svg')" />
      <img class="h-12 w-12 rounded-sm" :src="require('@/assets/ods/17.svg')" />
    </footer>
  </div>
</template>