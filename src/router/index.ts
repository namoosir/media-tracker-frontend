import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import RedirectComponent from '@/views/RedirectOauthLoadingView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/oauthHandleRedirect',
      name: 'oauthHandleRedirect',
      component: RedirectComponent
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
