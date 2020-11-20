import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui' // 引入element 框架
import 'element-ui/lib/theme-chalk/index.css' // 引入element 框架css

import Router from 'vue-router'
import { constantRouterMap } from './router'
import "./public-path";

Vue.use(Element)
Vue.use(Router)

let instance = null
let router = null

function render (props = {}) {
  const { container } = props
  router = new Router({
    base: window.__POWERED_BY_QIANKUN__ ? `/subApp1` : '/',
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })
  instance = new Vue({
    // el: '#app',
    router,
    render: h => h(App),
    data(){
      return {
        parentParams: props.params,
      }
    },
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  // eslint-disable-next-line no-console
  console.log('vue sub app bootstraped')
}

export async function mount (props) {
  // eslint-disable-next-line no-console
  console.log('props from main framework', props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance = null
  router = null
}
