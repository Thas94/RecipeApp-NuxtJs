import { defineStore } from "pinia";
import {type OrderDetails } from '~/models/orderDetails';

export const useOrderStore = defineStore('orderStore', () => {

    const orders = ref([{}]) as Ref<OrderDetails[]>;

    const GetOrdersByUserId = async (userId: any) =>  {
        const response = await $fetch(`/api/orders/${userId}`)
        orders.value = <OrderDetails[]>response
    }

    return {
        orders,
        GetOrdersByUserId
    }
})