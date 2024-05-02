<template>
  <main class="flex flex-col gap-10">
    <Landing />
    <About />
    <LIA />
    <Projects />
    <Contact />
  </main>
</template>

<script setup lang="ts">
import Landing from './Landing.vue';
import About from './About.vue';
import LIA from './lia/LIA.vue';
import Projects from './projects/Projects.vue';
import Contact from './contact/Contact.vue';
</script>

<style scoped></style>
