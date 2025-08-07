<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="text-center">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 class="mt-6 text-3xl font-bold text-gray-900">
            Authentication Error
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            {{ errorMessage }}
          </p>
        </div>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="card text-center">
          <NuxtLink
            to="/auth/login"
            class="btn-primary inline-flex items-center"
          >
            <svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Sign In
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
  
  const errorMessage = computed(() => {
    const error = route.query.error as string
    
    switch (error) {
      case 'CredentialsSignin':
        return 'Invalid credentials provided.'
      case 'AccessDenied':
        return 'Access denied. You do not have permission to sign in.'
      case 'Configuration':
        return 'There is a problem with the server configuration.'
      default:
        return 'An unexpected error occurred during authentication.'
    }
  })
  </script>