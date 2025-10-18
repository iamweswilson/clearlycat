<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" :style="`background-image: url('${pageData?.backgroundImage || '/img/contact-bg.jpg'}')`">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="page-heading text-center">
            <h1 :data-tina-field="tinaField(pageData, 'heading')">{{ pageData?.heading }}</h1>
            <hr class="small">
            <span class="subheading" :data-tina-field="tinaField(pageData, 'subheading')">{{ pageData?.subheading }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <p class="mb-8">Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you as soon as possible!</p>
        
        <form name="contact" action="/thank-you" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact">
          
          <div class="mb-6">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              class="form-control" 
              placeholder="Name" 
              id="name" 
              name="name" 
              required
            >
          </div>

          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              class="form-control" 
              placeholder="Email Address" 
              id="email" 
              name="email" 
              required
            >
          </div>

          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              rows="5" 
              class="form-control" 
              placeholder="Message" 
              id="message" 
              name="message" 
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" class="btn-default">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import client from '~/.tina/__generated__/client'

// Check if we're in edit mode
const isEditMode = ref(false)

onMounted(() => {
  if (process.client) {
    isEditMode.value = window.location.pathname.includes('/admin') || 
                       window.location.search.includes('tina=true')
  }
})

// Import content directly from JSON file (TinaCMS fallback)
import contactContent from '~/content/pages/contact.json'

const pageData = ref(contactContent)

// Helper function for TinaCMS field annotations
const tinaField = (data: any, field: string) => {
  if (isEditMode.value && data) {
    return `page.${field}`
  }
  return undefined
}

useHead({
  title: pageData.value?.title || 'Contact Me'
})
</script>

