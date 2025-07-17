<template>
    <div class="flex items-center justify-between mb-2">
        <h2 class="text-lg font-semibold">Order #{{ order.orderId }}</h2>
        <span :class="order.orderStatus === 'Delivered' ? 'text-green-600' : 'text-yellow-600'"
            class="font-medium cursor-pointer" @click="isVisible = true">
            {{ order.orderStatus }}
        </span>
    </div>
    <p class="text-sm text-gray-600">Placed on: {{ order.createdDate }}</p>
    <ul class="mt-2 text-sm text-gray-700 list-disc list-inside">
        <li v-for="item in order.orderDetailsObj">{{ item.name }} - {{ item.price }}</li>
    </ul>
    <Dialog v-model:visible="isVisible" modal header='Order Tracking' :style="{ width: '25rem', height: '25rem' }">
        <span class="block mb-8 text-surface-500">Order #{{ order.orderId }}</span>
        <div class="flex gap-2">
            <ul class="space-y-4">
                <li v-for="(step, index) in mockOrder.tracking" :key="index" class="flex items-center">
                    <i class="mr-2 text-green-500 pi pi-check-circle" v-if="step.completed"></i>
                    <i class="mr-2 text-yellow-500 pi pi-clock" v-else></i>
                    <span :class="step.completed ? 'text-green-700' : 'text-gray-700'">{{ step.label }}</span>
                </li>
            </ul>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { type OrderDetails } from '~/models/orderDetails';
defineProps<{
    order: OrderDetails;
}>();
const isVisible = ref(false);
const mockOrder = {
  tracking: [
    { label: 'Order Placed', completed: true },
    { label: 'Processing', completed: true },
    { label: 'Shipped', completed: false },
    { label: 'Out for Delivery', completed: false },
    { label: 'Delivered', completed: false }
  ]
}

</script>

<style scoped></style>