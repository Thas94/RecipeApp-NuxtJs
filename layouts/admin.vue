<template>
    <div class="flex min-h-screen bg-black">
        <aside class="w-64 bg-red-900 text-white p-4">Admin Sidebar</aside>
        <div class="flex flex-col flex-grow">
            <header class="bg-gray-700 text-white p-4">Admin Header</header>
            <main class="flex-grow p-6 bg-gray-100">
                <slot />
            </main>
            <footer class="bg-gray-800 text-gray-300 p-4 text-center">Admin Footer</footer>
        </div>
    </div>
</template>


<script setup lang="ts">

</script>

<style scoped></style>