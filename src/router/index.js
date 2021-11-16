import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // {
  //   path: '/scenicSpot',
  //   name: 'ScenicSpot',
  //   // route level code-splitting
  //   // this generates a separate chunk (scenicSpot.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "scenicSpot" */ '../views/ScenicSpot.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
