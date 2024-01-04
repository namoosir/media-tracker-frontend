<template>
  <div>
    <p v-if="error">Error: {{ error }}</p>
    <p v-else-if="token">Redirecting...</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/auth';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();

const token = ref<string | null>(null);
const error = ref<string | null>(null);
const router = useRouter();

onMounted(() => {

  const params = new URLSearchParams(window.location.search);
  const tokenParam = params.get('token');
  const errorParam = params.get('error');


  if (tokenParam) {
    authStore.setToken(tokenParam);
    console.log('Set token');
    router.push('/home'); 
  } else if (errorParam) {

    error.value = errorParam;
    console.log('Error with Oauth Flow');
    router.push('/');
  }
});
</script>

