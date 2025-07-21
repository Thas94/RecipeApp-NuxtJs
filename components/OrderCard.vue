<template>
    <div class="flex items-center justify-between mb-2">
        <h2 class="text-lg font-semibold">Order #{{ order.orderId }}</h2>
        <span :class="order.orderStatus === 'Order Placed' ? 'text-yellow-400' :
            order.orderStatus === 'Payment Processing' ? 'text-yellow-600' :
                order.orderStatus === 'Order Received' ? 'text-yellow-800' :
                    order.orderStatus === 'Picking and Packing' ? 'text-yellow-950' :
                        order.orderStatus === 'Shipping' ? 'text-green-200' :
                            order.orderStatus === 'Order Shipped' ? 'text-green-400' :
                                'text-green-600'" class="font-medium cursor-pointer" @click="isVisible = true">
            {{ order.orderStatus }}
        </span>
    </div>
    <p class="text-sm text-gray-600">Placed on: {{ order.createdDate }}</p>
    <ul class="mt-2 text-sm text-gray-700 list-disc list-inside">
        <li v-for="item in order.orderDetailsObj">{{ item.name }} - {{ item.price }}</li>
    </ul>
    <Dialog v-model:visible="isVisible" modal header='Order Tracking' :style="{ width: '70rem', height: '20rem' }">
        <span class="block text-surface-500">Order #{{ order.orderId }}</span>
        <Timeline :value="trackingStatuses" layout="horizontal">
            <template #marker="slotProps">
                <span class="z-10 flex items-center justify-center w-2 h-2 text-white rounded-full shadow-sm"
                    :style="{ backgroundColor: slotProps.item.completed ? 'green' : 'blue' }">
                </span>
            </template>
            <template #content="slotProps">
                {{ slotProps.item.label }}
            </template>
        </Timeline>
    </Dialog>
</template>

<script setup lang="ts">
import { type OrderDetails } from '~/models/orderDetails';
// const props = defineProps<{ order: OrderDetails }>()
const statusIndex = ref(0)
const isVisible = ref(false);
const { orders } = useOrderStore()
const attrs = useAttrs()
const order = computed(() => orders[Number(attrs['data-index'])])

const trackingStatuses = ref([
    { label: 'Order Placed', completed: false },
    { label: 'Payment Processing', completed: false },
    { label: 'Order Received', completed: false },
    { label: 'Picking and Packing', completed: false },
    { label: 'Shipping', completed: false },
    { label: 'Order Shipped', completed: false },
    { label: 'Order Delivered', completed: false }
])

onMounted(() => {
    statusIndex.value = trackingStatuses.value.findIndex(x => x.label === order.value.orderStatus)
    for (var i = 0; i < trackingStatuses.value.length; i++) {
        if (i <= statusIndex.value)
            trackingStatuses.value[i].completed = true
    }
})

</script>

<style scoped></style>