<script setup lang="ts">
import { Card } from '@/components/ui/card'
import TitleArrowComponent from './TitleArrowComponent.vue';
import type { Component } from 'vue';

defineProps<{
    title: string;
    videos: string[];
    icon: Component;
    onButtonClick: () => void;
}>();

</script>

<template>
  <Card @click="onButtonClick" class="flex flex-col py-3 px-5 min-w-80 gap-3 cursor-pointer">
    <TitleArrowComponent :text="title" />
    <div class="flex flex-row justify-between">
        <div class="flex flex-row items-center self-stretch flex-start gap-2">
        <div v-for="(image, index) in videos" :key="index">
            <img class="h-9" :src="image"/>
        </div>
        </div>
        <component class="fill-muted-foreground h-8 w-8" :is="icon" />
    </div>
  </Card>
</template>

