<script setup lang="ts">
import GatorLogoIcon from '@/components/icons/GatorLogoIcon.vue';
import Button from '@/components/ui/button/Button.vue';
import router from '@/router';

const goHome = () => {
    router.push('/home')
}

</script>

<template>
  <main class="flex flex-col justify-center items-center p-5 gap-6">
    <GatorLogoIcon/>
    <h1 class="text-9xl font-black">404</h1>
    <p class="self-stretch text-center text-muted-foreground text-base font-medium px-7">Oops! We couldn't find the page you are looking for.</p>
    <Button @click="goHome" variant="menu">Go Home</Button>
  </main>
</template>