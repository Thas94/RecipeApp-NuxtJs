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
        <button class="w-full py-3 mt-6 text-white bg-dodgeroll-gold hover:bg-orange-500" @click="placeOrder">
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CartDetails } from '../models/cartDetails'
const { signIn, status, lastRefreshedAt, signOut, data } = useAuth()
const { showSuccess, showError, showInfo, showWarn, show, clear } = useCustomToast()

const cartDetails = ref({
  //@ts-expect-error
  userId: data.value?.user?.userId,
  orderStatusId: 1,
  orderDetails: '',
  orderDateTime: new Date()
})
definePageMeta({
  middleware: ["auth"]
})
const result = ref(false)
const { recipesInCart } = storeToRefs(useCartStore())
const cartTotal = computed(() =>
  recipesInCart.value.reduce((acc, item) => acc + item.prepTimeMinutes * item.servings, 0)
)

const placeOrder = async () => {
  cartDetails.value.orderDetails = JSON.stringify(recipesInCart.value.map((x) => ({
    id: x.id,
    name: x.name,
    img: x.image,
    price: `R${x.prepTimeMinutes * x.servings}`
  })))

  //@ts-ignore
  result.value = await $fetch('/api/cart/addToCart', {
    method: 'POST',
    body: cartDetails.value
  })

  if(result.value)
    showSuccess('Added to cart!')
  else
    showError('An error occured.')
}

</script>