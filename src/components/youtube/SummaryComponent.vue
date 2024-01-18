<script setup lang="ts">
import TopChannelSummaryComponent from './TopChannelSummaryComponent.vue';
import TopVideoSummaryComponent from './TopVideoSummaryComponent.vue';
import ShortsSummaryComponent from './ShortsSummaryComponent.vue';
import YourSubscriptionsSummaryComponent from './YourSubscriptionsSummaryComponent.vue';
import SubscriptionRecommendationsComponent from './SubscriptionRecommendationsComponent.vue';
import TopVideoGenresSummaryComponent from './TopVideoGenresSummaryComponent.vue';
import TopSubscriptionGenresSummaryComponent from './TopSubscriptionGenresSummaryComponent.vue';
</script>

<template>
  <div class="flex flex-col justify-start items-start gap-5">
    <h2 class="self-stretch text-3xl font-semibold leading-9 text-foreground">Summary</h2>
        <TopChannelSummaryComponent />
        <TopVideoSummaryComponent />
        <ShortsSummaryComponent />
        <TopVideoGenresSummaryComponent />
        <TopSubscriptionGenresSummaryComponent />
    <h2 class="self-stretch text-3xl font-semibold leading-9 text-foreground">Subscriptions</h2>
        <YourSubscriptionsSummaryComponent />
        <SubscriptionRecommendationsComponent />
        <TopSubscriptionGenresSummaryComponent />
    <h2 class="self-stretch text-3xl font-semibold leading-9 text-foreground">Videos</h2>
        <TopVideoSummaryComponent />
        <TopVideoGenresSummaryComponent />
    <h2 class="self-stretch text-3xl font-semibold leading-9 text-foreground">Channels</h2>
        <TopChannelSummaryComponent />
    
  </div>
</template>