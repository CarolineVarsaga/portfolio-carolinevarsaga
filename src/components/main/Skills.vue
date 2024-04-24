<template>
  <div>
    <p>Kompetenser:</p>
    <ul>
      <Skill v-for="(skill, index) in skills" :key="index" :skill="skill" />
    </ul>
  </div>
</template>

<script setup lang="ts">
const skills = [
  'HTML5',
  'Sass',
  'Typescript',
  'MongoDB',
  'MySQL',
  'React',
  'Vue',
  'Agila arbetsmetoder',
  'Git',
  'Figma',
  'Photoshop',
  'Illustrator',
];
import Skill from './Skill.vue';
</script>

<style scoped></style>
