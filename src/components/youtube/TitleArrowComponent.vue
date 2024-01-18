<script setup lang="ts">
import ChevronRightIcon from '../icons/ChevronRightIcon.vue';

defineProps<{
    text: string;
}>();

</script>

<template>
    <div class="flex justify-between items-center">
        <p class="text-sm font-semibold leading-5">
            {{ text }}
        </p>
        <ChevronRightIcon class="w-3 h-3 fill-muted-foreground"/>
    </div>
</template>