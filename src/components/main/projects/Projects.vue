<template>
  <section id="projects" class="px-4 flex flex-col gap-4">
    <div class="flex flex-col gap-6">
      <SectionHeading text="Portfolio" />
      <p>
        Några projekt/uppgifter i urval. Fler finns att finna på min GitHub. Kommer uppdatera allt eftersom under våren.
      </p>
    </div>

    <div class="relative m-0 flex flex-col gap-10 max-h-full">
      <Project v-for="(project, index) in projectsRef" :key="index" :state="states[index]" :project="project" />
      <ChangeSlidesContainer :nextSlide="nextSlide" :prevSlide="prevSlide" />
      <div class="text-center w-full">
        <Dot
          v-for="(state, index) in states"
          :key="index"
          :number="index"
          :state="state"
          :changeState="changeStateBasedOnPosition"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ChangeSlidesContainer from './ChangeSlidesContainer.vue';
import { ref } from 'vue';
import Dot from './Dot.vue';
import SectionHeading from '../../shared/SectionHeading.vue';
import Project from './Project.vue';
import { projects } from '../../../data/projects';

const projectsRef = ref([...projects]);
const states = ref([true, false, false, false]);
let number = 0;

const changeState = () => {
  if (number < states.value.length - 1) {
    number++;
  } else {
    number = 0;
  }
  changeStateBasedOnPosition(number);
};

setInterval(() => {
  changeState();
}, 8000);

const nextSlide = () => {
  const length = states.value.length;
  const currentIndex = states.value.findIndex(state => state === true);
  const nextIndex = (currentIndex + 1) % length;
  states.value = states.value.map((_, index) => index === nextIndex);
};

const prevSlide = () => {
  const length = states.value.length;
  const currentIndex = states.value.findIndex(state => state === true);
  const prevIndex = (currentIndex - 1 + length) % length;
  states.value = states.value.map((_, index) => index === prevIndex);
};

const changeStateBasedOnPosition = (number: number) => {
  states.value = states.value.map((_, index) => {
    if (index === number) return true;
    else {
      return false;
    }
  });
};
</script>

<style scoped></style>
