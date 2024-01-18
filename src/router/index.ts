import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import RedirectOauthLoadingView from '@/views/RedirectOauthLoadingView.vue'
import HomeView from '@/views/HomeView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import { useAuthStore } from '@/stores/auth/auth'
import PlatformView from '@/views/PlatformView.vue'
import YoutubeHomeViewVue from '@/views/Youtube/YoutubeHomeView.vue'

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
      path: '/platform',
      name: 'platform',
      component: PlatformView,
    },
    {
      path: '/youtube',
      name: 'youtubeHome',
      component: YoutubeHomeViewVue
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

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const authStore = useAuthStore()

  if (to.name !== 'landing' && to.name !== 'oauthHandleRedirect' && !(await authStore.isIdentified)) return { name: 'landing' }
  if ((to.name === 'landing' || to.name === 'oauthHandleRedirect') && await authStore.isIdentified) return { name: 'home' }
});

export default router
