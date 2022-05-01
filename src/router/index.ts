import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  // 配置路由表
  routes: [
    { path: '/', component: () => import('../components/HelloWorld.vue') },
  ],
});

export default router;
