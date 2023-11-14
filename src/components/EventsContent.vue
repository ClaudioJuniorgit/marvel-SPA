<script setup lang="ts">
import { ref } from 'vue'
import type { Events } from './interfaces'
import { apiService } from '@/service/api'

const result = ref<Events[]>()

const fetchData = async () => {
  result.value = await apiService.get('events')
}

fetchData()

const normalizeTitle = (text: string) => {
  if (text.length > 24) {
    return text.slice(0, 24) + '...'
  }
  return text
}
</script>

<template>
  <div class="container-content">
    <div :title="event.title" class="card" v-for="(event, index) in result" :key="index">
      <img
        :src="`${event.thumbnail.path}.${event.thumbnail.extension}`"
        :alt="`${event.title}-image`"
      />
      <div class="card-content">
        <h1 :title="event.title">{{ normalizeTitle(event.title) }}</h1>
        <p :title="event.description">{{ event.description }}</p>
        <span v-if="event.start"
          ><strong>DATE OF THE EVENT: </strong
          >{{
            Intl.DateTimeFormat('pt-BR', {
              dateStyle: 'short'
            }).format(new Date(event.start))
          }}</span
        >
      </div>
    </div>
  </div>
  <div></div>
</template>

<style scoped>
.container-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 32px;
  flex-wrap: wrap;
  padding-top: 65px;
  padding-bottom: 30px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-width: 624px;
  gap: 24px;
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 16px;
}

.card > img {
  width: 223px;
  height: 223px;
}

.card-content > h1 {
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  margin: 0;
}

.card-content > p {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}

.card-content > span {
  font-weight: 400;
  font-size: 16px;
}
.card-content > span > strong {
  font-weight: 600;
  font-size: 16px;
}
</style>
