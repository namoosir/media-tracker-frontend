<script setup lang="ts">
import LoadingComponent from '@/components/youtube/LoadingComponent.vue';
import SummaryComponent from '@/components/youtube/SummaryComponent.vue'
import { useYoutubeStore } from '@/stores/youtube/youtube';

const youtubeStore = useYoutubeStore();

const isLoading = () => {
    return !youtubeStore.finishedSync;
}

</script>

<template>
    <main v-if="isLoading()" class="flex flex-col justify-center items-center p-5">
        <LoadingComponent/>
    </main>
    <main v-else class="flex flex-col justify-start items-center p-5 pt-16">
        <SummaryComponent />
    </main>
</template>