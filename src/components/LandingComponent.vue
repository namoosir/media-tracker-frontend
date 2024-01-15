<script setup lang="ts">
import axios from 'axios'
import { Button } from '@/components/ui/button'
import GoogleIcon from './icons/GoogleIcon.vue'
import AggregatorLogoIcon from './icons/AggregatorLogoIcon.vue';
import * as AuthAPI from '@/apis/auth';

const toGoogle = async () => {
  try {
    const response = await AuthAPI.getSignInOauthRedirect()
    // const response2 = await AuthAPI.getWhoami()

    console.log("THIS IS DATA")
    console.log(response.data)



    

    // You can also use this data to update your Vue component's state
    // this.someData = response.data;
    window.location.href = response.data.data;
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