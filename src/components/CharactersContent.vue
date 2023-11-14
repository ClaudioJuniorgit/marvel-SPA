<script setup lang="ts">
import HeroDescription from '@/components/HeroDescription.vue'
import type { Hero } from './interfaces'
import BreadCrumb from '@/components/BreadCrumb.vue'
import { useContextStore } from '@/store/counter'
import { storeToRefs } from 'pinia'
import { apiService } from '@/service/api'
import { ref } from 'vue'

const context = useContextStore()
const { heroSelected } = storeToRefs(context)
const { addBreadCrumbContent, selectHero } = context

const result = ref<Hero[]>()

const fetchData = async () => {
  result.value = await apiService.get('characters')
}

const openSelectedHero = (hero: Hero) => {
  selectHero(hero)
  addBreadCrumbContent(hero.name)
}

fetchData()
</script>

<template>
  <BreadCrumb>
    <template>
      <a href="/characters">Characters</a>
    </template>
  </BreadCrumb>
  <div v-if="!heroSelected" class="container-content">
    <div
      @click="openSelectedHero(hero)"
      :title="hero.name"
      class="card"
      v-for="(hero, index) in result"
      :key="index"
    >
      <img
        :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
        :alt="`${hero.name}-image`"
      />
      <div class="hero-name">
        <h2>{{ hero.name }}</h2>
      </div>
    </div>
  </div>
  <HeroDescription v-if="heroSelected" :hero="heroSelected" />
</template>

<style scoped>
.container-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  gap: 32px;
  flex-wrap: wrap;
  padding: 50px 64px;
}

.card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-height: 217px;
  gap: 16px;
}

.card img {
  width: 187px;
  min-height: 183px;
  border-radius: 4px;
}

.hero-name {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
}

.hero-name h2 {
  max-width: 187px;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
}
</style>
