
<template>
  <div class="flex justify-center card">
      <Button type="button" :label="selectedMember ? selectedMember.name : 'Select Member'" @click="toggle" class="min-w-48" />

      <Popover ref="op">
          <div class="flex flex-col gap-4">
              <div>
                  <span class="block mb-2 font-medium">Team Members</span>
                  <ul class="flex flex-col p-0 m-0 list-none">
                      <li v-for="member in members" :key="member.name" class="flex items-center gap-2 px-2 py-3 cursor-pointer hover:bg-emphasis rounded-border" @click="selectMember(member)">
                          <img :src="`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`" style="width: 32px" />
                          <div>
                              <span class="font-medium">{{ member.name }}</span>
                              <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </Popover>
  </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref();
const selectedMember = ref(null);
const members = ref([
  { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
  { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

const toggle = (event) => {
  op.value.toggle(event);
}

const selectMember = (member) => {
  selectedMember.value = member;
  op.value.hide();
}
</script>
