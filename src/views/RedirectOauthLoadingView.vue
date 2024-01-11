<template>
  <main class="flex flex-col justify-center items-center p-5 gap-5">
    <p v-if="error">Error: {{ error }}</p>
    <p v-else-if="token">Redirecting...</p>
    <p v-else>Loading...</p>
  </main>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/auth';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
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
    toast({
      title : 'Logged In',
      variant : 'default', 
      description: 'You are now logged in.'
    })
  }
  else if (errorParam) {
    if (!authStore.isIdentified) {
      toast({
      title : 'Failed to log in',
      variant : 'destructive', 
      description: 'Please try again.'
      })
    }
  }

  router.push('/home');
});
</script>

