<script setup lang="ts">
import { ref } from "vue"
import { Card } from '@/components/ui/card'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'vue-chartjs';
import TitleArrowComponent from './TitleArrowComponent.vue';
import ChannelComponent from './ChannelComponent.vue';

ChartJS.register(ArcElement)

const goToTopChannels = () => {

}

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 0,
    },
  ], 
}

const options = {
  responsive: true,
  maintainAspectRatio: true,
  segmentShowStroke: false,
}

</script>

<template>
  <Card @click="goToTopChannels" class="flex flex-col py-3 px-5 min-w-80 gap-3 cursor-pointer">
    <TitleArrowComponent text="Top Channels" />
    <div class="flex flex-row justify-between items-center self-stretch">
      <ChannelComponent variant="summary" name="PewDiePie" image="https://yt3.googleusercontent.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj" :subscribed="false" />
      <div class="h-9 w-9">
        <Doughnut :data="data" :options="options" />
      </div> 
    </div>
  </Card>


</template>

