<template>
  <div>
    <span ref="trigger" @click="togglePopover" class="cursor-pointer text-blue-600 underline">
      {{ selectedText }}
    </span>

    <Popover ref="popoverRef" :target="triggerEl">
      <div class="p-4">
        <p>Popover aligned with selected text.</p>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedText = ref('Click me')
const popoverRef = ref(null)
const triggerEl = ref(null)

function togglePopover(event) {
  triggerEl.value = popoverRef.value.$el.previousElementSibling
  popoverRef.value.toggle()
}
</script>
