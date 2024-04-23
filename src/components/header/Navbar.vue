<template>
  <nav class="flex items-end gap-[0.5rem] h-full">
    <NavButton v-for="(button, index) in navButtons" :key="index" :button="button" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavButton from './NavButton.vue';

interface INavButton {
  text: string;
  href: string;
}

const navButtons = ref<INavButton[]>([
  { text: 'Om mig', href: '' },
  { text: 'Portfolio', href: '' },
  { text: 'Kontakt', href: '' },
]);
</script>

<style scoped></style>
