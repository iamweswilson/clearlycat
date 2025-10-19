<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" :style="`background-image: url('${pageData?.backgroundImage || '/img/bkgd-2.jpg'}')`">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
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
      <div class="max-w-5xl mx-auto">
        <div class="mb-8" :data-tina-field="tinaField(pageData, 'body')">
          <RichTextRenderer :body="pageData?.body" />
        </div>

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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
const isEditMode = ref(false)

onMounted(() => {
  if (process.client) {
    isEditMode.value = window.location.pathname.includes('/admin') || 
                       window.location.search.includes('tina=true')
  }
})

// Import content directly from JSON file (TinaCMS fallback)
import trainingResourcesContent from '~/content/pages/training-resources.json'

const pageData = ref(trainingResourcesContent)
const resources = ref<Resource[]>(trainingResourcesContent.resources || [])

// Helper function for TinaCMS field annotations
const tinaField = (data: any, field: string) => {
  if (isEditMode.value && data) {
    return `page.${field}`
  }
  return undefined
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
</style>

