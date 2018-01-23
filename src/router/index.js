import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import All from '@/components/all/All'
import Cart from '@/components/cart/Cart'
import Mine from '@/components/mine/Mine'
import Help from '@/components/help/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/schedule',
      name: 'All',
      component: All
    },
    {
      path: '/resources',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/resources',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/helps',
      name: 'Help',
      component: Help
    }
  ]
})
