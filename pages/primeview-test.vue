
<template>
    <h1>Primeview Testing</h1>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + (item + 1));
}
</script>
