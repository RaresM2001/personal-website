import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MessageSent from '../views/contact/MessageSent.vue' 
import Projects from '../views/projects/Projects.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/message_sent', name: 'message-sent', component: MessageSent },
  { path: '/projects', name: 'projects', component: Projects }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
