import Vue from 'vue'
import './assets/style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'
import 'tailwindcss/tailwind.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import Modal from '@/components/Modals/Base'

Vue.config.productionTip = false

Vue.component('modal', Modal)
Vue.use(Toast, {})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
