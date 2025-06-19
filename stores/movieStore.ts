import { defineStore } from "pinia";
import {type RecipeResponse} from "../types/types";

export const useMovieStore = defineStore('movieStore', () => {

    const movieList = ref([{}])
    const getMovies = async () => {
        const results = await $fetch('/api/movies/allmovies')
        movieList.value = <any>results
    }

    return {
        movieList,
        getMovies
    }
})