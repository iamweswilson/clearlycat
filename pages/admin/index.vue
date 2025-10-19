<template>
  <div>
    <ClientOnly>
      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">TinaCMS Admin</h1>
          <p class="text-gray-600 mb-6">
            The TinaCMS admin interface is not available in production builds. 
            To edit content, please run the development server locally.
          </p>
          <div class="space-y-4">
            <div class="bg-blue-50 border border-blue-200 rounded-md p-4">
              <h3 class="text-sm font-medium text-blue-800 mb-2">For Development:</h3>
              <code class="text-sm text-blue-700">npm run dev:tina</code>
            </div>
            <div class="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <h3 class="text-sm font-medium text-yellow-800 mb-2">Note:</h3>
              <p class="text-sm text-yellow-700">
                Content is managed through JSON files in the <code>content/</code> directory.
              </p>
            </div>
          </div>
          <div class="mt-6">
            <a 
              href="/" 
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              ← Back to Site
            </a>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'TinaCMS Admin'
})
</script>

