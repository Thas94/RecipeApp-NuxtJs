<template>
    <section class="flex min-h-screen flex-col items-center justify-center">
      <h1 class="mb-2 text-9xl font-bold">
        {{ error?.statusCode }}
      </h1>
      <p class="mb-10 text-xl sm:text-3xl">{{ error?.statusMessage }}</p>
      <NuxtLink
        to="/"
        class="px-4 py-2 text-white bg-dodgeroll-gold rounded-md text-lg cursor-pointer"
      >
        Go homez
      </NuxtLink>
    </section>
  </template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

