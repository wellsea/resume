import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import workerInfo from '@/components/workerInfo'

Vue.use(Router)

export default new Router({
  base: '/resume/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/info',
      name: 'info',
      component: workerInfo
    }
  ]
})
