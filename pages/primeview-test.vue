<template>
  <div class="p-inputgroup">
    <AutoComplete
      v-model="selectedItem"
      :suggestions="filteredItems"
      complete-method="searchItem"
      field="label"
      placeholder="Search"
    />
    <Button icon="pi pi-search" @click="triggerSearch" />
    <Button icon="pi pi-times" severity="secondary" @click="clearSelection" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AutoComplete from 'primevue/autocomplete'
import Button from 'primevue/button'

const selectedItem = ref(null)
const filteredItems = ref([])

const searchItem = (event) => {
  // Simulate an async search
  const query = event.query.toLowerCase()
  filteredItems.value = allItems.filter(item =>
    item.label.toLowerCase().includes(query)
  )
}

const triggerSearch = () => {
  if (selectedItem.value) {
    alert(`Searching for: ${selectedItem.value.label}`)
  }
}

const clearSelection = () => {
  selectedItem.value = null
  filteredItems.value = []
}

const allItems = [
  { label: 'Apple' }, { label: 'Banana' }, { label: 'Mango' }, { label: 'Orange' }
]
</script>
