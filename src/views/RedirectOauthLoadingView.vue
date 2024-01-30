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

onMounted(async () => {
  const params = new URLSearchParams(window.location.search);
  const tokenParam = params.get('token');
  const platformConnectionParam = params.get('platformConnection')
  const errorParam = params.get('error');

  if (tokenParam) {
    authStore.setToken(tokenParam);
    toast({
      title : 'Logged In',
      variant : 'default', 
      description: 'You are now logged in.'
    })

    router.push('/home');
  }
  else if (platformConnectionParam == "youtube"){
    toast({
      title : 'Platform Connected - Youtube',
      variant : 'default', 
      description: 'Your youtube account has been successfully connected'
    })

    router.push("/youtube")
  }
  else if (errorParam) {
    if (!(await authStore.isIdentified)) {
      toast({
      title : 'Failed to log in',
      variant : 'destructive', 
      description: 'Please try again.'
      })
    }

    router.push('/home');
  }
});
</script>

