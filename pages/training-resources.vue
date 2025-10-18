<template>
  <TinaVisualEditor>
    <div>
    <!-- Page Header -->
    <header class="intro-header" :style="`background-image: url('${pageData?.backgroundImage || '/img/bkgd-2.jpg'}')`">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="page-heading text-center">
            <h1 
              :data-tina-field="tinaField(pageData, 'heading')"
              @click="handleFieldClick('heading')"
              :class="{ 'tina-editable': isEditMode }"
            >{{ pageData?.heading }}</h1>
            <hr class="small">
            <span 
              class="subheading" 
              :data-tina-field="tinaField(pageData, 'subheading')"
              @click="handleFieldClick('subheading')"
              :class="{ 'tina-editable': isEditMode }"
            >{{ pageData?.subheading }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-5xl mx-auto">
        <p class="mb-8">
          Are you looking for a strategy, tool, or other resource that was shared at one of my recent trainings or seminars? That's what this page is all about. I've created dozens of resources, and am passionate about getting to share them with you for you to use with your students--and they are all free! If you don't see something or have trouble finding something from the seminar you attended, please <NuxtLink to="/contact" class="text-primary hover:underline">contact me</NuxtLink>.
        </p>

        <!-- All Resources -->
        <div v-for="(resource, index) in resources" :key="resource.title" class="mb-8">
          <h3 class="text-2xl font-bold mb-3" :data-tina-field="tinaField(pageData, `resources.${index}.title`)">{{ resource.title }}</h3>
          
          <!-- Links -->
          <div v-for="(link, linkIndex) in resource.links" :key="link.url" class="mb-2">
            <a :href="link.url" class="resource-btn" target="_blank" :data-tina-field="tinaField(pageData, `resources.${index}.links.${linkIndex}`)">
              {{ link.text }}
            </a>
          </div>
          
          <!-- Images Gallery -->
          <div v-if="resource.images && resource.images.length > 0" class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(image, imageIndex) in resource.images" :key="imageIndex">
              <a v-if="image.link" :href="image.link" target="_blank">
                <img :src="image.src" :alt="image.alt || ''" class="resource-image" :data-tina-field="tinaField(pageData, `resources.${index}.images.${imageIndex}.src`)">
              </a>
              <img v-else :src="image.src" :alt="image.alt || ''" class="resource-image" :data-tina-field="tinaField(pageData, `resources.${index}.images.${imageIndex}.src`)">
            </div>
          </div>
          
          <hr v-if="resource.showDivider" class="my-6">
        </div>
      </div>
    </div>
  </div>
  </TinaVisualEditor>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import client from '~/.tina/__generated__/client'

interface ResourceImage {
  src: string
  alt?: string
  link?: string
}

interface Resource {
  title: string
  links: { text: string; url: string }[]
  images?: ResourceImage[]
  showDivider: boolean
}

// Check if we're in edit mode
const route = useRoute()
const isEditMode = ref(false)

onMounted(() => {
  if (process.client) {
    isEditMode.value = window.location.pathname.includes('/admin') || 
                       window.location.search.includes('tina=true') ||
                       window.location.search.includes('edit=true')
    
    // Add visual editing mode indicator
    if (isEditMode.value) {
      const indicator = document.createElement('div')
      indicator.className = 'tina-visual-mode'
      indicator.innerHTML = '🎨 Visual Editing Mode - Click any field to edit'
      document.body.appendChild(indicator)
      
      // Remove indicator after 5 seconds
      setTimeout(() => {
        if (indicator.parentNode) {
          indicator.parentNode.removeChild(indicator)
        }
      }, 5000)
    }
  }
})

// Import content directly from JSON file (TinaCMS fallback)
import trainingResourcesContent from '~/content/pages/training-resources.json'

const pageData = ref(trainingResourcesContent)
const resources = ref<Resource[]>(trainingResourcesContent.resources || [])

// Helper function for TinaCMS field annotations
const tinaField = (data: any, field: string) => {
  if (isEditMode.value && data) {
    return `training_resources.${field}`
  }
  return undefined
}

// Add visual editing click handler
const handleFieldClick = (field: string) => {
  if (isEditMode.value) {
    // Open admin with focus on this field
    const adminUrl = `${window.location.origin}/admin/index.html#/collections/training_resources/edit/training-resources.json`
    window.open(adminUrl, '_blank')
  }
}

useHead({
  title: pageData.value?.title || 'Training Resources'
})
</script>

<style scoped>
.resource-image {
  max-width: 300px;
  max-height: 400px;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.resource-image:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Visual editing styles */
.tina-editable {
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  padding: 2px 4px;
  margin: -2px -4px;
}

.tina-editable:hover {
  background-color: rgba(59, 130, 246, 0.1);
  outline: 2px solid rgba(59, 130, 246, 0.3);
  outline-offset: 2px;
}

.tina-editable:hover::after {
  content: "✏️ Click to edit";
  position: absolute;
  top: -30px;
  left: 0;
  background: #3b82f6;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1000;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Visual editing mode indicator */
.tina-visual-mode {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

