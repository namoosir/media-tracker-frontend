<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import YoutubeConnection from '@/components/YoutubeConnection.vue';
import SpotifyConnection from '@/components/SpotifyConnection.vue';

const router = useRouter();
const route = useRoute();
const typeParam = ref<string | undefined>(undefined)


onMounted(() => {
  watch(() => route.query.type, (newType) => {
    typeParam.value = newType?.toString()
  }, { immediate: true })

  if (!typeParam.value) {
    router.push('/home')
  }
});
</script>

<template>
    <main class="flex flex-col justify-center items-center p-5 gap-5">
        <YoutubeConnection v-if="typeParam === 'youtube'"  />
        <SpotifyConnection v-if="typeParam === 'spotify'" />
    </main>
</template>