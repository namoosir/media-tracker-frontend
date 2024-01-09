<script setup lang="ts">
import axios from 'axios'
import { Button } from '@/components/ui/button'
import GoogleIcon from './icons/GoogleIcon.vue'
import AggregatorLogoIcon from './icons/AggregatorLogoIcon.vue';

const toGoogle = async () => {
  try {
    const response = await axios.get(
      // 'https://7d40-2607-fea8-a59f-1640-4d32-d71d-dfed-9b8b.ngrok-free.app/auth/platformconnection/request/youtube',
      'http://localhost:5238/auth/sign/google',
      {}
    )

    // Handle the response data here
    console.log(response.data)

    // You can also use this data to update your Vue component's state
    // this.someData = response.data;
    // window.location.href = response.data.data;
  } catch (error) {
    // Handle errors here
    console.error('Error:', error)
  }
}

</script>

<template>
  <div class="flex flex-col justify-center items-center gap-10 flex-shrink-0">
    <div class="flex flex-col justify-center items-center gap-7 self-stretch">
      <AggregatorLogoIcon/>
      <p class="self-stretch text-center text-muted-foreground text-base font-medium">Track your usage data from various platforms and combine them into meaningful metrics</p>
    </div>
    <Button variant="secondary" @click="toGoogle">
      <GoogleIcon className="mr-2 h-4 w-4" /> 
      Continue with Google
    </Button>
  </div>
</template>