<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useContextStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const context = useContextStore()
const { location } = storeToRefs(context)
const { navigate } = context

const buttons = [
  { name: 'home', path: '/' },
  { name: 'characters', path: '/characters' },
  { name: 'comics', path: '/comics' },
  { name: 'events', path: '/events' },
  { name: 'contact', path: '/contact' }
]
const activedButton = computed(() => location.value)

const handleSelected = (button: any) => {
  navigate(button.name)
}
</script>

<template>
  <div class="header">
    <div class="logo">
      <svg
        width="325"
        height="130"
        viewBox="0 0 325 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="325" height="130" fill="#F0141E" />
        <path
          d="M275.028 30.3025V10.3943H219.319L210.148 76.8776L201.087 10.3943H180.996L183.242 28.1471C180.926 23.5971 172.704 10.3943 154.602 10.3943C154.482 10.3865 134.488 10.3943 134.488 10.3943L134.404 107.299L119.764 10.3943L93.4499 10.3865L78.3023 110.79L78.3107 10.3943H53.1219L44.0447 66.7935L35.2021 10.3943H10.0094V119.55H29.8493V66.9365L38.8752 119.55H49.4208L58.3193 66.9365V119.55H96.564L98.8767 102.761H114.274L116.587 119.55L154.138 119.574H154.165V119.55H154.212V84.1225L158.81 83.4569L168.34 119.574H187.764L187.756 119.55H187.811L175.306 77.2286C181.638 72.5622 188.795 60.7322 186.891 49.4099V49.406C186.914 49.5529 198.697 119.623 198.697 119.623L221.794 119.551L237.576 20.6194V119.551H275.027V99.922H257.253V74.8925H275.027V54.9635H257.253V30.3025H275.028ZM101.213 85.4556L106.665 38.7843L112.314 85.4556H101.213ZM158.874 63.9049C157.35 64.6348 155.764 65.0001 154.212 65.004V29.8975C154.236 29.8975 154.272 29.8936 154.311 29.8936C155.858 29.8819 167.443 30.3577 167.443 47.2545C167.443 56.0932 163.504 61.6676 158.874 63.9049ZM314.995 99.9038V119.526H278.455V10.3787H298.132V99.9038H314.995Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="menu">
      <div v-for="(button, index) in buttons" :key="index" @click="handleSelected(button)">
        <RouterLink
          class="btn"
          :class="{ selected: activedButton === button.name }"
          :to="button.path"
          >{{ button.name }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  height: 88px;
  padding: 16px 80px 16px 80px;
  background-color: #ec1d24;
  justify-content: space-between;
  vertical-align: middle;
  box-sizing: border-box;
}

.logo > svg {
  width: 139px;
  height: 56px;
}

.menu {
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  gap: 32px;
}

.btn {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  position: relative;
}

.selected {
  font-weight: 700;
}

.selected::after {
  content: '';
  display: block;
  background-color: #ffffff;
  height: 8px;
  width: 100%;
  position: absolute;
  bottom: -33px;
}
</style>
