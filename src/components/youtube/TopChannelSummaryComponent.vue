<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import TitleArrowComponent from './TitleArrowComponent.vue';

</script>

<template>
  <div class="flex flex-col justify-center items-center gap-3 py-3 px-5 rounded-md border bg-card">
    <TitleArrowComponent text="Top Channel" />
  </div>

  <!-- <Card>
        <TitleArrowComponent text="Top Channel" />

    </Card> -->
</template>

