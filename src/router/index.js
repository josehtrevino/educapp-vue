import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SingleTeacher from '../views/SingleTeacher.vue'
import Messages from '../views/Messages.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/teachers/:id', component: SingleTeacher,
      props: true,
      children: [
        { path: 'contact', component: Contact, props: true }
      ]},
  { path: '/messages', component: Messages },
  { path: '/:notFound(.*)', component: null },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
