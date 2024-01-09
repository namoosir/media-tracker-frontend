<template>
  <main class="flex flex-col justify-center items-center p-5 gap-5">
    <p v-if="error">Error: {{ error }}</p>
    <p v-else-if="token">Redirecting...</p>
    <p v-else>Loading...</p>

    <Button
      variant="outline" @click="() => {
        console.log('hi')
        toast({
          title: 'Scheduled: Catch up',
          description: 'Friday, February 10, 2023 at 5:57 PM',
        });
      }"
    >
      Add to calander
    </Button>
  </main>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/auth';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast'
import Button from '@/components/ui/button/Button.vue';

const { toast } = useToast()
const authStore = useAuthStore();

const token = ref<string | null>(null);
const error = ref<string | null>(null);
const router = useRouter();

const sendToast = (status, title, description) => {
  toast({
    title: title,
    description: description,
    variant: status
  });
}

onMounted(() => {

  const params = new URLSearchParams(window.location.search);
  const tokenParam = params.get('token');
  const errorParam = params.get('error');


  if (tokenParam) {
    authStore.setToken(tokenParam);
    console.log('Set token');
    // router.push('/home');
    sendToast('default', 'Success', 'You are now logged in.')
  } else if (errorParam) {
    //TODO: need to handle a few things like deleted the old token and stuff
    error.value = errorParam;
    console.log('Error with Oauth Flow');
    router.push('/');
  }
});
</script>

