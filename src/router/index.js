import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from  '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Início',
    meta: { extended: true },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Public/Home')
  },
  {
    path: '/guide',
    name: 'Guia',
    component: () => import(/* webpackChunkName: "guide" */ '@/views/Public/Guide/Index'),
  },
  {
    path: '/guide/announce',
    name: 'Anunciar - Guia',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "announceguide" */ '@/views/Public/Guide/Announce'),
  },
  {
    path: '/transport',
    name: 'Transporte Acessível',
    component: () => import(/* webpackChunkName: "transport" */ '@/views/Public/SmartSolutions/Transport/Index')
  },
  {
    path: '/smartSolutions',
    name: 'Soluções',
    component: () => import(/* webpackChunkName: "smartSolutions" */ '@/views/Public/SmartSolutions/Index'),
  },
  {
    path: '/rides',
    name: 'Carona Solidária',
    component: () => import(/* webpackChunkName: "smartSolutions" */ '@/views/Public/SmartSolutions/Ride/Index'),
  },
  {
    path: '/organic',
    name: 'Produtos Orgânicos',
    component: () => import(/* webpackChunkName: "smartSolutions" */ '@/views/Public/SmartSolutions/OrganicAds/Index'),
  },
  {
    path: '/trash',
    name: 'Resíduos Sólidos',
    component: () => import(/* webpackChunkName: "smartSolutions" */ '@/views/Public/SmartSolutions/Trash/Index'),
  },
  {
    path: '/townHall',
    name: 'Município',
    component: () => import(/* webpackChunkName: "townHall" */ '@/views/Public/TownHall/Index'),
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: { extended: true },
    component: () => import(/* webpackChunkName: "auth" */ '../views/Public/Auth/Index')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Logged/Profile/Index'),
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

router.beforeEach(async (to, from, next) => {
  // Usuário não autenticado
  if (to.matched.some(x => x.meta.requiresAuth) && !auth.currentUser) {
    next('/auth')
  // Nenhum bloqueio, redireciona para o destino
  } else {
    next()
  }
})

export default router