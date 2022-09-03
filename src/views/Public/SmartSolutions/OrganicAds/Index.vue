 <template>  
    <main>   
        <div class="bg-white overflow-hidden">
            <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
                <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                <div>
                    <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Produtos Orgânicos</h3>
                    <h1 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Seu mercado sem sair de casa</h1>
                </div>
                </div>
                <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="relative lg:row-start-1 lg:col-start-2">
                    <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                    <defs>
                        <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-300" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                    </svg>
                    <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
                    <figure>
                        <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                        <img class="rounded-lg shadow-lg object-cover object-center" src="https://images.pexels.com/photos/10539745/pexels-photo-10539745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="1184" height="1376">
                        </div>
                    </figure>
                    </div>
                    <popover>
                        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                                <!-- <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a> -->
                            </div>
                        </nav>
                        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                            <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="px-5 pt-4 flex items-center justify-between"></div>
                                <div class="px-2 pt-2 pb-3 space-y-1">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                                </div>
                            </div>
                            </PopoverPanel>
                        </transition> 
                    </popover>
                </div>
                <div class="mt-8 lg:mt-0">
                    <div class="text-justify max-w-prose mx-auto lg:max-w-none">
                    <p class="text-lg text-gray-500">Nosso objetivo é incentivar a agricultura orgânica, agroecológica e a produção artesanal brasileira, com respeito ao meio-ambiente e aos animais. Cortamos os intermediários entre o campo e a cidade, remunerando de maneira justa mais de 30 famílias produtoras.</p>
                    </div>
                    <div class="mt-5 prose prose-indigo text-justify text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">  
                    <div class="lg:mt-5">
                        <p class="text-lg text-gray-500">Além dos ingredientes para abastecer sua despensa, estamos sempre à procura de frutas, legumes e verduras da estação diferentes dos convencionais.</p>
                    </div>
                    <div class="lg:mt-5">
                        <p class="text-lg text-gray-500">Nossos produtos são especiais porque carregam a história de quem os produziu, o respeito pela Terra e, principalmente, o esmero na escolha e beneficiamento dos ingredientes.</p>
                    </div>
                    </div>
                    <div class="mt-8 inline-flex rounded-md shadow">
                    <button @click="$store.dispatch('modals/open', 'organic')" type="button"  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Publicar Anúncio</button>
                    <button @click="$store.dispatch('modals/open', 'organic')" type="button"  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Filtrar Resultados</button>
                    <button @click="$store.dispatch('modals/open', 'organic')" type="button"  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Ajuda</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </main> 
</template>     

<script>
    export default {
      components: {
        ModalOrganic: () => import('@/components/Modals/Organic'),
      }
    }
    </script>
    