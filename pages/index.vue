<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" :style="`background-image: url('${pageData?.backgroundImage || '/img/bkgd-4.jpg'}')`">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="site-heading text-center">
            <h1 :data-tina-field="tinaField(pageData, 'heading')">{{ pageData?.heading }}</h1>
            <hr class="small">
            <span class="subheading" v-html="pageData?.subheading" :data-tina-field="tinaField(pageData, 'subheading')"></span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="post-preview">
          <div>
            <h2 class="post-title" :data-tina-field="tinaField(pageData, 'contentTitle')">
              {{ pageData?.contentTitle }}
            </h2>
            <div :data-tina-field="tinaField(pageData, 'body')">
              <RichTextRenderer :body="pageData?.body" />
            </div>
          </div>
        </div>
        <!-- Pager -->
        <ul class="pager">
          <li class="next">
            <NuxtLink to="/about">Read More About Me &rarr;</NuxtLink>
          </li>
        </ul>
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
                       window.location.search.includes('tina=true')
  }
})

// Import content directly from JSON file (TinaCMS fallback)
import indexContent from '~/content/pages/index.json'

const pageData = ref(indexContent)

// Helper function for TinaCMS field annotations
const tinaField = (data: any, field: string) => {
  if (isEditMode.value && data) {
    return `page.${field}`
  }
  return undefined
}

useHead({
  title: pageData.value?.title || 'Home'
})
</script>

