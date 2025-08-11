<template>
    <div class="">
        <h1 class="text-3xl text-white">Overview</h1>
        <div class="flex w-96">
            <div class="my-5 border m-1 p-3 bg-orange-50 text-black">
                <p class="text-[12px]">Total Views</p>
                <div>
                    <div class="flex mt-5">
                        <div class="mr-40">
                            <p class="font-extrabold text-lg">246K</p>
                            <p class="text-red-500 text-[10px] font-extrabold pi pi-arrow-down">18.5%</p>
                        </div>
                        <div class="ml-auto ">
                            <div class="flex items-end space-x-1 h-10 p-4 mt-5">
                                <div class="flex flex-col items-center">
                                    <div class="bg-blue-300 w-2 h-5"></div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="bg-blue-300 w-2 h-3"></div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="bg-blue-300 w-2 h-9"></div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="bg-blue-300 w-2 h-4"></div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="bg-blue-300 w-2 h-8"></div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="bg-blue-300 w-2 h-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: ['admin']
})
</script>

<style scoped></style>