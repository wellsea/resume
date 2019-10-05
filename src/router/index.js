import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import workerInfo from '@/components/workerInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'info',
      component: workerInfo
    }
  ]
})
