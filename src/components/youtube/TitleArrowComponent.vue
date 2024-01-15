<script setup lang="ts">
import { ref } from 'vue';
import ChevronRightIcon from '../icons/ChevronRightIcon.vue';

const props = defineProps<{
    text: string;
}>();

// const text = ref(props.text);

</script>

<template>
    <div class="flex justify-between items-center">
        <p class="text-sm font-semibold leading-5">
            {{ text }}
        </p>
        <ChevronRightIcon class="w-5 h-5 fill-muted-foreground"/>
    </div>
</template>