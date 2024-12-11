import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      meta: {
        title: '查询工具'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to?.meta?.title || '查询工具'
  next()
})

export default router
