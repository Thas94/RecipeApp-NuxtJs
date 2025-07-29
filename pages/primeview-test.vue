<!-- components/ProgressTimer.vue -->
<template>
    <div class="w-full max-w-md mx-auto mt-10">
      <div class="mb-2 text-sm text-gray-700">Time Remaining: {{ secondsLeft }}s</div>
      <div class="w-full h-4 overflow-hidden bg-gray-200 rounded-full">
        <div
          class="h-4 transition-all duration-100 ease-linear bg-blue-600"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const duration = 10 // seconds
  const intervalMs = 100 // update every 100ms
  const progress = ref(0)
  const secondsLeft = ref(duration)
  
  let timer
  
  onMounted(() => {
    const totalSteps = (duration * 1000) / intervalMs //100
    const increment = 100 / totalSteps // 1
    let steps = 0
  
    timer = setInterval(() => {
        debugger
      steps++
      progress.value = Math.min(steps * increment, 100)
      secondsLeft.value = Math.ceil((totalSteps - steps) * intervalMs / 1000)
  
      if (steps >= totalSteps) {
        clearInterval(timer)
      }
    }, intervalMs)
  })
  
  onUnmounted(() => {
    clearInterval(timer)
  })
  </script>
  