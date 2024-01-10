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
    },
    {
      path: '/pagination',
      name: 'paginationView',
      component: () => import('@/views/PaginationView.vue')
    },
    {
      path: '/transition',
      name: 'transitionView',
      component: () => import('@/views/TransitionView.vue')
    }
  ]
})

export default router
