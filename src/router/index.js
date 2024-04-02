import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/search/:content',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/saved',
      name: 'saved',
      component: () => import('../views/SavedView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/article/:id/:title',
      name: 'article',
      component: HomeView
    },
    {
      path: '/discusion',
      name: 'discusion',
      component: () => import('../views/DiscusionView.vue')
    },
    {
      path: '/discusion/:id/:title',
      name: 'single',
      component: () => import('../views/SingleView.vue')
    },
    {
      path: '/notifications',
      name: 'notfications',
      component: () => import('../views/NotificationView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    }
  ]
})

export default router
