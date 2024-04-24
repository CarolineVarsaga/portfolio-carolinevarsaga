<template>
  <li>{{ skill }}</li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ skill: string }>();
</script>

<style scoped></style>
