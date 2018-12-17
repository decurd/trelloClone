import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },
    {
      path: '/b/:bid',
      name: 'board',
      component: () => import(/* webpackChunkName: "board" */ './components/Board.vue')
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
