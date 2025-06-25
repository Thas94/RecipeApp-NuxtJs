<template>
    <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" densities="1px" format="webp" src="/icon-green.png" alt="" />
        <span class="text-3xl font-bold">Nuxt Recipes</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
            <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/primeview-test">Primeview</NuxtLink>
        </li>
        <li>
        </li>
      </ul>
      <div class="mini-cart">
        <div class="cart-total">
          <button class="flex bg-dodgeroll-gold text-black text-center text-xl lg:text-2xl font-semibold-md p-2 rounded-md" @click="showMenu">
            <Icon name="mdi:cart-outline" size="30px"/>
            <div class="relative">{{ recipesInCart.length }}</div>
          </button>
        </div>
      </div>
    </nav>
  </header>
  <div v-if="isMenuOpen">
    <SideMenu :isMenuOpen = "isMenuOpen"/>
  </div>
</template>

<script setup lang="ts">
    const {recipesInCart} = useCartStore()
    const isMenuOpen = ref(false)

    const showMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

</script>

<style>

  .mini-cart {
      display: inline-block;
      position: relative;
  }

  .cart-total{
    display: inline-block;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
</style>
