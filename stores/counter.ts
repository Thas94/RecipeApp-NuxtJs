import { on } from "@primeuix/themes/aura/floatlabel";
import { defineStore } from "pinia";

export const useCounterStore = defineStore('counterStore', () => {

    const count = ref(0)

    onMounted(() => {
        const perstData = Number(localStorage.getItem("counter"))
        count.value = perstData

        watch(count, (val) => {
            localStorage.setItem("counter", val.toString())
        }, {deep: true})
    })


    const doubleCount = computed(() => count.value * 2)
    function increment(){
        count.value++
    }

    return {count, doubleCount, increment}
})