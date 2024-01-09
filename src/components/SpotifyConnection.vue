<script setup lang="ts">
import { Button } from '@/components/ui/button'
import GatorLogoIcon from './icons/GatorLogoIcon.vue';
import router from '@/router';

const goHome = () => {
    router.push('/home')
}

</script>

<template>
  <div class="flex flex-col justify-center items-center gap-6 flex-shrink-0">
    <GatorLogoIcon/>
    <h2 class="self-stretch text-center text-3xl font-semibold leading-9 text-foreground">Work In Progress</h2>
    <p class="self-stretch text-center text-muted-foreground text-base font-medium">Check back later.</p>
    <Button @click="goHome" variant="menu">Go Home</Button>
    
  </div>
</template>