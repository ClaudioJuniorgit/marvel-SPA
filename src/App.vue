<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderContent from '@/components/HeaderContent.vue'
</script>

<template>
  <header><HeaderContent /></header>
  <RouterView />
</template>

<style scoped></style>
