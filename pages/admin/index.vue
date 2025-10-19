<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Content Management</h1>
          <div class="flex space-x-4">
            <a 
              href="/admin/index.html" 
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Visual Editing Mode
            </a>
            <a 
              href="/" 
              class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              ← Back to Site
            </a>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="page in pages" :key="page.name" class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ page.title }}</h3>
            <p class="text-gray-600 mb-4">{{ page.description }}</p>
            <div class="space-y-2">
              <a 
                :href="`/${page.name === 'index' ? '' : page.name}`" 
                class="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                target="_blank"
              >
                View Page
              </a>
              <a 
                :href="`/admin/index.html#/collections/page/entries/${page.name}`"
                class="inline-block w-full text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Edit Content
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
          <h3 class="text-sm font-medium text-blue-800 mb-2">Visual Editing Available!</h3>
          <p class="text-sm text-blue-700">
            Click "Visual Editing Mode" above to access the full TinaCMS interface with image previews, 
            rich text editing, and visual content management.
          </p>
        </div>
        
        <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <h3 class="text-sm font-medium text-yellow-800 mb-2">Note:</h3>
          <p class="text-sm text-yellow-700">
            Content is stored in JSON files in the <code>content/pages/</code> directory. 
            For local development with full TinaCMS features, run <code>npm run dev:tina</code>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const pages = [
  {
    name: 'index',
    title: 'Home Page',
    description: 'Main landing page content'
  },
  {
    name: 'about',
    title: 'About Page',
    description: 'About Catherine and her services'
  },
  {
    name: 'contact',
    title: 'Contact Page',
    description: 'Contact information and form'
  },
  {
    name: 'seminars',
    title: 'Seminars Page',
    description: 'Information about seminars and workshops'
  },
  {
    name: 'training-resources',
    title: 'Training Resources',
    description: 'Educational resources and materials'
  },
  {
    name: 'thank-you',
    title: 'Thank You Page',
    description: 'Confirmation page after form submission'
  }
]

useHead({
  title: 'Content Management'
})
</script>

