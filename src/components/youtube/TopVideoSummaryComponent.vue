<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, LogarithmicScale } from 'chart.js'
import { Bar } from 'vue-chartjs';
import TitleArrowComponent from './TitleArrowComponent.vue';

ChartJS.register(CategoryScale, LinearScale, BarElement, LogarithmicScale)

const goToTopVideos = () => {

}

const data = {
  labels: ['a', 'b', 'c'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ], 
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  scales: {
    x: {
        display: false,
        type: 'logarithmic',
    },
    y: {
        display: false,
    }
  },
}

const image = "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w";
const name = "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children"
</script>

<template>
  <Card @click="goToTopVideos" class="flex flex-col py-3 px-5 w-80 gap-3 cursor-pointer">
    <TitleArrowComponent text="Top Channels" />
    <div class="flex flex-row justify-between items-center self-stretch flex-start gap-2">
      <img :src="image" class="h-9" />
      <h2 class="text-3xl font-semibold leading-10 line-clamp-1">
        {{ name }}
      </h2>
      <div class="h-8 w-8">
        <Bar :data="data" :options="options"></Bar>
      </div>
    </div>
  </Card>
  <div class="h-9 w-9">
  </div>



</template>

