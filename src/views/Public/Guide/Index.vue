<template>
  <main class="mt-2 mx-20">
    
    <div class="mb-5">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          <option>My Account</option>

          <option>Company</option>

          <option selected>Team Members</option>

          <option>Billing</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="justify-center -mb-px flex space-x-8" aria-label="Tabs">
            <a v-for="(item, index) in menu" :key="index" :href="item.path" class="py-4 px-1 inline-flex items-center text-gray-500 hover:text-gray-700 font-medium text-sm border-b-2 border-transparent hover:border-gray-300 group">
              <svg class="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" v-html="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
    <router-view />

  </main>
</template>

<script>
export default {
  data() { return {
    menu: [
      { label: 'Bebidas e Alimentos', path: '/eat', icon: `<path d="M7 4.5c-.3 0-.5.3-.5.5v2.5h-1V5c0-.3-.2-.5-.5-.5s-.5.3-.5.5v2.5h-1V5c0-.3-.2-.5-.5-.5s-.5.3-.5.5v3.3c0 .9.7 1.6 1.5 1.7v7c0 .6.4 1 1 1s1-.4 1-1v-7c.8-.1 1.5-.8 1.5-1.7V5c0-.2-.2-.5-.5-.5zM9 5v6h1v6c0 .6.4 1 1 1s1-.4 1-1V2c-1.7 0-3 1.3-3 3zm7-1c-1.4 0-2.5 1.5-2.5 3.3c-.1 1.2.5 2.3 1.5 3V17c0 .6.4 1 1 1s1-.4 1-1v-6.7c1-.7 1.6-1.8 1.5-3C18.5 5.5 17.4 4 16 4z" fill="currentColor" />` },
      { label: 'Esportes', path: '/sport', icon: `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" fill="currentColor" />` },
      { label: 'Roupas e Acessórios', path: '/accessories', icon: `<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" />` },  
      { label: 'Saúde, Estética e Beleza', path: '/eat', icon: `<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill="currentColor" />` },    
      { label: 'Educação e Cultura', path: '/eat', icon: `<path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" fill="currentColor" />` },
      { label: 'Eventos e Serviços', path: '/eat', icon: `<path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd" fill="currentColor" />`},
      { label: 'Outros', path: '/eat', icon: `<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" fill="currentColor" />`},
    ]
  } }
}
</script>