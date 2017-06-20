import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
  //admin components
import Index from '@/views/Index'
import Login from '@/views/Login'

import _500 from '@/views/common/500'
import _404 from '@/views/common/404'
export default new Router({
  routes: [{
      path: '/login',
      name: '海渡学院管理后台',
      component: Login,
      hidden: true
    },
    //common component
    {
      path: '/500',
      name: '500',
      component: _500,
      hidden: true
    }, {
      path: '*',
      name: '404',
      component: _404,
      hidden: true
    }
  ]
})
