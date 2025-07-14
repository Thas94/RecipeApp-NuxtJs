<template>
    <div class="max-w-4xl p-6 mx-auto">  
      <div class="grid gap-6 md:grid-cols-2">
        <!-- Billing Info -->
        <div>
          <h2 class="mb-4 text-xl font-semibold">Billing Information</h2>
          <form class="space-y-4">
            <input type="text" placeholder="Full Name" class="w-full p-3 border rounded" />
            <input type="email" placeholder="Email Address" class="w-full p-3 border rounded" />
            <input type="text" placeholder="Address" class="w-full p-3 border rounded" />
            <input type="text" placeholder="City" class="w-full p-3 border rounded" />
            <input type="text" placeholder="Postal Code" class="w-full p-3 border rounded" />
          </form>
        </div>
  
        <!-- Order Summary -->
        <div>
          <h2 class="mb-4 text-xl font-semibold">Order Summary</h2>
          <div class="p-4 space-y-2 bg-gray-100 rounded">
            <div v-for="item in recipesInCart" :key="item.id" class="flex justify-between">
              <span>{{ item.name }}</span>
              <span>R {{ item.prepTimeMinutes * item.servings }}</span>
            </div>
            <hr />
            <div class="flex justify-between font-bold">
              <span>Total</span>
              <span>R {{ cartTotal }}</span>
            </div>
          </div> 
          <button class="w-full py-3 mt-6 text-white bg-dodgeroll-gold hover:bg-orange-500">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">

    definePageMeta({
         middleware: ["auth"]
     })
    const { recipesInCart } = storeToRefs(useCartStore())
    const cartTotal = computed(() =>
        recipesInCart.value.reduce((acc, item) => acc + item.prepTimeMinutes * item.servings, 0)
    )

</script>
  