import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Hero } from '../components/interfaces'

export const useContextStore = defineStore('counter', () => {
  const location = ref<string>('home')
  const breadCrumb = ref<string[]>(['home'])
  const heroSelected = ref<Hero>()
  const navigate = (path: string) => {
    location.value = path
    breadCrumb.value[0] = path
    clearBreadCrumbContext()
  }
  const addBreadCrumbContent = (content: string) => {
    breadCrumb.value.push('/', content)
  }
  const clearBreadCrumbContext = () => {
    breadCrumb.value.splice(1, 2)
    heroSelected.value = null
  }
  const selectHero = (hero: Hero) => {
    if (hero === null) return clearBreadCrumbContext()
    heroSelected.value = hero
  }
  return {
    breadCrumb,
    heroSelected,
    location,
    addBreadCrumbContent,
    navigate,
    selectHero
  }
})
