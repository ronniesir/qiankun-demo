export const constantRouterMap = [
  {
    path: "/",
    name: "home",
    redirect: "/editor",
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("@/views/editor.vue"),
    children:[{
      path: "other",
      name: "editor-other",
      component: () => import("@/views/other.vue")
    }]
  },
  {
    path: "/other",
    name: "other",
    component: () => import("@/views/other.vue")
  }
];
