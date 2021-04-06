import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Building from "../views/Building";
import Mining from "../views/Mining";
import Industrial from "../views/Industrial";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/building',
    name: 'Building',
    component: Building
  },
  {
    path: '/mining',
    name: 'Mining',
    component: Mining
  },
  {
    path: '/industrial',
    name: 'Industrial',
    component: Industrial
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
