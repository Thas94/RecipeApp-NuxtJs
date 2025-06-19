<template>
    <div  class="flex flex-col shadow rounded-md">
            <NuxtImg :src="recipe.image" sizes="xs:100vw sm:50vw lg:400px" format="webp" densities="x1" alt="" class="rounded-t-md" />
            <div class="flex flex-col py-6 px-4 flex-1">
                <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
                <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
                <div class="flex items-center gap-1">
                    <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
                    <span>{{ recipe.cookTimeMinutes }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:fire" style="color: #f79f1a" />
                    <span>{{ recipe.caloriesPerServing }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:star" style="color: #f79f1a" />
                    <span>{{ recipe.rating }} {{ recipe.reviewCount }}</span>
                </div>
                </div>
                <Button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lg cursor-pointer" @click="visible = true" label="View"></Button>
            </div>
    </div>
    <Dialog v-model:visible="visible" modal :header=recipe.name :style="{ width: '25rem' }">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">View Recipe?</span>
            <div class="flex justify-end gap-2">
                <Button type="button" label="No" severity="secondary" @click="visible = false"></Button>
                <BaseBtn type="button" :to="`/recipes/${recipe.id}`" label="Yes" @click="visible = false" />
            </div>
        </Dialog>
</template>

<script setup lang="ts">
    const visible = ref(false);

    import { type Recipe } from '~/types/types';
    defineProps<{
        recipe: Recipe; 
    }>();
</script>
