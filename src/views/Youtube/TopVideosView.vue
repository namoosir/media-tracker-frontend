<script setup lang="ts">
import { useYoutubeStore } from '@/stores/youtube/youtube';
import VideoViewGraphComponent from '@/components/youtube/VideoViewGraphComponent.vue';

const youtubeStore = useYoutubeStore();

const videos = [
    {
        title: "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children",
        image: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w",
        channel: "Pinkfong Baby Shark - Kids' Songs & Stories",
        views: 13000000000,
        viewFraction: 1,
        onClick: () => {},
    },
    {
        title: "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children",
        image: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w",
        channel: "Pinkfong Baby Shark - Kids' Songs & Stories",
        views: 6000000000,
        viewFraction: 0.46,
        onClick: () => {},
    },
    {
        title: "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children",
        image: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w",
        channel: "Pinkfong Baby Shark - Kids' Songs & Stories",
        views: 1500000000,
        viewFraction: 0.12,
        onClick: () => {},
    },
    {
        title: "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children",
        image: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w",
        channel: "Pinkfong Baby Shark - Kids' Songs & Stories",
        views: 1000000,
        viewFraction: 0.00007692307,
        onClick: () => {},
    },
];

</script>

<template>
    <main class="flex flex-col justify-start items-center p-5 pt-16">
        <div class="flex flex-col justify-start items-start gap-5 w-full max-w-screen-lg">
            <h2 class="self-stretch text-3xl font-semibold leading-9 text-foreground">Top Videos</h2>
            <div class="-z-[1] flex flex-col justify-start items-start gap-2">
                <div v-for="(video, index) in videos" :key="index">
                    <VideoViewGraphComponent  :title="video.title" :image="video.image" :channel="video.channel" :views="video.views" :viewFraction="video.viewFraction" :on-click="video.onClick"/>
                </div>
            </div>
        </div>
    </main>
</template>