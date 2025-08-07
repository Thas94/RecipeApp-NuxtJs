<template>
    <div class="text-center mt-20">
        <h1 class="text-3xl font-bold text-red-600">Access Denied</h1>
        <p v-if="data?.user?.roleName === 'Admin'">
            Admins are not allowed to view user-only pages.
        </p>
        <p v-else-if="data?.user?.roleName === 'RegularUser'">
            Users are not allowed to view admin-only pages.
        </p>
    </div>
    <div class="flex justify-center mt-6">
        <Button @click="goBack()" class="px-4 py-2 text-white bg-black border-black rounded-md hover:bg-red-600 cursor-pointer"
            >Go Back</Button>
    </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue';


const { data } = useAuth()
const router = useRouter()

definePageMeta({
    middleware: 'auth',
    layout: false,
})

const goBack = () =>{
    router.back()
}
</script>
