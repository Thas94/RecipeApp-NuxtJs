<template>
    <main>
        <section class="bg-[#F79F1A]">
        <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
            <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
                Master the Kitchen with Ease: Unleash Your Inner Chef Today!
            </h1>
            <p class="text-xl lg:text-2xl mb-8 text-balance">
                Discover recipes helping you to find the easiest way to cook.
            </p>
            <button     
                class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer"
            >
                Browse Recipes
            </button>
            </div>
            <div class="flex-1 order-1 lg:order-2"> 
            <NuxtImg sizes="xs:100vw sm:667px" format="webp" src="/nuxt-course-hero.png" densities="x1" alt="" />
            </div>
        </div>
        </section> 
        <section class="py-20 container">
        <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
        <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
        <div v-if="loading" class="loader">
            <Icon name="svg-spinners:8-dots-rotate" size="64" />
        </div>
        <div v-else-if="moviesLength > 1">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                <RecipeCard v-for="recipe in displayedMovies" :recipe="recipe" />
            </div>
            <div class="flex justify-center mt-6"  v-if="itemsPerPage <= (movies as any).limit">
                <button class="bg-black hover:bg-gray-800 px-4 py-2 rounded-md text-white" @click="loadMoreMovies">Load More</button>
            </div>
        </div>
        <p v-else class="text-xl">Oops, no movies found.</p>
    </section>       
     </main>
</template>

<script setup lang="ts">

    //const error = ref(false)

    const movieStore = useMovieStore()
    movieStore.getMovies()
    const { movieList, moviesLength } = storeToRefs(movieStore)

    const loading = ref(true);
    onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 1600);
    });

    //const movieStore = useMovieStore()
    // const { movieList } = storeToRefs(movieStore)
    // const { getMovies } = movieStore
    
    const currentPage = ref(1);
    const itemsPerPage = ref(12);
    import {type RecipeResponse} from "../types/types";
    const {data: movies, error} = await useFetch<RecipeResponse>("https://dummyjson.com/recipes")

    const displayedMovies = computed(() => {
        debugger
        const endIndex = itemsPerPage.value;
        return Array.isArray(movies.value?.recipes)
            ? movies.value?.recipes.slice(0, endIndex)
            : [];
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const loadMoreMovies = () => {
        itemsPerPage.value = itemsPerPage.value * 2;
    }

    onMounted(() => {
        scrollToTop();
    });
    
        // definePageMeta({
        //     layout: "login"
        // });

    
    
    useSeoMeta({
  title: "Nuxtcipes",
  description: "Recipes for you to cook!",
  ogTitle: "Nuxtcipes",
  ogDescription: "Recipes for you to cook!",
  ogImage: "/nuxt-course-hero.png",
  ogUrl: `http:localhost:3001`,
  twitterTitle: "Nuxtcipes",
  twitterDescription: "Recipes for you to cook!",
  twitterImage: "/nuxt-course-hero.png",
  twitterCard: "summary",
});
</script>

<style>
    .loader {
        text-align: center;
    }
</style>
