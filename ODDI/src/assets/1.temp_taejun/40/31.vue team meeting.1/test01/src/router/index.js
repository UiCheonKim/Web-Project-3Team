import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import oddiLoginPage from '../views/1.oddiLoginPage.vue'
import signUpPage from '../views/2.signUpPage.vue'
import kakaoLogin from '../views/3.kakaoLogin.vue'
import naverLogin from '../views/4.naverLogin.vue'
import Register_referencet from '@/views/5.Register_referencet.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/oddiLoginPage',
    name: 'oddiLoginPage',
    component: oddiLoginPage
  },
  {
    path: '/signUpPage',
    name: 'signUpPage',
    component: signUpPage
  },
  {
    path: '/kakaoLogin',
    name: 'kakaoLogin',
    component: kakaoLogin
  },
  {
    path: '/naverLogin',
    name: 'naverLogin',
    component: naverLogin
  },
  {
    path: '/Register_referencet',
    name: 'Register_referencet',
    component: Register_referencet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
