<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            PrimeVue Toast Composable Demo
          </h1>
          <p class="text-lg text-gray-600">
            Demonstrate toast notifications using the useToast composable
          </p>
        </div>
  
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Basic Toast Actions -->
            <div class="space-y-4">
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">Basic Toasts</h2>
              
              <Button 
                label="Show Success" 
                icon="pi pi-check" 
                severity="success"
                @click="handleSuccess"
                class="w-full"
              />
              
              <Button 
                label="Show Error" 
                icon="pi pi-times" 
                severity="danger"
                @click="handleError"
                class="w-full"
              />
              
              <Button 
                label="Show Info" 
                icon="pi pi-info-circle" 
                severity="info"
                @click="handleInfo"
                class="w-full"
              />
              
              <Button 
                label="Show Warning" 
                icon="pi pi-exclamation-triangle" 
                severity="warn"
                @click="handleWarning"
                class="w-full"
              />
            </div>
  
            <!-- Advanced Toast Actions -->
            <div class="space-y-4">
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">Advanced Options</h2>
              
              <Button 
                label="Custom Success" 
                icon="pi pi-star" 
                severity="success"
                outlined
                @click="handleCustomSuccess"
                class="w-full"
              />
              
              <Button 
                label="Sticky Error" 
                icon="pi pi-ban" 
                severity="danger"
                outlined
                @click="handleStickyError"
                class="w-full"
              />
              
              <Button 
                label="Long Life Info" 
                icon="pi pi-clock" 
                severity="info"
                outlined
                @click="handleLongLifeInfo"
                class="w-full"
              />
              
              <Button 
                label="Clear All Toasts" 
                icon="pi pi-trash" 
                severity="secondary"
                outlined
                @click="handleClear"
                class="w-full"
              />
            </div>
          </div>
  
          <!-- Usage Example -->
          <div class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Usage Example</h3>
            <pre class="text-sm text-gray-700 overflow-x-auto"><code>// In your component
  const { showSuccess, showError, showInfo, showWarn } = useToast()
  
  // Basic usage
  showSuccess('Operation completed successfully!')
  showError('Something went wrong')
  
  // With custom options
  showSuccess('Custom success message', {
    summary: 'Well Done!',
    life: 5000,
    sticky: false
  })</code></pre>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Button from 'primevue/button'
  
  const { showSuccess, showError, showInfo, showWarn, show, clear } = useCustomToast()
  
  const handleSuccess = () => {
    debugger
    showSuccess('Operation completed successfully!')
  }
  
  const handleError = () => {
    showError('Something went wrong. Please try again.')
  }
  
  const handleInfo = () => {
    showInfo('Here is some helpful information for you.')
  }
  
  const handleWarning = () => {
    showWarn('Please be careful with this action.')
  }
  
  const handleCustomSuccess = () => {
    showSuccess('You earned a new achievement!', {
      summary: 'Congratulations!',
      life: 5000
    })
  }
  
  const handleStickyError = () => {
    showError('This is a critical error that requires attention.', {
      summary: 'Critical Error',
      sticky: true,
      closable: true
    })
  }
  
  const handleLongLifeInfo = () => {
    showInfo('This message will stay visible for 10 seconds.', {
      summary: 'Extended Info',
      life: 10000
    })
  }
  
  const handleClear = () => {
    clear()
    showInfo('All toast notifications have been cleared.')
  }
  </script>