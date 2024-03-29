import { createRouter, createWebHashHistory } from 'vue-router'
import Recordings from '../views/Recordings.vue'
import Ride from '../views/Ride.vue'
import Home from '../views/Home.vue'
import Camera from '../views/Camera.vue'

const routes = [
  {
    path: '/ride',
    name: 'Ride',
    component: Ride,
    meta: { back: true }
  }, {
    path: '/recordings',
    name: 'Recordings',
    component: Recordings,
    meta: { back: true }
  }, {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: { back: true, footer: true }
  }, {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: { back: true, footer: true }
  }, {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/camera',
      name: 'Camera',
      component: Camera,
    }],
    meta: { footer: true }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
