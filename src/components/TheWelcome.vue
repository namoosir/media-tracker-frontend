<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import axios from 'axios'

const postData = async () => {
  try {
    const response = await axios.get(
      'https://7d40-2607-fea8-a59f-1640-4d32-d71d-dfed-9b8b.ngrok-free.app/auth/platformconnection/request/youtube',
      {}
    )

    // Handle the response data here
    console.log(response.data)

    // You can also use this data to update your Vue component's state
    // this.someData = response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error:', error)
  }
}
</script>

<template>
  <div>
    <button class="youtube" @click="postData">Youtube bruh</button>
  </div>
</template>

<style scoped>
.youtube {
  padding: 2rem;
  font-size: 2rem;
}
</style>
