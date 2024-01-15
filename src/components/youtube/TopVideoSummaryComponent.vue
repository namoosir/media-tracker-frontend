<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'vue-chartjs';
import TitleArrowComponent from './TitleArrowComponent.vue';
import ChannelComponent from './ChannelComponent.vue';

ChartJS.register(ArcElement)

const goToTopVideos = () => {

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

const image = "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w";
const name = "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children"
</script>

<template>
  <Card @click="goToTopVideos" class="flex flex-col py-3 px-5 min-w-80 gap-3 cursor-pointer">
    <TitleArrowComponent text="Top Channels" />
    <div class="flex flex-row justify-between items-center self-stretch">
      <img :src="image" class="h-9" />
      <h2 class="text-3xl text-center font-semibold leading-10 overflow-hidden line-clamp-1">
        {{ name }}
      </h2>
      
    </div>
  </Card>


</template>

