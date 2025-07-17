<template>
  <div class="max-w-4xl p-6 mx-auto">
    <h1 class="mb-6 text-2xl font-bold">My Orders</h1>
    <div class="space-y-4">
      <Loader v-if="loading" />
      <div v-else-if="orders.length > 0">
        <div v-for="order in orders" :key="order.orderId" class="p-4 bg-white border border-gray-200 rounded shadow">
          <OrderCard :order="order" />
        </div>
      </div>
      <p v-else class="text-xl">Oops, no orders found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
const { signIn, status, lastRefreshedAt, signOut, data } = useAuth()
const { GetOrdersByUserId } = useOrderStore()
const { orders } = storeToRefs(useOrderStore())
const loading = ref(true);

onMounted(async () => {
  setTimeout(() => {
    loading.value = false;
  }, 1600);
  //@ts-expect-error
  await GetOrdersByUserId(data.value?.user.userId)
});

</script>
