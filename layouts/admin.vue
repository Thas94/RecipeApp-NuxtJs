<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 text-white hidden lg:flex flex-col justify-between bg-orange-300">
      <div>
        <div class="p-4 text-xl font-bold py-[30px] bg-orange-500 header-text">Nuxt Recipes</div>
        <nav class="px-4 space-y-2 py-[30px]">
          <ul>
            <li v-for="(m, i) in menuList" @click="NavigateToPage(m)" :to="m.to"
              class="block py-2 px-3 rounded hover:bg-orange-200 cursor-pointer"
              :class="m.active ? 'bg-orange-500' : ''">
              <span :class="m.icon"></span>
              {{ m.label }}
            </li>
          </ul>
        </nav>
      </div>
      <!-- Footer -->
      <!-- <div class="p-4 text-sm text-gray-400 border-t border-gray-700">
          © 2025 MyApp. All rights reserved.
        </div> -->
    </aside>
    <div class="lg:hidden justify-between bg-orange-300 text-white w-15">
      <div class="p-4 text-xl font-bold py-[37px] bg-orange-500">
        <span class="pi pi-bars ml-2"></span>
      </div>
      <nav class="px-4 space-y-2 py-[30px]">
        <ul>
          <li v-for="(m, i) in menuList" @click="NavigateToPage(m)" :to="m.to"
            class="block py-2 px-3 rounded hover:bg-orange-200 cursor-pointer" :class="m.active ? 'bg-orange-500' : ''">
            <span :class="m.icon"></span>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <main class="flex-1 bg-gray-100">
      <AdminBaseNavigation />
      <NuxtPage class="py-10 w-[66%] ml-52  max-sm:ml-10 max-md:ml-10"/>
    </main>
  </div>

</template>

<script setup lang="ts">
const { GetMenuList, NavigateToPage } = useAdminMenuStore()
const { menuList } = storeToRefs(useAdminMenuStore())

onMounted(() => {
  GetMenuList()
})


</script>

<style scoped></style>