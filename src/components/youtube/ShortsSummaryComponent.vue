<script setup lang="ts">
import { Card } from '@/components/ui/card'
import TitleArrowComponent from './TitleArrowComponent.vue';
import router from '@/router';


const goToShorts = () => {
  router.push('/youtube/shorts');
}

const percent = "10%"
const fraction = "50/500 Videos"
</script>

<template>
  <Card @click="goToShorts" class="flex flex-col py-3 px-5 min-w-80 gap-3 cursor-pointer">
    <TitleArrowComponent text="Shorts" />
    <div class="flex flex-row justify-between items-center self-stretch flex-start gap-2">
      <h2 class="text-3xl font-semibold leading-10">
        {{ percent }}
      </h2>
      <p class="text-muted-foreground text-sm font-medium">
        {{ fraction }}
      </p>
    </div>
  </Card>
</template>

