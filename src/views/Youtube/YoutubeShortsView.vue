<script setup lang="ts">
import ShortComponent from '@/components/youtube/ShortComponent.vue';
import { useYoutubeStore } from '@/stores/youtube/youtube';

const youtubeStore = useYoutubeStore();

const shorts = [
    {
        title: "Breeze + Viper = nice (Shorts)",
        image: "https://i.ytimg.com/vi/m-iMh31xDy4/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCZnRumUvAvVQEoKU66o5Tqifzd6Q",
        onClick: () => {},
    },
    {
        title: "That's a nice argument.",
        image: "https://i.ytimg.com/vi/iZZm3wkGawY/hq720_2.jpg?sqp=-oaymwEdCOADEOADSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAJOzxbTuHux_fwEaSZRaaZYn8opw",
        onClick: () => {},
    },
    {
        title: "Omega Mart",
        image: 'https://i.ytimg.com/vi/9B7gKBYKAqU/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBabjwCNw5RryTCFR4ePBjrhGO5vA',
        onClick: () => {},
    },
    {
        title: "Breeze + Viper = nice (Shorts)",
        image: "https://i.ytimg.com/vi/m-iMh31xDy4/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCZnRumUvAvVQEoKU66o5Tqifzd6Q",
        onClick: () => {},
    },
    {
        title: "That's a nice argument.",
        image: "https://i.ytimg.com/vi/iZZm3wkGawY/hq720_2.jpg?sqp=-oaymwEdCOADEOADSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAJOzxbTuHux_fwEaSZRaaZYn8opw",
        onClick: () => {},
    },
    {
        title: "Omega Mart",
        image: 'https://i.ytimg.com/vi/9B7gKBYKAqU/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBabjwCNw5RryTCFR4ePBjrhGO5vA',
        onClick: () => {},
    }
];

</script>

<template>
    <main class="flex flex-col justify-start items-center p-5 pt-16">
        <div class="flex flex-col justify-start items-start gap-5 w-full max-w-screen-lg">
            <h2 class="self-stretch text-3xl font-semibold leading-9 text-foreground">Shorts</h2>
            <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1 w-full">
                <div class="min-w-[104px]" v-for="(short, index) in shorts" :key="index">
                    <ShortComponent :onClick="short.onClick" :title="short.title" :image="short.image"/>
                </div>
            </div>
        </div>
    </main>
</template>