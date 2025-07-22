<template>
    <NuxtLink :to="to"
        class="self-start px-4 py-2 text-base text-white rounded-md cursor-pointer bg-dodgeroll-gold lg:text-lg">
        {{ label }}
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    label?: string;
    to?: string;
}>();
</script>
