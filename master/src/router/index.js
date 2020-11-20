import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout.vue'),
      children: [
        {
          path: '/project/:projectId/report/projectcount',
          name: 'projectcount',
          component: () => import('@/views/report/index.vue'),
        },
        {
          path: '/subApp1/form',
          name: 'subApp1',
          component: () => import('@/views/app1/form.vue'),
        },
        {
          path: '/sub2',
          name: 'subApp2',
          component: () => import('@/views/app2/edit.vue'),
        }
      ]
    },
  ]
});

router.beforeEach((to, from, next) => {
  console.log("主路由",to.fullPath)
 next();
})

export default router;