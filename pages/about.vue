<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" :style="`background-image: url('${pageData?.backgroundImage || '/img/bkgd-3.jpg'}')`">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="page-heading text-center">
            <h1>{{ pageData?.heading }}</h1>
            <hr class="small">
            <span class="subheading">{{ pageData?.subheading }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-12 gap-8">
          <div class="md:col-span-5">
            <img src="/img/about-cat.jpg" alt="Catherine Wilson" class="w-full rounded-lg shadow-lg">
          </div>
          <div class="md:col-span-7">
            <h2 class="text-3xl font-bold mb-4">
              {{ pageData?.contentTitle }}
            </h2>
            <p class="mb-4">
              {{ pageData?.paragraph1 }}
            </p>
            <p>
              {{ pageData?.paragraph2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import content directly from JSON file
import aboutContent from '~/content/pages/about.json'

const pageData = ref(aboutContent)

useHead({
  title: pageData.value?.title || 'About Me'
})
</script>

