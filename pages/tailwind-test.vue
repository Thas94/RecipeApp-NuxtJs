<template>
<div class="flex min-h-screen">
  <!-- Sidebar -->
  <aside class="w-64 bg-gray-800 text-white hidden md:flex flex-col justify-between">
    <div>
      <div class="p-4 text-xl font-bold">MyApp</div>
      <nav class="px-4 space-y-2">
        <NuxtLink to="/admin/dashboard" class="block py-2 px-3 rounded hover:bg-gray-700">Dashboard</NuxtLink>
        <NuxtLink to="/admin/inbox" class="block py-2 px-3 rounded hover:bg-gray-700">Inbox</NuxtLink>
        <NuxtLink to="/admin/products" class="block py-2 px-3 rounded hover:bg-gray-700">Products</NuxtLink>
      </nav>
    </div>
    <!-- Footer -->
    <div class="p-4 text-sm text-gray-400 border-t border-gray-700">
      © 2025 MyApp. All rights reserved.
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 bg-gray-100 p-6">
    <h1 class="text-2xl font-semibold mb-4">Welcome to MyApp</h1>
    <NuxtPage />
  </main>
</div>

</template>

<script setup lang="ts">

</script>

<style scoped></style>