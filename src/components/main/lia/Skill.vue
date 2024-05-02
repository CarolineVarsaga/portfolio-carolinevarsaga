<template>
  <li class="list-disc cursor-pointer text-left">{{ skill }}</li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ skill: string }>();
</script>

<style scoped></style>
