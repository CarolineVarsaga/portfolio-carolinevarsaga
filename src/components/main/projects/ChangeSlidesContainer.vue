<template>
  <a @click="prevSlide" class="prev cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
  </a>
  <a @click="nextSlide" class="next cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff">
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ nextSlide: () => void; prevSlide: () => void }>();
</script>

<style scoped></style>
