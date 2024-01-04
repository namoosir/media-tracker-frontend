<script setup lang="ts">
import router from '@/router';
import LandingComponent from '../components/LandingComponent.vue'
import { useAuthStore } from '@/stores/auth/auth'

const authStore = useAuthStore()

if (authStore.isIdentified) router.push('/home')

</script>

<template>
  <main class="min-h-screen flex flex-col justify-center items-center p-5">
    <LandingComponent />
  </main>
</template>
