import { createRouter, createWebHistory } from 'vue-router'
import TipPaymentsView from '../views/TipPaymentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TipPaymentsView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tip-payments',
      name: 'tip-payments',
      component: () => import('../views/TipPaymentsView.vue')
    }
  ]
})

export default router
