import VueRouter from 'vue-router';
// Vue.use(VueRouter);

// vue3的方式：
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/Test',
    component: () => import('@/views/Test'),
    children: {
      path: '/Test/:currSpan', // 动态匹配
      component: () => import('@/views/Test'),
    },
  },
];

const router = createRouter({
  // 这里有个括号要加：
  routes,
  history: createWebHashHistory(),
});

export default router;
