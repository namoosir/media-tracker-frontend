<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth/auth'
import HeaderComponent from './components/HeaderComponent.vue';
import Toaster from '@/components/ui/toast/Toaster.vue'

const authStore = useAuthStore()

</script>

<template>
  <Toaster />
  <HeaderComponent v-if="authStore.isIdentified"/>
  <RouterView />
</template>
