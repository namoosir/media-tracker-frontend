import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import RedirectOauthLoadingView from '@/views/RedirectOauthLoadingView.vue'
import HomeView from '@/views/HomeView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import { useAuthStore } from '@/stores/auth/auth'

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
      component: RedirectOauthLoadingView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/404',
      name: '404',
      component: PageNotFoundView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const authStore = useAuthStore()

  if (!authStore.isIdentified && to.name !== 'landing' && to.name !== 'oauthHandleRedirect') return { name: 'landing' }
  if (authStore.isIdentified && to.name === 'landing') return { name: 'home' }
});

export default router
