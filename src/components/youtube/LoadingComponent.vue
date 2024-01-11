<script setup lang="ts">
// import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'
// import GatorLogoIcon from '@/components/icons/GatorLogoIcon.vue'
import { Loader2 } from 'lucide-vue-next'


</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5 flex-shrink-0">
    <Loader2 class="-z-[1] w-12 h-12 animate-spin stroke-muted-foreground"/>
    <!-- <div class="flex flex-row justify-center items-center gap-5 ">
        <GatorLogoIcon class="w-12"/>
        <YoutubeIcon class="w-12 h-10"/>
    </div> -->
    <p class="self-stretch text-center text-muted-foreground text-base font-medium">Loading your YouTube data. This might take a while.</p>
  </div>
</template>