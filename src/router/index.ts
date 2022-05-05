import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';

const router = createRouter({
  history: createWebHashHistory(),
  // 配置路由表
  routes: [
    { path: '/', component: () => import('../components/HelloWorld.vue') },
  ],
});

// 配置路由守卫
router.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
