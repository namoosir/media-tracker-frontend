<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    text: string;
}>();

const text = ref(props.text);

</script>

<template>
    <div class="flex justify-between items-center">
        <p class="text-sm font-semibold leading-5">
            {{ text }}
        </p>
    </div>
</template>