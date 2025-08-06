<template>
    <div>
        <Toast />
        <SessionWarning />
        <BaseNavigation />
        <NuxtPage /> 
        <!-- can use nuxt page -->
    </div>
</template>

<script setup lang="ts">
useSessionTracking()
useValidateSession()
</script>
