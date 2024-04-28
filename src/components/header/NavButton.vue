<template>
  <li class="nav-button h-[35px] w-[100px]">
    <a class="border-none cursor-pointer" :href="button.href">{{ button.text }}</a>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface INavButton {
  text: string;
  href: string;
}

defineProps<{ button: INavButton }>();
</script>

<style scoped></style>
