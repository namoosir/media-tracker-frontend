<script setup lang="ts">
import LoadingComponent from '@/components/youtube/LoadingComponent.vue';
import SummaryComponent from '@/components/youtube/SummaryComponent.vue'
import { useYoutubeStore } from '@/stores/youtube/youtube';

const youtubeStore = useYoutubeStore();

</script>

<template>
    <main v-if="!youtubeStore.finishedSync" class="flex flex-col justify-center items-center p-5">
        <LoadingComponent/>
    </main>
    <main v-else class="flex flex-col justify-start items-start p-5 pt-16">
        <SummaryComponent />
    </main>
</template>