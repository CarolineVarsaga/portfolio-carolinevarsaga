<template>
  <section class="px-[2rem] flex flex-col xl:flex-row gap-6">
    <Portrait />
    <div class="flex flex-col gap-6">
      <SectionHeading text="Om mig" />
      <p class="leading-[1.15rem]">
        Jag är en entusiastisk front end developer-student med passion för problemlösning. Jag har öga för det grafiska
        och brinner för att omsätta kreativa designkoncept till responsiva, användarvänliga webbsidor. Min strävan är
        att skapa estetiskt tilltalande digitala upplevelser baserade på semantiskt uppbyggd kodstruktur.
      </p>
      <PrimaryButton text="Portfolio" href="#projects" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from '../shared/PrimaryButton.vue';
import SectionHeading from '../shared/SectionHeading.vue';
import Portrait from './Portrait.vue';
</script>

<style scoped></style>
