<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import GatorLogoIcon from './icons/GatorLogoIcon.vue'
import YoutubeIcon from './icons/YoutubeIcon.vue'
import SpotifyIcon from './icons/SpotifyIcon.vue'

const router = useRouter()
const isOpen = ref(false)

const toggleMenu : () => void = () => {
    isOpen.value = !isOpen.value
}

const onMenuButtonClick : (platform : string) => void = (platform) => {
    toggleMenu()
    if (platform === 'home') {
        router.push(`${platform}`)
    } else {
        router.push(`/platform?type=${platform}`)
    }
}

</script>

<template>
<header v-if="!isOpen" class="fixed w-screen">
    <div class="flex p-5 justify-end">
        <Button variant="menu" @click="toggleMenu">MENU</Button>
    </div>
</header>
<div :class="{'opened': isOpen}" class="transition-all fixed flex flex-col justify-center items-center gap-5 px-3 w-28 h-full -right-28 bg-background z-10 rounded-l-xl border-2 inset-y-0">
    <Button @click="onMenuButtonClick('home')" variant="icon" size="icon">
        <GatorLogoIcon class="h-5"/>
    </Button>
    <Button @click="onMenuButtonClick('youtube')" variant="icon" size="icon">
        <YoutubeIcon class="h-7"/>
    </Button>
    <Button @click="onMenuButtonClick('spotify')" variant="icon" size="icon">
        <SpotifyIcon class="h-10"/>
    </Button>
</div>
<div v-if="isOpen" ref="el" @click="toggleMenu" class="fixed inset-0 left-0 z-1 backdrop-blur-sm backdrop-brightness-50 cursor-pointer">
</div>
</template>

<style scoped>
.opened {
    right: 0;
    transition-duration: 500ms;
}

</style>