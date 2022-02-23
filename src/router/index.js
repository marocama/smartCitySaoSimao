import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Public/Home')
  },
  {
    path: '/guide',
    name: 'Guia Comercial',
    component: () => import(/* webpackChunkName: "guide" */ '@/views/Public/Guide/Index'),
    children: [
      {
        path: 'eat',
        name: 'Onde Comer',
        component: () => import(/* webpackChunkName: "eat" */ '@/views/Public/Guide/Eat/Index'),
      }
    ] 
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/Public/404'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
