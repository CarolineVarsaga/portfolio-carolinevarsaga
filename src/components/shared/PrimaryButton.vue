<template>
  <a @click.prevent="scrollToAnchor" :href="props.href">
    <button class="primary-button">{{ props.text }}</button>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ text: string; href?: string }>();

const scrollToAnchor = () => {
  if (props.href) {
    const anchor = document.querySelector(props.href);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
</script>

<style scoped></style>
