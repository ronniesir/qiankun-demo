export const constantRouterMap = [{
  path: '/',
  name: 'layout',
  component: () => import('@/views/layout.vue'),
  redirect: '/form',
  children:[
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/form.vue'),
    }
  ]
}];