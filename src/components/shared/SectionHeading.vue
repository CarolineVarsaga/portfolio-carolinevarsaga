<template>
  <h2 class="section-heading">{{ text }}</h2>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ text: string }>();
</script>

<style scoped></style>
