<template>
  <header class="py-4 border-b">
    <nav class="container flex items-center">
      <NuxtLink to="/" class="flex items-center gap-1">
        <NuxtImg width="56px" densities="1px" format="webp" src="/icon-green.png" alt="" />
        <span class="text-3xl font-bold">Nuxt Recipes</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li class="cursor-pointer" v-if="!isSignedIn" @click="isLoginVisible = true">
          Login
        </li>
        <!-- <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/primeview-test">Primeview</NuxtLink>
        </li> -->
        <li>
        </li>
      </ul>
      <div class="flex mini-cart">
        <div class="cart-total">
          <button
            class="flex p-2 text-xl text-center text-black rounded-md bg-dodgeroll-gold"
            @click="showMenu">
            <Icon name="mdi:cart-outline" size="20px" />
            <div class="relative">{{ recipesInCart.length }}</div>
          </button>
        </div>
      </div>
      <div class="flex flex-col p-0 m-0 list-none" v-if="isSignedIn">
        <div class="flex items-center gap-2 px-2 py-3 cursor-pointer rounded-border" @click="openPopover">
          <img :src="`${(data?.user as any)?.avatar}`" style="width: 32px" />
          <div>
            <span class="font-medium">{{ (data?.user as any)?.fullName }}</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div v-if="isMenuOpen">
    <SideMenu :isMenuOpen="isMenuOpen" />
  </div>
  <Dialog v-model:visible="isLoginVisible" modal header='Welcome Back' :style="{ width: '25rem' }">
    <form @submit.prevent="UserLogin" class="space-y-4 md:space-y-6" action="#">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input v-model="form.email" type="email" name="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="">
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input v-model="form.password" type="password" name="password" id="password" placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
      <button v-if="!isLoading" type="submit"
        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{{
          !isLoading ? "Login" : "Logging In..." }}</button>
      <button v-if="isLoading" disabled type="button"
        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        <svg aria-hidden="true" role="status" class="inline w-4 h-4 text-white me-3 animate-spin" viewBox="0 0 100 101"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor" />
        </svg>
        Logging in...
      </button>
    </form>
  </Dialog>
  <Dialog v-model:visible="isLogoutVisible" modal header='Ready to sign out?' :style="{ width: '25rem' }">
    <span class="block mb-8 text-surface-500 dark:text-surface-400">Are you sure you want to sign
      out of your account now?</span>
    <div class="flex justify-end gap-2">
      <Button type="button" label="No" severity="secondary" @click="isLogoutVisible = false"></Button>
      <Button type="button" label="Yes" @click="userSignOut"></Button>
    </div>
  </Dialog>
  <Popover ref="popover">
    <div class="flex flex-col gap-4">
      <div>
        <ul class="flex flex-col p-0 m-0 list-none">
          <li 
            class="flex items-center gap-2 px-2 py-3 cursor-pointer hover:bg-emphasis rounded-border" >
            Account Settings
          </li>
          <li 
            class="flex items-center gap-2 px-2 py-3 cursor-pointer hover:bg-emphasis rounded-border" >
            Orders
          </li>
          <li 
            class="flex items-center gap-2 px-2 py-3 cursor-pointer hover:bg-emphasis rounded-border" @click="isLogoutVisible = true">
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  </Popover>
</template>

<script setup lang="ts">
const form = ref({
  email: '',
  password: ''
})
const { signIn, status, lastRefreshedAt, signOut, data } = useAuth()
const isLoading = ref(false)
const isLoginVisible = ref(false);
const isLogoutVisible = ref(false);
const { recipesInCart } = storeToRefs(useCartStore())
const isMenuOpen = ref(false)
const isSignedIn = ref(false)
const popover = ref();

onMounted(() => {
  watchEffect(() => {
    if (status.value == 'authenticated') {
      isLoading.value = false
      isSignedIn.value = true
      //navigateTo('/') 
    }
  })
})

const showMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

async function UserLogin() {
  isLoading.value = true
  await signIn('credentials', form.value)
}

async function userSignOut() {
  recipesInCart.value.length = 0 
  await signOut()
}

//@ts-expect-error
const openPopover = (event) => {
  popover.value.toggle(event);
}

</script>

<style>
.mini-cart {
  position: relative;
}

.cart-total {
  display: inline-block;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
</style>
