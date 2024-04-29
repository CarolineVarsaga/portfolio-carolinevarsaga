<template>
  <section class="px-4 flex flex-col gap-4">
    <div class="flex flex-col gap-6">
      <SectionHeading text="Portfolio" />
      <p>
        Några projekt/uppgifter i urval. Fler finns att finna på min GitHub. Kommer uppdatera allt eftersom under våren.
      </p>
    </div>

    <div class="relative m-0 flex flex-col gap-10 max-h-full">
      <Project v-for="(project, index) in projectsRef" :key="index" :state="states[index]" :project="project" />
      <ChangeSlidesContainer />
      <div class="text-center w-full">
        <Dot
          v-for="(state, index) in states"
          :key="index"
          :number="index"
          :state="state"
          :changeState="changeStatesOnClick"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ChangeSlidesContainer from './ChangeSlidesContainer.vue';
import { ref } from 'vue';
import Dot from './Dot.vue';
import SectionHeading from '../shared/SectionHeading.vue';
import Project from './Project.vue';
import { projects } from '../../data/projects';

const projectsRef = ref([...projects]);

const states = ref([true, false, false, false]);
const inViewRef = ref([true, false, false, false]);

const changeStatesOnClick = (number: number) => {
  states.value = states.value.map((state, index) => {
    if (index === number) return true;
    else {
      return false;
    }
  });

  console.log(states.value);
};
</script>

<style scoped></style>
