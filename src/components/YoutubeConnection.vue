<script setup lang="ts">
import { Button } from '@/components/ui/button'
import YoutubeIcon from './icons/YoutubeIcon.vue'
import { onBeforeMount } from 'vue';
import { useAuthStore } from '@/stores/auth/auth';
import { useRouter } from 'vue-router';
import * as AuthAPI from '@/apis/auth';

const authStore = useAuthStore();
const router = useRouter();

const toYoutubeConnection = async () => {
    try {
      const response = await AuthAPI.getYoutubePlatformConnectionRedirect();
      window.location.href = response.data.data;
      
    } catch {
      console.error("Error redirecting to youtube")
    }
}

onBeforeMount(async () => {
  if (await authStore.hasPlatfromConnectionYoutube) router.push('/youtube');
});

</script>

<template>
  <div class="flex flex-col justify-center items-center gap-6 flex-shrink-0">
    <h2 class="self-stretch text-center text-3xl font-semibold leading-9 text-foreground">Connect Your YouTube Account</h2>
    <p class="self-stretch text-center text-muted-foreground text-base font-medium">Click below to connect your YouTube account.</p>
    <Button variant="secondary" @click="toYoutubeConnection">
        <YoutubeIcon class="mr-2 h-8 w-8"/>
        Continue with YouTube
    </Button>
  </div>
</template>