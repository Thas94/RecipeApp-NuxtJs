<template>
  <header class="py-4 border-b max-sm:max-md:py-[19px]">
    <nav class=" px-2 py-3" >
      <div class="flex mr-10 cursor-pointer">
        <div class="flex ml-auto items-center"  @click="openPopover">
          <span class="font-medium text-lg max-sm:text-sm max-md:text-sm">{{ data?.user.fullName }}</span>
          <img class="rounded-full w-[32px] max-sm:w-[25px] max-md:w-[25]" :src="`${data?.user.avatar}`"/>
        </div>
      </div>
    </nav>
  </header>
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
          <li class="flex items-center gap-2 px-2 py-3 cursor-pointer hover:bg-emphasis rounded-border">
            Account Settings
          </li>
          <li class="flex items-center gap-2 px-2 py-3 cursor-pointer hover:bg-emphasis rounded-border">
            <NuxtLink to="/orders/">Orders</NuxtLink>
          </li>
          <li class="flex items-center gap-2 px-2 py-3 cursor-pointer hover:bg-emphasis rounded-border"
            @click="isLogoutVisible = true">
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  </Popover>
</template>

<script setup lang="ts">

const { signIn, status, lastRefreshedAt, signOut, data } = useAuth()
const isLogoutVisible = ref(false);
const popover = ref();

async function userSignOut() {
  await signOut()
}

//@ts-expect-error
const openPopover = (event) => {
  popover.value.toggle(event);
}

</script>

<style>
/* .mini-cart {
  position: relative;
}

.cart-total {
  display: inline-block;
  justify-content: center;
  overflow: hidden;
  position: relative;
} */
</style>
