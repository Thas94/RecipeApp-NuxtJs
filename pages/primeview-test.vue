<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { signIn, status, lastRefreshedAt, signOut, data } = useAuth()

</script>

<style scoped>

</style>