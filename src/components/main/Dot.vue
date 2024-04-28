<template>
  <span
    @click="
      () => {
        changeState(props.number);
      }
    "
    :class="{
      'bg-backgroundThird': props.state,
    }"
    class="cursor-pointer h-[15px] w-[15px] my-0 mx-[2px] rounded-full inline-block text-center hover:bg-backgroundThird bg-backgroundDot transition-colors duration-500 ease"
  ></span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  state: boolean;
  number: number;
  changeState: (state: number) => void;
}>();
</script>

<style scoped></style>
