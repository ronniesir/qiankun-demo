import './public-path';
import Vue from "vue";
import App from "./App.vue";

import Router from "vue-router";
import { constantRouterMap } from "./router";
import "./public-path";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.use(Router);

let instance = null;
let router = null;

function render (props = {}) {
  const { container } = props;
  router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap,
    // base: process.env.BASE_URL
  });
  router.onError((error) => {
    console.log('sub2:', error)
  })

  router.beforeEach((to, from, next) => {
    console.log("sub2：", to.fullPath)
    next();
  })
  instance = new Vue({
    // el: '#app',
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap () {
  // eslint-disable-next-line no-console
  console.log("vue sub app bootstraped");
}

export async function mount (props) {
  // eslint-disable-next-line no-console
  console.log("props from main framework", props);
  render(props);
}

export async function unmount () {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
