// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

/**
 * 插件导入
 * @type {[type]}
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css';
//自定义
import Utils from '@/common/js/Util'
import cFilter from '@/common/js/filter'
import '@/common/styles/custom.css'
import '@/common/styles/common.css'


Vue.use(ElementUI);


/**
 * 路由拦截
 * @type {[type]}
 */
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path == '/login') {
    Utils.Access_token().remove();
  }

  let user = Utils.Access_token().getter();
  if (null == user && to.path != '/login') {
    next({
      path: '/login'
    });
  } else {
    next();
  }
  NProgress.done();
});

router.afterEach(transition => {
  if (transition.name) {
    document.title = transition.name;
  }
  NProgress.done()
});

/**
 * 拦截请求
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  return Promise.reject(error);
});


/**
 * 响应拦截
 * @type {[type]}
 */
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  console.log(error)
  if (error.response && error.response.status == 500) {
    router.push({
      path: '500'
    })
  } else {
    router.push('/login')
  }
  return Promise.reject(error);
});


/* eslint-disable no-new */
let $app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});

Vue.prototype.utils = Utils;
window.$app = $app;
