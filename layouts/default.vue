<template>
    <div>
        <Toast />
        <SessionWarning />
        <BaseNavigation />
        <NuxtPage /> 
    </div>
</template>

<script setup lang="ts">
useSessionTracking()
useValidateSession()
</script>
