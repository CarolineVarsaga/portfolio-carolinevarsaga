<template>
  <section>
    <SectionHeading text="LIA - Lärande i arbete" />
    <p>Under hösten 2024 går jag ut på min första LIA-period. Då kommer jag ha mer än 1 års studier i bagaget.</p>
    <p>
      Jag önskar en LIA-plats där jag kan fortsätta utvecklas och få använda min kreativa sida till att bygga upp
      hemsidor/webbapplikationer. Ser framemot att lära mig mer inom bland annat SCSS och JavaScript.
    </p>
    <Skills />
    <p>LIA-period 1: 14 oktober 2024 - 20 december 2024</p>
    <p>LIA-period 2: 3 februari 2025 - 23 maj 2025</p>
    <p>
      Utbildningens hemsida:
      <a href="https://medieinstitutet.se/utbildningar/front-end-developer/" target="_blank">Front End Developer</a>
    </p>

    <PrimaryButton text="Kontakta mig" />
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from '../shared/PrimaryButton.vue';
import SectionHeading from '../shared/SectionHeading.vue';
import Skills from './Skills.vue';
</script>

<style scoped></style>
