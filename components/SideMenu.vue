<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
});

const {recipesInCart} = useCartStore()

const isOpen = ref(props.isMenuOpen)
const menuRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
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
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

</script>

<template>
  <div>
    <!-- Menu Toggle Button -->
    <!-- <button
      @click="toggleMenu"
      class="fixed top-4 left-4 z-50 p-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{ 'left-72': isOpen }"
      aria-label="Toggle menu"
    >
      <div class="w-6 h-6 flex flex-col justify-center items-center">
        <span
          class="block w-5 h-0.5 bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-1.5': isOpen }"
        ></span>
        <span
          class="block w-5 h-0.5 bg-white mt-1 transition-all duration-300"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span
          class="block w-5 h-0.5 bg-white mt-1 transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-1.5': isOpen }"
        ></span>
      </div>
    </button> -->

    <!-- Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
      @click="closeMenu"
    ></div>

    <!-- Side Menu -->
    <nav
      class="fixed top-0 left-0 h-full w-2/5 bg-gradient-to-b from-slate-200 to-orange-500 text-black z-40 shadow-2xl"
      :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
    >
      <div class="p-6">
        <!-- Menu Header -->
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-black">Cart Details</h2>
          <button
            @click="closeMenu"
            class="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
            aria-label="Close menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Menu Items -->
        <ul class="space-y-2" v-if="recipesInCart.length > 0">
          <li v-for="item in recipesInCart" :key="item.id">
            <a
              class="flex items-center px-4 py-3 text-black hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 group"
              @click="closeMenu"
            >
              <span class="font-medium">{{ item.name }}</span>
            </a>
          </li>
        </ul>
        <p v-else>Nothing in the cart.</p>

      </div>
    </nav>
  </div>
</template>