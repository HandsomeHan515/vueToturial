import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import All from '@/components/all/All'
import Cart from '@/components/cart/Cart'
import Mine from '@/components/mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
