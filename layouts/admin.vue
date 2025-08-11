<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 text-white hidden md:flex flex-col justify-between bg-orange-300">
      <div>
        <div class="p-4 text-xl font-bold py-[30px] bg-orange-500">Nuxt Recipes</div>
        <nav class="px-4 space-y-2 py-[30px]">
          <ul>
            <li v-for="(m, i) in menuList" @click="NavigateToPage(m)"
            :to="m.to" class="block py-2 px-3 rounded hover:bg-orange-200 cursor-pointer"
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

    <!-- Main Content -->
    <main class="flex-1 bg-gray-100">
      <AdminBaseNavigation />
      <NuxtPage />
    </main>
  </div>

</template>

<script setup lang="ts">
import { AdminMenuService } from '../service/menu-service/admin/AdminMenuService'
const {GetMenuList, NavigateToPage} = useAdminMenuStore()
const {menuList} = storeToRefs(useAdminMenuStore())
import { type AdminMenuModel } from '~/types/admin/adminMenuModel' 

onMounted(() => {
  GetMenuList()
})


</script>

<style scoped></style>