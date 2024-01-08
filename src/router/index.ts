import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/alert'
    },
    {
      path: '/modal',
      name: 'modalView',
      component: () => import('@/views/ModalView.vue')
    },
    {
      path: '/alert',
      name: 'alertView',
      component: () => import('@/views/AlertView.vue')
    }
  ]
})

export default router
