<!-- components/SessionWarning.vue -->
<template>
    <Dialog 
      v-model:visible="showSessionDialog" 
      header="Inactivity Detected" 
    >
      <p>You’ve been inactive for a while. You’ll be signed out soon unless you continue.</p>
      <Button label="Stay Logged In" @click="stayLoggedIn" />
    </Dialog>
  </template>
  
  <script setup>
  const { updateActivity} = useSessionStore()
  const { showSessionDialog } = storeToRefs(useSessionStore())
  function stayLoggedIn() {
    updateActivity()
  }
  </script>
  