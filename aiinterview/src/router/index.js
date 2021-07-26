import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/about2',
    name: 'AboutSecond',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutSecond.vue')
  },
  {
    path: '/check',
    name: 'WebcamAndMicCheck',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WebcamAndMicCheck.vue')
  },
  {
    path: '/test',
    name : 'MicroPhoneTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/MicroPhoneTest.vue')

  },
  {
    path: '/visual',
    name : 'Visualizer',
    component: () => import(/* webpackChunkName: "about" */ '../views/VoiceVisualizer.vue')

  },
  {
    path: '/test2',
    name : 'test2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')

  },
  {
    path: '/capture',
    name : 'capture',
    component: () => import(/* webpackChunkName: "about" */ '../views/Capture.vue')

  },
  {
    path: '/stepper',
    name : 'stepper',
    component: () => import(/* webpackChunkName: "about" */ '../views/Stepper.vue')
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
