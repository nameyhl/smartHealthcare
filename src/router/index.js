import { createRouter, createWebHistory } from 'vue-router'

let routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: '/home',
        redirect: '/home/index',
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
      },
      {
        path: 'data',
        name: 'data',
        component: () => import('@/views/data/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: 'NOT_FOUND',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
