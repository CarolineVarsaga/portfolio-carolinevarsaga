<template>
  <h2 class="section-heading">{{ text }}</h2>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ text: string }>();
</script>

<style scoped></style>
