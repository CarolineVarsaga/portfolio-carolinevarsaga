<template>
  <section class="flex flex-col gap-4 px-4 py-6 bg-backgroundFourth">
    <SectionHeading text="Kontakta mig" />
    <p>E-post: carolinevarsaga@gmail.com</p>
    <p>Tel: 073-0840995</p>
    <h3>Besök mig</h3>
    <SocialMedia />
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../shared/SectionHeading.vue';
import SocialMedia from './SocialMedia.vue';
</script>

<style scoped></style>
