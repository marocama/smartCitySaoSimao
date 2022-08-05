import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Início',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Public/Home')
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
    path: '/guide',
    name: 'Guia',
    component: () => import(/* webpackChunkName: "guide" */ '@/views/Public/Guide/Index'),
    children: [
      {
        path: 'announce',
        name: 'Anunciar',
        component: () => import(/* webpackChunkName: "announce" */ '@/views/Public/Guide/Announce'),
      },
      {
        path: '/eat',
        name: 'Bebidas e Alimentos',
        component: () => import(/* webpackChunkName: "eat" */ '@/views/Public/Guide/Eat/Index'),
      },
      {
        path: '/sport',
        name: 'Esportes',
        component: () => import(/* webpackChunkName: "sport" */ '@/views/Public/Guide/Sport/Index'),
      },
      {
        path: '/accessories',
        name: 'Roupas e Acessórios',
        component: () => import(/* webpackChunkName: "accessories" */ '@/views/Public/Guide/Accessories/Index'),
      },
      {
        path: '/cheers',
        name: 'Saúde, Estética e Beleza',
        component: () => import(/* webpackChunkName: "cheers" */ '@/views/Public/Guide/Cheers/Index'),
      },
      {
        path: '/education',
        name: 'Educação e Cultura',
        component: () => import(/* webpackChunkName: "education" */ '@/views/Public/Guide/Education/Index'),
      },
      {
        path: '/events',
        name: 'Eventos e Serviços',
        component: () => import(/* webpackChunkName: "events" */ '@/views/Public/Guide/Events/Index'),
      },
      {
        path: '/others',
        name: 'Outros',
        component: () => import(/* webpackChunkName: "others" */ '@/views/Public/Guide/Others/Index'),
      },
      {
        path: 'company/:id',
        name: 'Comércio',
        component: () => import(/* webpackChunkName: "company" */ '@/views/Public/Guide/Company/Index'),
      }
    ] 
  },
  {
    path: '/profile',
    name: 'Profile',
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

export default router
