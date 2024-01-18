<script setup lang="ts">
import ImageGridSummaryComponent from './ImageGridSummaryComponent.vue';

const title = "Your Subscriptions";
const images = [
    'https://yt3.googleusercontent.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AIf8zZS5rw1HUlwKPR0ERetSUCbi_D83ik5eGJjr0hGVCA=s176-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/6cGM3dEVrYKT0a7JGxJKKchqTJd9CslwpweoIgZF6gOQWk3lFoAtaY7MEQDHaAxLzrOUA5ftoA=s176-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ANmgv2-dyHCi7tnIuUtJLcKUI9QIk2Rp8Fojl4Gwe4PLxFCxD-S0jvJdO7JvEbHnT3Rk_zaD=s176-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/3qmO1ZC01p1b9FEeGX9kfr9ZoWIcIvGa98-0KsQBwepeysw92A1yLk2N8FA-qW06gIx4CrUpdTg=s176-c-k-c0x00ffffff-no-rj',
];
const onButtonClick = () => {

}


</script>

<template>
<ImageGridSummaryComponent :title="title" :images="images" :on-button-click="onButtonClick"/>
</template>

