<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from '@/store/inedx';
import { storeToRefs } from 'pinia';

const main = useMainStore();
const { counter, doubleCount } = storeToRefs(main);

defineProps<{ msg: string }>();
</script>

<template>
  <img src="@/assets/logo.png" alt="" />
  <h1>{{ counter }}</h1>
</template>

<style scoped></style>
