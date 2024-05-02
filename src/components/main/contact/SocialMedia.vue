<template>
  <div class="flex gap-6">
    <a href="http://github.com/carolinevarsaga" target="_blank">
      <img :src="GithubLogo" width="96" height="96" alt="github" loading="lazy" />
    </a>
    <a href="http://linkedin.com/in/caroline-varsaga" target="_blank"
      ><img :src="LinkedinLogo" width="96" height="96" alt="linkedin" loading="lazy"
    /></a>
  </div>
</template>

<script setup lang="ts">
import GithubLogo from '../../../assets/icons/github.svg';
import LinkedinLogo from '../../../assets/icons/linkedin.svg';
</script>

<style scoped></style>
