<template>
  <section id="lia" class="border-y border-solid px-4 py-6 flex flex-col gap-4 bg-backgroundFourth border-borderColor">
    <SectionHeading text="LIA - Lärande i arbete" />
    <LIADescription />
    <Skills />
    <LIAPeriods />
    <PrimaryButton text="Kontakta mig" href="#contact" />
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from '../../shared/PrimaryButton.vue';
import SectionHeading from '../../shared/SectionHeading.vue';
import Skills from './Skills.vue';
import LIAPeriods from './LIAPeriods.vue';
import LIADescription from './LIADescription.vue';
</script>

<style scoped></style>
