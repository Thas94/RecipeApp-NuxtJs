<template>
  <Loader v-if="loading" />
  <div v-else class="container flex flex-col max-w-screen-lg py-20">
    <!-- Header -->
    <div class="flex flex-col mb-6">
      <h2 class="mb-4 text-5xl font-semibold">{{ recipe?.name }}</h2>
      <div class="flex gap-4 mb-6 text-xl">
        <div class="flex items-center gap-1">
          <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
          <span>{{ recipe?.cookTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:fire" style="color: #f79f1a" />
          <span>{{ recipe?.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:star" style="color: #f79f1a" />
          <span>{{ recipe?.rating }} ({{ recipe?.reviewCount }})</span>
        </div>
      </div>
      <hr />
    </div>

    <!-- Image -->
    <NuxtImg :src="recipe?.image" densities="x1" sizes="xs:100vw sm:100vw md:100vw lg:100vw"
      class="w-full max-h-[500px] object-cover rounded-md shadow-sm mb-12" alt="" />

    <!-- Ingredients -->
    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-semibold">Ingredients</h2>
      <ul class="grid grid-cols-1 gap-2 text-lg md:grid-cols-2">
        <li v-for="ingredient in recipe?.ingredients">
          <label class="flex items-center gap-2">
            <input class="hidden peer" type="checkbox" />
            <div
              class="relative flex items-center justify-center w-6 h-6 border-2 rounded-full border-dodgeroll-gold peer-checked:after:absolute peer-checked:after:w-4 peer-checked:after:h-4 peer-checked:after:bg-dodgeroll-gold peer-checked:after:rounded-full">
            </div>
            <span class="peer-checked:line-through">
              {{ ingredient }}
            </span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Instructions -->
    <div>
      <h2 class="mb-4 text-3xl font-medium">Instructions</h2>
      <ul class="flex flex-col gap-4 text-lg">
        <li v-for="(instruction, index) in recipe?.instructions" class="flex gap-2">
          <span class="flex items-center justify-center text-sm text-white rounded-full bg-dodgeroll-gold w-7 h-7">
            {{ index + 1 }}
          </span>
          <span class="flex-1">{{ instruction }}</span>
        </li>
      </ul>
    </div>

    <Button
      class="self-center px-4 py-2 mt-5 text-base text-white rounded-md cursor-pointer bg-dodgeroll-gold lg:text-lg"
      @click="addRecipeToCart(recipe)" label="Add to cart"></Button>

  </div>
</template>

<script setup lang="ts">

import { type Recipe } from '~/models/recipeResponse';
const { id } = useRoute().params;
const loading = ref(true);
const { getRecipeById } = useRecipeStore()
const { recipe } = storeToRefs(useRecipeStore())
const { addToCart } = useCartStore()

onMounted(async () => {
  await getRecipeById(Number(id))
  setTimeout(() => {
    loading.value = false;
  }, 1600);
});

const addRecipeToCart = (recipe: Recipe) => {
  addToCart(recipe)
}

watch(() => recipe.value, (newVal) => {
  if (!newVal) return;

  useSeoMeta({
    title: recipe.value?.name,
    description: 'Recipes for you to cook',
    ogTitle: recipe.value?.name,
    ogDescription: 'Recipes for you to cook',
  })
})


</script>
