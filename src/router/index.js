import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Xiangqing from '../components/xiangqing'
import Fenlei from '../components/fenlei'
import Sousuo from '../components/sousuo'
import Sousuo2 from '../components/sousuo2'
import Denglu from '../components/denglu'
import Zhuce from '../components/zhuce'
import Car  from '../components/car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
     {
      path: '/xiangqing',
      name: 'xiangqing',
      component: Xiangqing  
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: Fenlei
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component:Sousuo
    },
    {
      path: '/sousuo2',
      name: 'sousuo2',
      component:Sousuo2
    },
    {
      path: '/denglu',
      name: 'denglu',
      component:Denglu
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component:Zhuce
    },
     {
      path: '/car',
      name: 'car',
      component:Car
    },
    {
      path: '*',
      redirect:"/home",
    }
  ]
})
