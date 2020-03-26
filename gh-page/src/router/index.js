import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/sub/:key',
    name: 'sub',
    component: () => import(/* webpackChunkName: "sub" */ '../views/sub/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
