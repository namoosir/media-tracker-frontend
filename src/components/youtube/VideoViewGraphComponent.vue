<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio';

defineProps<{
    title: string;
    image: string;
    channel: string;
    views: number;
    viewFraction: number;
    onClick: () => void;
}>();

const formatNumberAbbreviation = (number: number): string => {
    const abbreviations = ["", "K", "M", "B"];

    let index = 0;
    while (number >= 1000 && index < abbreviations.length - 1) {
        number /= 1000;
        index++;
    }

    // Adjust the number of decimal places based on the magnitude
    const precision = Math.abs(number % 1) > 0 ? 1 : 0;

    return number.toFixed(precision) + abbreviations[index];
}

const getPercent = (number: number): string => {
    return `${number*100}%`;
}

</script>

<template>
    <div @click="onClick" class="relative flex flex-row gap-2 p-1 cursor-pointer">
        <div class="absolute bg-muted h-full rounded-xl -z-[1] -translate-x-1 -translate-y-1" :style="{ width : getPercent(viewFraction) }"></div>
        <div class="min-w-[160px]">
            <AspectRatio :ratio="16/9" class="bg-muted relative rounded-xl">
                <img class="w-full h-full object-contain rounded-xl" :src="image">
            </AspectRatio>
        </div>
        <div class="flex flex-col">
            <p class="text-foreground text-sm font-medium line-clamp-3">{{ title }}</p>
            <p class="text-muted-foreground text-xxs font-semibold line-clamp-1">{{ channel }}</p>
            <p class="text-muted-foreground text-xxs font-semibold">{{ formatNumberAbbreviation(views) }} views</p>
        </div>
    </div>
</template>