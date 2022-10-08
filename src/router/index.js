// import Vue from 'vue';
// import VueRouter from 'vue-router';
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
    components: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/Test',
    components: () => import('@/views/Test/index.vue'),
  },
];

export const router = createRouter({
  // 这里有个括号要加：
  history: createWebHashHistory(),
  routes,
});
