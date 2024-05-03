import { createRouter, createWebHistory } from 'vue-router'
import Abc from './ABCD.vue'

const routes = [
  {
    path: '/abc',
    name: 'abc',
    component: Abc
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router