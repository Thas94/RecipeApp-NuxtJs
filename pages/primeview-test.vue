<template>
  <div>
      <button @click="() => userSignOut()">
  Signout 
</button>
      <h1>Profile</h1>
      <pre>{{ data }}</pre> <p>{{ status }}</p>
      <p>==============================</p>
      last refreshed : {{ lastRefreshedAt }}
  </div>
</template>

<script setup lang="ts">
  const {
  status,
  data,
  lastRefreshedAt,
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  signOut
  } = useAuth()
  //const data = await $fetch('/api/userSession')

  async function userSignOut() {
      await signOut()
  }

   definePageMeta({
       middleware: ["auth"]
   })

</script>

<style lang="scss" scoped>

</style>