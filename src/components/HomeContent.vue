<script setup lang="ts"></script>

<template>
  <div class="container-content">
    <div class="container-svg">
      <svg
        width="325"
        height="131"
        viewBox="0 0 325 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="325" height="131" fill="#B2B2B2" />
        <path
          d="M275.028 30.5356V10.4742H219.319L210.148 77.4689L201.087 10.4742H180.996L183.242 28.3636C180.926 23.7786 172.704 10.4742 154.602 10.4742C154.482 10.4664 134.488 10.4742 134.488 10.4742L134.404 108.124L119.764 10.4742L93.4499 10.4664L78.3023 111.642L78.3107 10.4742H53.1219L44.0447 67.3073L35.2021 10.4742H10.0094V120.47H29.8493V67.4514L38.8752 120.47H49.4208L58.3193 67.4514V120.47H96.564L98.8767 103.551H114.274L116.587 120.47L154.138 120.494H154.165V120.47H154.212V84.7696L158.81 84.0989L168.34 120.494H187.764L187.756 120.47H187.811L175.306 77.8226C181.638 73.1204 188.795 61.1994 186.891 49.7899V49.786C186.914 49.9341 198.697 120.543 198.697 120.543L221.794 120.471L237.576 20.778V120.471H275.027V100.691H257.253V75.4686H275.027V55.3863H257.253V30.5356H275.028ZM101.213 86.113L106.665 39.0827L112.314 86.113H101.213ZM158.874 64.3965C157.35 65.132 155.764 65.5001 154.212 65.5041V30.1275C154.236 30.1275 154.272 30.1236 154.311 30.1236C155.858 30.1118 167.443 30.5912 167.443 47.618C167.443 56.5247 163.504 62.1419 158.874 64.3965ZM314.995 100.672V120.445H278.455V10.4585H298.132V100.672H314.995Z"
          fill="white"
        />
      </svg>
      <h1>Welcome to Marvel's directory</h1>
    </div>
  </div>
</template>

<style scoped>
.container-content {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: 0 auto;
}

.container-svg {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  position: absolute;
  top: 40%;
}

.container-svg > h1 {
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
</style>
