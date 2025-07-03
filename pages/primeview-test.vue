<template>
  <div class="container px-4 py-6 mx-auto">
    <h1 class="mb-6 text-3xl font-bold">Your Cart</h1>

    <div v-if="cartItems.length" class="space-y-4">
      <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between p-4 bg-white rounded shadow">
        <div class="flex items-center space-x-4">
          <img :src="item.image" alt="Product" class="object-cover w-20 h-20 rounded" />
          <div>
            <h2 class="text-xl font-semibold">{{ item.name }}</h2>
            <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold">R {{ item.price * item.quantity }}</p>
          <button @click="removeItem(item.id)" class="text-red-500 hover:underline">Remove</button>
        </div>
      </div>

      <div class="flex items-center justify-between pt-6 border-t">
        <p class="text-xl font-bold">Total: R {{ cartTotal }}</p>
        <button class="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Checkout</button>
      </div>
    </div>

    <div v-else class="mt-10 text-center text-gray-500">
      Your cart is empty.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cartItems = ref([
  { id: 1, name: 'Wireless Headphones', price: 799, quantity: 2, image: '/headphones.jpg' },
  { id: 2, name: 'Smartwatch', price: 1299, quantity: 1, image: '/smartwatch.jpg' }
])

const cartTotal = computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
)

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
