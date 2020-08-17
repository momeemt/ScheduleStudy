import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AddTask from '../views/AddTask.vue'
import Report from '../views/Report.vue'
import Target from '../views/Target.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addTask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/Target',
    name: 'Target',
    component: Target
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
