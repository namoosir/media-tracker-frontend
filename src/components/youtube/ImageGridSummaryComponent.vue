<script setup lang="ts">
import { Card } from '@/components/ui/card'
import TitleArrowComponent from './TitleArrowComponent.vue';

defineProps<{
    title: string;
    images: string[];
    onButtonClick: () => void;
}>();

</script>

<template>
  <Card @click="onButtonClick" class="flex flex-col py-3 px-5 w-80 gap-3 cursor-pointer">
    <TitleArrowComponent :text="title" />
    <div class="flex flex-row items-center self-stretch flex-start gap-2">
      <div v-for="(image, index) in images" :key="index">
        <img class="rounded-full w-10 h-10" :src="image"/>
      </div>
    </div>
  </Card>
</template>

