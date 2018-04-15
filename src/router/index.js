import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// route-level code splitting
const Dashboard = () => import('../views/Dashboard.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: '/movie/1' },
      { path: '/movie/:id', component: Dashboard}
    ]
  })
}
