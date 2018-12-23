import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  console.log(isAuth)
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './components/Login.vue')
    },
    {
      path: '/b/:bid',
      name: 'board',
      component: () => import(/* webpackChunkName: "board" */ './components/Board.vue'),
      beforeEnter: requireAuth,
      children: [
        {
          path: 'c/:cid',
          name: 'cardview',
          beforeEnter: requireAuth,
          component: () => import(/* webpackChunkName: "cardview" */ './components/CardView.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
