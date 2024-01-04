<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth/auth'
import HeaderComponent from './components/HeaderComponent.vue';

const authStore = useAuthStore()

</script>

<template>
  <HeaderComponent v-if="authStore.isIdentified"/>
  <RouterView />
</template>
