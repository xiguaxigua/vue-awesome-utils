import App from './App'
import Vue from 'vue'
import Router from 'vue-router'
import Demo from './demo'

import Page from './page'

import '../src/scroll-fixed'
import '../src/scroll-lock'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'vue-tiny-dropdown',
      component: Demo
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
