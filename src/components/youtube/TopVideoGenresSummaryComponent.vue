<script setup lang="ts">
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'vue-chartjs';
import TopGenresSummaryComponent from './TopGenresSummaryComponent.vue';

ChartJS.register(ArcElement)

const goToTopCategory = () => {

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
  <TopGenresSummaryComponent title="Top Video Genres" category="Gaming" :on-button-click="goToTopCategory" :graph-component="Doughnut" :graph-data="data" :graph-options="options" />
</template>

