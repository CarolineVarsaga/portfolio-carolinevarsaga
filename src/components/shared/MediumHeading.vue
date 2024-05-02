<template>
  <h3 class="medium-heading">{{ text }}</h3>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ text: string }>();
</script>

<style scoped></style>
