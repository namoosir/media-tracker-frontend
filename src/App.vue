<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth/auth'
import HeaderComponent from './components/HeaderComponent.vue';
import Toaster from '@/components/ui/toast/Toaster.vue'
import { ref, watch } from 'vue';
import { onMounted } from 'vue';

const authStore = useAuthStore()
const isIdentified = ref(false)

onMounted(async () => {
  // Assuming isIdentified is a promise, wait for it to resolve
  watch(async () => await authStore.isIdentified, async (newValue) => {
    isIdentified.value = await newValue
  }, { immediate: true })
  isIdentified.value = await authStore.isIdentified
})
</script>

<template>
  <HeaderComponent v-if="isIdentified"/>
  <RouterView />
  <Toaster />
</template>
