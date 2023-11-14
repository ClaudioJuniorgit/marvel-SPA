<script setup lang="ts">
import { ref } from 'vue'
import type { Comics } from './interfaces/index'
import { useContextStore } from '@/store/counter'
import { storeToRefs } from 'pinia'
import { apiService } from '@/service/api'

const context = useContextStore()
const { heroSelected } = storeToRefs(context)

const result = ref<Comics[]>()

const fetchData = async () => {
  result.value = await apiService.get(`characters/${heroSelected.value.id}/comics`)
}

fetchData()
</script>

<template>
  <div class="hero-container">
    <div class="hero-image">
      <img
        :src="`${heroSelected.thumbnail.path}.${heroSelected.thumbnail.extension}`"
        :alt="`${heroSelected.name}-image`"
      />
    </div>
    <div class="hero-info">
      <div class="hero-description">
        <h1>{{ heroSelected.name }}</h1>
        <p>{{ heroSelected.description || 'There is no more information.' }}</p>
      </div>
      <div class="hero-comics">
        <div><h1>Comics</h1></div>
        <div class="comics-container">
          <div
            :title="comics.title"
            class="comics-card"
            v-for="(comics, index) in result"
            :key="index"
          >
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  gap: 50px;
  margin: 80px 80px 40px 80px;
  padding: 0;
}
.hero-image > img {
  width: 330px;
  height: 324px;
  border-radius: 4px;
}
.hero-description {
  text-transform: uppercase;
}

.hero-description > h1 {
  font-weight: 700;
  font-size: 32px;
}
.hero-description > p {
  font-weight: 400;
  font-size: 16px;
}

.hero-comics {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
}
.comics-container {
  display: flex;
  flex-direction: flex-start;
  flex-wrap: wrap;
  gap: 32px;
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
}

.comics-card > img {
  width: 200px;
  height: 318px;
  border-radius: 2.8px;
}
.comics-card h2 {
  max-width: 200px;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
}
.comics-card p {
  max-width: 200px;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
}
</style>
