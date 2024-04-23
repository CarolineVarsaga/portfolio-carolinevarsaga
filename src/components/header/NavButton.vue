<template>
  <a class="border-none h-[35px] w-[100px] cursor-pointer" :href="button.href">{{ button.text }}</a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface INavButton {
  text: string;
  href: string;
}

defineProps<{ button: INavButton }>();
</script>

<style scoped></style>
