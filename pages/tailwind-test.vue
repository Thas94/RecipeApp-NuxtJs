<template>
  <ul class="space-y-2">
    <li>
      <NuxtLink to="/admin/dashboard"
        class="block px-4 py-2 rounded"
        :class="$route.path === '/admin/dashboard' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'">
        Dashboard
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/admin/inbox"
        class="block px-4 py-2 rounded"
        :class="$route.path === '/admin/inbox' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'">
        Settings
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped></style>