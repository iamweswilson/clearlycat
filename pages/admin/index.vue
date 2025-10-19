<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Content Management</h1>
          <div class="flex space-x-4">
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
              <button 
                @click="editPage(page.name)"
                class="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Edit Content
              </button>
            </div>
          </div>
        </div>
        
        <!-- Edit Modal -->
        <div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-2xl font-bold">Edit {{ currentPage?.title }}</h2>
              <button @click="closeEditModal" class="text-gray-500 hover:text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Content (JSON)</label>
              <textarea 
                v-model="editContent" 
                class="w-full h-96 p-3 border border-gray-300 rounded-md font-mono text-sm"
                placeholder="Edit JSON content..."
              ></textarea>
            </div>
            
            <div class="flex justify-end space-x-3">
              <button 
                @click="closeEditModal" 
                class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button 
                @click="saveContent" 
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
        
        <div class="mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
          <h3 class="text-sm font-medium text-blue-800 mb-2">Content Editing</h3>
          <p class="text-sm text-blue-700">
            Click "Edit Content" on any page to edit the JSON content directly. Changes will be saved to the content files.
          </p>
        </div>
        
        <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <h3 class="text-sm font-medium text-yellow-800 mb-2">Note:</h3>
          <p class="text-sm text-yellow-700">
            For visual editing with image previews and rich text editing, run <code>npm run dev:tina</code> locally.
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

// Edit modal state
const showEditModal = ref(false)
const currentPage = ref(null)
const editContent = ref('')

const editPage = async (pageName: string) => {
  try {
    // Find the page data
    const page = pages.find(p => p.name === pageName)
    currentPage.value = page
    
    // Load the current content from the content files
    const response = await fetch(`/content/pages/${pageName}.json`)
    if (response.ok) {
      const data = await response.json()
      editContent.value = JSON.stringify(data, null, 2)
    } else {
      // Fallback: show template content based on page type
      let template = '{\n  "title": "",\n  "heading": "",\n  "subheading": "",\n  "body": ""\n}'
      
      if (pageName === 'about') {
        template = `{
  "_template": "aboutPage",
  "title": "",
  "heading": "",
  "subheading": "",
  "contentTitle": "",
  "aboutImage": {
    "src": "/img/about-cat.jpg",
    "alt": "Catherine Wilson",
    "width": 400,
    "height": 300
  },
  "body": ""
}`
      } else if (pageName === 'training-resources') {
        template = `{
  "_template": "trainingResources",
  "title": "",
  "heading": "",
  "subheading": "",
  "body": "",
  "resources": [
    {
      "title": "Sample Resource",
      "links": [
        {
          "text": "Sample Link",
          "url": "https://example.com"
        }
      ],
      "images": [
        {
          "src": "/img/sample.jpg",
          "alt": "Sample Image",
          "link": "https://example.com"
        }
      ],
      "showDivider": false
    }
  ]
}`
      } else {
        template = `{
  "_template": "standardPage",
  "title": "",
  "heading": "",
  "subheading": "",
  "backgroundImage": "/img/bkgd-1.jpg",
  "body": ""
}`
      }
      
      editContent.value = template
    }
    
    showEditModal.value = true
  } catch (error) {
    console.error('Error loading page content:', error)
    // Show error message or fallback content
    editContent.value = '{\n  "title": "",\n  "heading": "",\n  "subheading": "",\n  "body": ""\n}'
    showEditModal.value = true
  }
}

const closeEditModal = () => {
  showEditModal.value = false
  currentPage.value = null
  editContent.value = ''
}

const saveContent = async () => {
  try {
    // Validate JSON
    const parsedContent = JSON.parse(editContent.value)
    
    // Copy to clipboard and show instructions
    await navigator.clipboard.writeText(editContent.value)
    
    alert(`Content copied to clipboard!\n\nTo save your changes:\n1. Open the file: content/pages/${currentPage.value.name}.json\n2. Replace the entire content with the copied JSON\n3. Save the file and commit to Git\n4. Push to trigger deployment`)
    
    closeEditModal()
  } catch (error) {
    console.error('Error processing content:', error)
    if (error instanceof SyntaxError) {
      alert('Invalid JSON format. Please check your content and try again.')
    } else {
      // Fallback: show the content in a new window for manual copying
      const newWindow = window.open('', '_blank')
      newWindow.document.write(`
        <html>
          <head><title>Content for ${currentPage.value.name}</title></head>
          <body>
            <h2>Content for ${currentPage.value.name}</h2>
            <p>Copy this content and save it to: <code>content/pages/${currentPage.value.name}.json</code></p>
            <pre style="background: #f5f5f5; padding: 20px; border: 1px solid #ddd; white-space: pre-wrap;">${editContent.value}</pre>
          </body>
        </html>
      `)
      newWindow.document.close()
      closeEditModal()
    }
  }
}

useHead({
  title: 'Content Management'
})
</script>

