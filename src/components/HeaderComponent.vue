<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import GatorLogoIcon from './icons/GatorLogoIcon.vue'
import GoogleIcon from './icons/GoogleIcon.vue'

const router = useRouter()
const isOpen = ref(false)

const toggleMenu : () => void = () => {
    isOpen.value = !isOpen.value
    console.log(isOpen.value)
}

const onMenuButtonClick : (platform : string) => void = (platform) => {
    toggleMenu()
    router.push(`/${platform}`)
}


</script>

<template>
<header v-if="!isOpen" class="absolute w-full">
    <div class="flex p-5 justify-end">
    <Button variant="menu" @click="toggleMenu">MENU</Button>
    </div>
</header>
<div v-if="isOpen" class="absolute flex flex-col justify-center items-center gap-5 px-3 w-28 h-full right-0 bg-background z-10 rounded-l-xl border-2">
    <Button @click="onMenuButtonClick('home')" variant="icon" size="icon">
        <GatorLogoIcon class="h-5"/>
    </Button>
    <Button @click="onMenuButtonClick('youtube')" variant="icon" size="icon">
        <GoogleIcon/>
    </Button>
    <Button @click="onMenuButtonClick('spotify')" variant="icon" size="icon">

    </Button>
</div>
<div v-if="isOpen" @click="toggleMenu" class="absolute w-full h-full left-0 z-1 backdrop-blur-sm backdrop-brightness-50">
</div>
</template>