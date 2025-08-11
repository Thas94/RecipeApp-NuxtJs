<template>
    <div>
      <h1 class="text-2xl font-bold">Admin Dashboard</h1>
      <button @click="signOut">Log out</button>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'admin',
    middleware: ['admin']
  })
  const {signOut} = useAuth()
  </script>
  