<template>
  <div class="slides fade">
    <div class="slide_img_text_container">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a class="btn a" :href="project.href" target="_blank">Läs mer här</a>
    </div>

    <picture>
      <source media="(min-width: 500px)" height="500px" loading="lazy" class="slide_img" />
      <source media="(min-width: 320px)" height="500px" loading="lazy" class="slide_img" />
      <img :src="project.imgsrc" :alt="project.alt" height="500px" loading="lazy" class="slide_img" />
    </picture>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface IProjectProps {
  title: string;
  description: string;
  href: string;
  imgsrc: string;
  alt: string;
}

defineProps<{ project: IProjectProps }>();
</script>

<style scoped></style>
