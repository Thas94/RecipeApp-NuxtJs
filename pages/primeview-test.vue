<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="store.increment">increment</button>
  </div>
</template>

<script setup lang="ts">
  const store = useCounterStore()
  const {count} = storeToRefs(store)
</script>

<style scoped>

</style>