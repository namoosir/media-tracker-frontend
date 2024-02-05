<script setup lang="ts">
import TitleInfoComponent from './TitleInfoComponent.vue';
import TopChannelSummaryComponent from './TopChannelSummaryComponent.vue';
import TopVideoSummaryComponent from './TopVideoSummaryComponent.vue';
import ShortsSummaryComponent from './ShortsSummaryComponent.vue';
import YourSubscriptionsSummaryComponent from './YourSubscriptionsSummaryComponent.vue';
import SubscriptionRecommendationsComponent from './SubscriptionRecommendationsComponent.vue';
import TopVideoGenresSummaryComponent from './TopVideoGenresSummaryComponent.vue';
import TopSubscriptionGenresSummaryComponent from './TopSubscriptionGenresSummaryComponent.vue';
import TopChannelGenresSummaryComponent from './TopChannelGenresSummaryComponent.vue';
import LikedVideosSummaryComponent from './LikedVideosSummaryComponent.vue';
import DislikedVideosSummaryComponent from './DislikedVideosSummaryComponent.vue';
import PlaylistsSummaryComponent from './PlaylistsSummaryComponent.vue';
</script>

<template>
  <div class="flex flex-col justify-start items-start gap-5 w-full max-w-screen-lg">
    <h2 class="self-stretch text-3xl font-semibold leading-9 text-foreground">Summary</h2>
        <div class="flex flex-col gap-2 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <TopChannelSummaryComponent />
            <TopVideoSummaryComponent />
            <ShortsSummaryComponent />
            <TopVideoGenresSummaryComponent />
            <TopSubscriptionGenresSummaryComponent />
        </div>
    <TitleInfoComponent title="Subscriptions" information="Subscriptionsss"/>
        <div class="flex flex-col gap-2 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <YourSubscriptionsSummaryComponent />
            <SubscriptionRecommendationsComponent />
            <TopSubscriptionGenresSummaryComponent />
        </div>
    <TitleInfoComponent title="Videos" information="videosssss" />
        <div class="flex flex-col gap-2 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <TopVideoSummaryComponent />
            <TopVideoGenresSummaryComponent />
            <LikedVideosSummaryComponent />
            <DislikedVideosSummaryComponent />
            <PlaylistsSummaryComponent />
        </div>
    <TitleInfoComponent title="Channels" information="channelsssss" />
        <div class="flex flex-col gap-2 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <TopChannelSummaryComponent />
            <TopChannelGenresSummaryComponent />
        </div>
  </div>
</template>