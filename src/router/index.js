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
    path: '/solutions',
    name: 'Solucões',
    component: () => import(/* webpackChunkName: "solutions" */ '@/views/Public/Solutions/Index'),
    children: [
      {
        path: 'transport',
        name: 'Transporte acessível',
        component: () => import(/* webpackChunkName: "transport" */ '@/views/Public/Solutions/Transport'),
      },
      {
        path: 'ride',
        name: 'Carona solidária',
        component: () => import(/* webpackChunkName: "ride" */ '@/views/Public/Solutions/Ride'),
      },
      {
        path: 'rural',
        name: 'Produtos rurais',
        component: () => import(/* webpackChunkName: "rural" */ '@/views/Public/Solutions/Rural'),
      },
      {
        path: 'collect',
        name: 'Coleta inteligente',
        component: () => import(/* webpackChunkName: "collect" */ '@/views/Public/Solutions/Collect'),
      },
    ]
  },
  {
    path: '/city',
    name: 'Município',
    component: () => import(/* webpackChunkName: "city" */ '@/views/Public/City'),
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: { extended: true },
    component: () => import(/* webpackChunkName: "auth" */ '../views/Public/Auth')
  },
  {
    path: '/profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Logged/Profile/Index'),
    children: [
      {
        path: '',
        name: 'Profile',
        component: () => import(/*webpackChunkName: "main" */'@/views/Logged/Profile/Profile'),
      },
      {
        path: 'password',
        name: 'Password',
        component: () => import(/*webpackChunkName: "password" */'@/views/Logged/Profile/Password'),
      },
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