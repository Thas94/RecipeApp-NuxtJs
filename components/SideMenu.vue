<template>
  <div>
    <!-- Overlay -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-30 transition-opacity duration-300 bg-black bg-opacity-50"
      @click="closeMenu"></div>

    <!-- Side Menu -->
    <nav
      class="fixed top-0 left-0 z-40 w-2/5 h-full text-black shadow-2xl bg-gradient-to-b from-slate-200 to-orange-500"
      :class="{ 'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }">
      <div class="p-6">
        <!-- Menu Header -->
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-black">Cart Details</h2>
          <button @click="closeMenu"
            class="text-gray-400 transition-colors duration-200 hover:text-white focus:outline-none"
            aria-label="Close menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Menu Items -->

        <div v-if="recipesInCart.length" class="space-y-4">
          <div v-for="item in recipesInCart" :key="item.id"
            class="flex items-center justify-between p-4 bg-white rounded shadow">
            <div class="flex items-center space-x-4">
              <img :src="item.image" alt="Product" class="object-cover w-20 h-20 rounded" />
              <div>
                <h2 class="text-xl font-semibold">{{ item.name }}</h2>
                <!-- <p class="text-gray-600">Quantity: {{ item.quantity }}</p> -->
              </div>
            </div>
            <div class="text-right">
              <p class="text-lg font-bold">R {{ item.prepTimeMinutes * item.servings }}</p>
              <button @click="removeItem(item.id)" class="text-red-500 hover:underline">Remove</button>
            </div>
          </div>

          <div class="flex items-center justify-between pt-6 border-t">
            <p class="text-xl font-bold">Total: R {{ cartTotal }}</p>
            <Button class="px-6 py-2 text-white rounded bg-dodgeroll-gold hover:bg-orange-500 border-dodgeroll-gold"
              @click="checkout">Checkout</Button>
          </div>
        </div>

        <div v-else class="mt-10 text-center text-gray-500">
          Your cart is empty.
        </div>

      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue';
import { ref, watch, onMounted, onUnmounted } from 'vue'
const { signIn, status, lastRefreshedAt, signOut, data } = useAuth()
const { showSuccess, showError, showInfo, showWarn, show, clear } = useCustomToast()
const { recipesInCart } = storeToRefs(useCartStore())
const router = useRouter()
const { isMenuOpen } = storeToRefs(useSideMenuStore())
const menuRef = ref<HTMLElement | null>(null)

const checkout = () => {
  if (status.value == 'authenticated') {
    router.push('/checkout')
    closeMenu()
  }
  else {
    showWarn('Please login first.')
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
}


// Close menu on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
})

// Prevent body scroll when menu is open
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

const cartTotal = computed(() =>
  recipesInCart.value.reduce((acc, item) => acc + item.prepTimeMinutes * item.servings, 0)
)

const removeItem = (id: number) => {
  recipesInCart.value = recipesInCart.value.filter(item => item.id !== id)
}

</script>