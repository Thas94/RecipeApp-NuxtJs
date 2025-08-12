<template>
    <div class="">
        <DashboardWidgets />
        <DashbaordChart />
    </div>
</template>

<script setup lang="ts">
import DashbaordChart from '~/components/Admin/Dashboard/DashbaordChart.vue';
import DashboardWidgets from '~/components/Admin/Dashboard/DashboardWidgets.vue';
import { AdminMenuService } from '~/service/menu-service/admin/AdminMenuService';
import { type AdminDashboardModel } from '~/types/admin/adminMenuModel';
definePageMeta({
    layout: 'admin',
    middleware: ['admin']
})
const dashboardItems = ref({}) as Ref<AdminDashboardModel>
onMounted(() => {
    dashboardItems.value = AdminMenuService.getDashboardItems()
})
</script>

<style scoped></style>