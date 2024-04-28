<template>
  <header
    class="flex flex-col md:flex-row md:justify-between top-0 w-screen pl-[2rem] md:pl-[4rem] xl:pl-[5rem] pt-[2.5rem] pr-[1rem] h-[10rem]"
  >
    <Logo />
    <Navbar />
  </header>
</template>

<script setup lang="ts">
import Logo from './Logo.vue';
import Navbar from './Navbar.vue';
</script>

<style scoped></style>
