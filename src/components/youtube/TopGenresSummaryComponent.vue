<script setup lang="ts">
import { Card } from '@/components/ui/card'
import TitleArrowComponent from './TitleArrowComponent.vue';
import type { TypedChartComponent } from "node_modules/vue-chartjs/dist/types";

defineProps<{
    title: string;
    category: string;
    onButtonClick: () => void;
    graphComponent: Object;
    graphData: Object;
    graphOptions: Object;
}>();

</script>

<template>
  <Card @click="onButtonClick" class="flex flex-col py-3 px-5 w-80 gap-3 cursor-pointer">
    <TitleArrowComponent :text="title" />
    <div class="flex flex-row justify-between items-center self-stretch">
      <h2 class="text-3xl font-semibold leading-10">
        {{ category }}
      </h2>
      <div class="h-9 w-9">
        <component :is="graphComponent" :data="graphData" :options="graphOptions" />
      </div> 
    </div>
  </Card>


</template>

