<template>
    <main>
        <section class="bg-[#F79F1A]">
            <div class="container flex flex-col items-center py-20 lg:flex-row">
                <div class="flex-1 order-2 text-center lg:order-1 lg:text-left">
                    <h1 class="mb-6 text-4xl font-extrabold lg:text-6xl text-balance">
                        Master the Kitchen with Ease: Unleash Your Inner Chef Today!
                    </h1>
                    <p class="mb-8 text-xl lg:text-2xl text-balance">
                        Discover recipes helping you to find the easiest way to cook.
                    </p>
                    <div class="px-4">
                        <p class="self-start py-2 text-lg text-white rounded-md cursor-pointer bg-dodgeroll-gold">
                            Search Recipes
                        </p>
                        <div class="p-inputgroup">
                            <AutoComplete v-model="selectedRecipe" optionLabel="name" :suggestions="filteredRecipe"
                                @complete="searchRecipe" />
                            <Button @click="submitSearch">
                                <Icon name="mdi:magnify" size="30px" />
                            </Button>
                            <Button @click="clearSearch">
                                <Icon name="mdi:window-close" size="30px" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="order-1">
                    <NuxtImg sizes="xs:100vw sm:667px" format="webp" src="/nuxt-course-hero.png" densities="x1"
                        alt="" />
                </div>
            </div>
        </section>
        <section class="container py-20">
            <h2 class="mb-2 text-3xl lg:text-5xl">Discover, Create, Share</h2>
            <p class="mb-8 text-lg lg:text-xl">Check out our most popular recipes!</p>
            <div v-if="loading">
                <DataView :value="[{
                    id: '1',
                }]" layout="grid">
                    <template #grid>
                        <div class="grid lg:grid-cols-3 gap-x-4 gap-y-8">
                            <div v-for="i in 12" :key="i">
                                <RecipeCardSkeleton />
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
            <div v-else-if="recipeList.recipes.length > 1">
                <DataView :value="displayedRecipes" layout="grid">
                    <template #grid="slotProps">
                        <div class="grid lg:grid-cols-3 gap-x-4 gap-y-8">
                            <RecipeCard v-for="(recipe, index) in slotProps.items" :key="index" :data-index="index" />
                        </div>
                    </template>
                </DataView>
                <div class="flex justify-center mt-6" v-if="itemsPerPage <= recipeList.limit && !isSearched">
                    <Button class="px-4 py-2 text-white bg-black border-black rounded-md hover:bg-gray-800"
                        @click="loadMoreRecipes">Load
                        More</Button>
                </div>
            </div>
            <p v-else class="text-xl">Oops, no recipes found.</p>
        </section>
    </main>
</template>

<script setup lang="ts">

import {type Recipe, type RecipeResponse} from "../models/recipeResponse";
const { getRecipes } = useRecipeStore()
const { recipeList } = storeToRefs(useRecipeStore())
const itemsPerPage = ref(12)
const loading = ref(true)
const isSearched = ref(false)
const allRecipes = ref([{}]) as Ref<Recipe[]>
const selectedRecipe = ref({}) as Ref<Recipe>
const filteredRecipe = ref([{}])

onMounted(async () => {

    await getRecipes().then(() => {loading.value = false;})
    allRecipes.value = recipeList.value?.recipes
    //scrollToTop();
});

const displayedRecipes = computed(() => {
    const endIndex = itemsPerPage.value;
    return Array.isArray(allRecipes.value)
        ? allRecipes.value.slice(0, endIndex)
        : [];
});

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const loadMoreRecipes = () => {
    itemsPerPage.value = itemsPerPage.value * 2;
}

const searchRecipe = (event: any) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredRecipe.value = [...allRecipes.value];
        } else {
            filteredRecipe.value = allRecipes.value?.filter((x) => {
                return x.name.toLowerCase().includes(event.query.toLowerCase());
            });
        }
    }, 250);
}

const submitSearch = () => {
    isSearched.value = true
    allRecipes.value = allRecipes.value.filter((x) => x.id === selectedRecipe.value.id)
}

const clearSearch = () => {
    isSearched.value = false
    selectedRecipe.value = {} as Recipe
    allRecipes.value = recipeList.value?.recipes
}

useSeoMeta({
    title: "Nuxtcipes",
    description: "Recipes for you to cook!",
    ogTitle: "Nuxtcipes",
    ogDescription: "Recipes for you to cook!",
});
</script>

<style scoped>
</style>
