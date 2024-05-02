<template>
  <nav class="flex items-end justify-end gap-[2rem] h-full list-none">
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
  { text: 'Om mig', href: '#lia' },
  { text: 'Portfolio', href: '#projects' },
  { text: 'Kontakt', href: '#contact' },
]);
</script>

<style scoped></style>
