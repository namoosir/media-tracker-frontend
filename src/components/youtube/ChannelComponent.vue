<script setup lang="ts">

const props = defineProps<{
    variant: "summary" | "full";
    image: string;
    name: string;
    subscribed: boolean;
}>();
</script>

<template>
    <div v-if="variant === 'summary'" class="flex flex-start gap-2">
        <img :src="image" class="w-12 h-12 rounded-full"/>
        <div class="flex flex-col justify-center items-start">
            <h2 class="text-3xl text-center font-semibold leading-10">
                {{ name }}
            </h2>
            <p v-if="subscribed" class="text-center text-xxs">
                Subscribed
            </p>
            <p v-else class="text-center text-muted-foreground text-xxs font-medium">
                Not Subscribed
            </p>
        </div>
    </div>
</template>