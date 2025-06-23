import { defineStore } from "pinia";
import {type RecipeResponse} from "../types/types";

export const useMovieStore = defineStore('movieStore', () => {

    const movieList = ref([{}]) as Ref<RecipeResponse[]>;
    const moviesLength = ref(0)

    const getMovies = async () => {
        debugger
        const results = await $fetch('/api/movies/allmovies')
        movieList.value = <RecipeResponse[]>results
        //@ts-expect-error
        moviesLength.value = movieList.value.recipes.length
    }

    return {
        moviesLength,
        movieList,
        getMovies
    }
})