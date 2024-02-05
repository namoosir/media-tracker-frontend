<script setup lang="ts">
import VideoListIconSummaryComponent from './VideoListIconSummaryComponent.vue';
import PlaylistIcon from '../icons/PlaylistIcon.vue';

const title = "Playlists";
const videos = [
    'https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w',
    'https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w',
    'https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAe7sh45ESDOsroR5IWvlpgHWkK3w',
];
const onButtonClick = () => {

}
const icon = PlaylistIcon;

</script>

<template>
<VideoListIconSummaryComponent :title="title" :videos="videos" :on-button-click="onButtonClick" :icon="icon"/>
</template>

