<template>
  <a @click.prevent="scrollToAnchor" :href="props.href">
    <button class="primary-button">{{ props.text }}</button>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ text: string; href?: string }>();

const scrollToAnchor = async () => {
  if (props.href) {
    const anchor = document.querySelector(props.href);
    console.log(anchor);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
</script>

<style scoped></style>
