<script setup lang="ts">
import { ref } from 'vue'
import type { Comics } from './interfaces'
import { apiService } from '@/service/api'

const result = ref<Comics[]>()

const fetchData = async () => {
  result.value = await apiService.get('comics')
}

fetchData()
</script>

<template>
  <div class="comics-container">
    <div :title="comics.title" class="comics-card" v-for="(comics, index) in result" :key="index">
      <img
        :src="`${comics.thumbnail.path}.${comics.thumbnail.extension}`"
        :alt="`${comics.title}-image`"
      />
      <div class="comics-description">
        <h2>{{ comics.title }}</h2>
        <p>Pages: {{ comics.pageCount }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comics-container {
  display: flex;
  flex-direction: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  padding: 50px 64px;
}

.comics-card {
  display: flex;
  flex-direction: column;
}

.comics-card > img {
  width: 187px;
  height: 283px;
  border-radius: 4px;
}
.comics-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.comics-description {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-transform: uppercase;
}

.comics-card h2 {
  max-width: 187px;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
}
.comics-card p {
  font-weight: 400;
  font-size: 14px;
  margin: 0;
}
</style>
