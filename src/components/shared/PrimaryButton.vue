<template>
  <button class="primary-button">{{ text }}</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ text: string }>();
</script>

<style scoped></style>
