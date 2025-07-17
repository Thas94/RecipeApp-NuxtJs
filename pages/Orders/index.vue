<template>
  <div class="max-w-4xl p-6 mx-auto">
    <h1 class="mb-6 text-2xl font-bold">My Orders</h1>
    <div class="space-y-4">
      <div v-for="order in orders" :key="order.orderId" class="p-4 bg-white border border-gray-200 rounded shadow">
        <OrderCard :order="order"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signIn, status, lastRefreshedAt, signOut, data } = useAuth()
const { GetOrdersByUserId } = useOrderStore()
const { orders } = storeToRefs(useOrderStore())

onMounted(async () => {
  //@ts-expect-error
  await GetOrdersByUserId(data.value?.user.userId)
});

</script>
