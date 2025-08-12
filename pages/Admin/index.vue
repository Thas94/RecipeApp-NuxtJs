<template>
</template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: 'admin',
    middleware: ['admin']
  })
  const {NavigateToPage} = useAdminMenuStore()

  onMounted(() => {
    NavigateToPage({
            label: "Dashboard",
            to: "/admin/dashboard",
            active: true,
            icon: 'pi pi-home'
        })
  })
  </script>
  