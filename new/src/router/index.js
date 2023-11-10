import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
 import Login from '../views/Login.vue'
 import Register from '../views/Register.vue'
 import List from '../views/List.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: WebSite
    // },
 
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})

export default router
