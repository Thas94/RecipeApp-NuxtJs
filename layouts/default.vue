<template>
    <div>
        <Toast />
        <SessionWarning />
        <BaseNavigation />
        <slot /> 
        <!-- can use nuxt page -->
    </div>
</template>

<script setup lang="ts">
useSessionTracking()
useSessionTimeout()
</script>
