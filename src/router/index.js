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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/html2pdf',
    name: 'html2pdf',
    component: () => import( '../views/html2pdf.vue')
  },  
]

const router = new VueRouter({
  routes
})

export default router
