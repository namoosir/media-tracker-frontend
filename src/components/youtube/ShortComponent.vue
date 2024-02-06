<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio';

defineProps<{
    title: string;
    image: string;
    onClick: () => void;
}>();
</script>

<template>
    <AspectRatio @click="onClick" :ratio="9/16" class="bg-muted relative rounded-xl cursor-pointer">
        <img class="w-full h-full object-contain rounded-xl" :src="image">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-xl"></div>
        <div class="drop-shadow-lg text-xxs sm:text-xs lg:text-sm font-semibold leading-3 absolute bottom-0 left-0 p-2 rounded-xl">{{ title }}</div>
    </AspectRatio>
</template>