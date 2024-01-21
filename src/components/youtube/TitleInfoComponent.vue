<script setup lang="ts">
import InfoIcon from '../icons/InfoIcon.vue';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

defineProps<{
    title: string;
    information: string;
}>();

</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <div class="flex items-start gap-2 mt-7">
                <h2 class="self-stretch text-3xl font-semibold leading-9 text-foreground">
                    {{ title }}
                </h2>
                <TooltipTrigger as-child>
                    <InfoIcon class="w-4 h-4 fill-muted-foreground"/>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{{ information }}</p>
                </TooltipContent>
            </div>
        </Tooltip>
    </TooltipProvider>
</template>