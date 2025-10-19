<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" :style="`background-image: url('${pageData?.backgroundImage || '/img/bkgd-3.jpg'}')`">
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
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-12 gap-8">
          <div class="md:col-span-5">
            <div>
              <img 
                :src="pageData?.aboutImage?.src || '/img/about-cat.jpg'" 
                :alt="pageData?.aboutImage?.alt || 'Catherine Wilson'" 
                class="rounded-lg shadow-lg"
                :style="getImageStyle(pageData?.aboutImage)"
                :data-tina-field="tinaField(pageData, 'aboutImage.src')"
              >
              <div :data-tina-field="tinaField(pageData, 'aboutImage.alt')" style="display: none;">{{ pageData?.aboutImage?.alt }}</div>
              <div :data-tina-field="tinaField(pageData, 'aboutImage.width')" style="display: none;">{{ pageData?.aboutImage?.width }}</div>
              <div :data-tina-field="tinaField(pageData, 'aboutImage.height')" style="display: none;">{{ pageData?.aboutImage?.height }}</div>
            </div>
          </div>
          <div class="md:col-span-7">
            <h2 class="text-3xl font-bold mb-4" :data-tina-field="tinaField(pageData, 'contentTitle')">
              {{ pageData?.contentTitle }}
            </h2>
            <div :data-tina-field="tinaField(pageData, 'body')">
              <RichTextRenderer :body="pageData?.body" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import client from '~/.tina/__generated__/client'

// Check if we're in edit mode
const isEditMode = ref(false)

onMounted(() => {
  if (process.client) {
    isEditMode.value = window.location.pathname.includes('/admin') || 
                       window.location.search.includes('tina=true') ||
                       window.location.search.includes('edit=true')
  }
})

// Import content directly from JSON file (TinaCMS fallback)
import aboutContent from '~/content/pages/about.json'

const pageData = ref(aboutContent)

// Helper function for TinaCMS field annotations
const tinaField = (data: any, field: string) => {
  if (isEditMode.value && data) {
    return `page.${field}`
  }
  return undefined
}

// Helper function to calculate image style based on width/height settings
const getImageStyle = (imageData: any) => {
  const hasWidth = imageData?.width != null && imageData?.width > 0
  const hasHeight = imageData?.height != null && imageData?.height > 0

  if (hasWidth && hasHeight) {
    // Both dimensions set - use both and allow cropping
    return {
      width: `${imageData.width}px`,
      height: `${imageData.height}px`,
      objectFit: 'cover'
    }
  } else if (hasWidth && !hasHeight) {
    // Only width set - height auto to maintain aspect ratio
    return {
      width: `${imageData.width}px`,
      height: 'auto',
      objectFit: 'contain'
    }
  } else if (!hasWidth && hasHeight) {
    // Only height set - width auto to maintain aspect ratio
    return {
      width: 'auto',
      height: `${imageData.height}px`,
      objectFit: 'contain'
    }
  } else {
    // No dimensions set - use defaults
    return {
      width: '100%',
      height: 'auto',
      objectFit: 'contain'
    }
  }
}

useHead({
  title: pageData.value?.title || 'About Me'
})
</script>

