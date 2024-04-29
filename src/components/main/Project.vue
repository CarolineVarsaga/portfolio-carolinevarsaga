<template>
  <div
    v-if="state"
    class="flex justify-center transition-opacity duration-1000 ease relative top-1/2 min-h-[500px] fade text-white"
  >
    <div
      class="flex flex-col items-center gap-4 absolute bottom-[2rem] left-1/2 text-color -translate-x-1/2 bg-backgroundFourth px-[0.5rem] py-[0.5rem] rounded-[12px] border-[2px] border-solid min-w-[320px] border-borderColor"
    >
      <h2 class="text-[1.5rem] font-bold py-3">{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a
        class="h-[35px] w-[150px] rounded-[12px] border-none bg-backgroundButton hover:bg-backgroundButtonHover shadow-button flex items-center justify-center text-white"
        :href="project.href"
        target="_blank"
        >Läs mer här</a
      >
    </div>

    <picture class="w-full h-[500px]">
      <source media="(min-width: 500px)" height="500px" loading="lazy" class="slide_img" />
      <source media="(min-width: 320px)" height="500px" loading="lazy" class="slide_img" />
      <img
        :src="project.imgsrc"
        :alt="project.alt"
        height="500px"
        loading="lazy"
        class="object-cover m-0 overflow-hidden w-full h-[500px]"
      />
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

defineProps<{ project: IProjectProps; state: boolean }>();
</script>

<style scoped></style>
