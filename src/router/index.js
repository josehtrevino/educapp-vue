import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SingleTeacher from '../views/SingleTeacher.vue'
import Register from '../views/Register.vue'
import Messages from '../views/Messages.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/teachers/:id', component: SingleTeacher,
      props: true,
      children: [
        { path: '/contact', component: null }
      ]},
  { path: '/register', component: Register },
  { path: '/messages', component: Messages },
  { path: '/:notFound(.*)', component: null },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
