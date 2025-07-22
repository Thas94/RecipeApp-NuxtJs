
<template>
  <div class="card">
      <DataView :value="products" :layout="layout">
          <template #header>
              <div class="flex justify-end">
                  <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                      <template #option="{ option }">
                          <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                      </template>
                  </SelectButton>
              </div>
          </template>

          <template #list>
              <div class="flex flex-col">
                  <div v-for="i in 6" :key="i">
                      <div class="flex flex-col gap-6 p-6 xl:flex-row xl:items-start" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                          <Skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                          <div class="flex flex-col items-center justify-between flex-1 gap-6 sm:flex-row xl:items-start">
                              <div class="flex flex-col items-center gap-4 sm:items-start">
                                  <Skeleton width="8rem" height="2rem" />
                                  <Skeleton width="6rem" height="1rem" />

                                  <div class="flex items-center gap-4">
                                      <Skeleton width="6rem" height="1rem" />
                                      <Skeleton width="3rem" height="1rem" />
                                  </div>
                              </div>
                              <div class="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                                  <Skeleton width="4rem" height="2rem" />
                                  <Skeleton size="3rem" shape="circle" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </template>

          <template #grid>
              <div class="grid grid-cols-12 gap-4">
                  <div v-for="i in 6" :key="i" class="col-span-12 p-2 sm:col-span-6 xl:col-span-4">
                      <div class="p-6 border rounded border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900">
                          <div class="flex flex-wrap items-center justify-between gap-2">
                              <Skeleton width="6rem" height="2rem" />
                              <Skeleton width="3rem" height="1rem" />
                          </div>
                          <div class="flex flex-col items-center gap-4 py-8">
                              <Skeleton width="75%" height="10rem" />
                              <Skeleton width="8rem" height="2rem" />
                              <Skeleton width="6rem" height="1rem" />
                          </div>
                          <div class="flex items-center justify-between">
                              <Skeleton width="4rem" height="2rem" />
                              <Skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                          </div>
                      </div>
                  </div>
              </div>
          </template>
      </DataView>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 6)));
});

const products = ref();
const layout = ref('grid');
const options = ref(['list', 'grid']);

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
      case 'INSTOCK':
          return 'success';

      case 'LOWSTOCK':
          return 'warn';

      case 'OUTOFSTOCK':
          return 'danger';

      default:
          return null;
  }
}

</script>
