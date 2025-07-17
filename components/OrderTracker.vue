<!-- components/OrderTracker.vue -->
<template>
    <div class="p-6 bg-white rounded shadow-md">
      <h2 class="mb-4 text-xl font-bold">Order #{{ order.id }}</h2>
      <ul class="space-y-4">
        <li v-for="(step, index) in order.tracking" :key="index" class="flex items-center">
          <i class="mr-2 text-green-500 pi pi-check-circle" v-if="step.completed"></i>
          <i class="mr-2 text-yellow-500 pi pi-clock" v-else></i>
          <span :class="step.completed ? 'text-green-700' : 'text-gray-700'">{{ step.label }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    order: Object
  })
  </script>
  