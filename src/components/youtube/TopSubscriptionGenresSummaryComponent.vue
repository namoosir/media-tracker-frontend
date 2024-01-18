<script setup lang="ts">
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, LogarithmicScale } from 'chart.js'
import { Bar } from 'vue-chartjs';
import TopGenresSummaryComponent from './TopGenresSummaryComponent.vue';

ChartJS.register(CategoryScale, LinearScale, BarElement, LogarithmicScale)

const goToTopCategory = () => {

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

</script>

<template>
  <TopGenresSummaryComponent title="Top Subscription Genres" category="Lifestyle" :on-button-click="goToTopCategory" :graph-component="Bar" :graph-data="data" :graph-options="options" />
</template>

