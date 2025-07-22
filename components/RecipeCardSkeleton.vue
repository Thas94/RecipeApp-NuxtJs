<template>
    <div class="flex flex-col rounded-md shadow">
        <Skeleton width="100%" height="25rem" class="rounded-t-md" />
        <div class="flex flex-col flex-1 px-4 py-6">
            <Skeleton width="100%" height="3rem" class="mb-2" />
            <div class="flex w-full gap-8 mt-auto mb-4 text-lg font-normal bg-white/80 lg:text-xl">
                <div class="flex items-center gap-1">
                    <Skeleton width="4rem" height="2rem" />

                </div>
                <div class="flex items-center gap-1">
                    <Skeleton width="4rem" height="2rem" />
                </div>
                <div class="flex items-center gap-1">
                    <Skeleton width="4rem" height="2rem" />
                </div>
            </div>
            <Skeleton width="4rem" height="2rem" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>