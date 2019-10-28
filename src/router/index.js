import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/html2pdf',
    name: 'html2pdf',
    component: () => import( '../views/html2pdf.vue')
  },  
  {
    path: '/sidebarMenu',
    name: 'sidebarMenu',
    component: () => import( '../views/sidebarmenu.vue')
  }, 
  {
    path: '/radioCheckbox',
    name: 'radioCheckbox',
    component: () => import( '../views/radioCheckbox.vue')
  }, 
    {
    path: '/qrcode2',
    name: 'qrcode2',
    component: () => import( '../views/qrcode2.vue')
  }, 
  {
    path: '/xiangpijin',
    name: 'xiangpijin',
    component: () => import( '../views/IOS-xiangpijin.vue')
  },
]

const router = new VueRouter({
  routes,
   scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
