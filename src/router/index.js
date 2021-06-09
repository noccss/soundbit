import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/userPage/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/userPage/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
