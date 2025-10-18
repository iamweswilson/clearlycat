<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" :style="`background-image: url('${pageData?.backgroundImage || '/img/contact-bg.jpg'}')`">
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
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Thank you!</h2>
        <p class="text-lg">Thank you for reaching out, I look forward to connecting with you soon!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import content directly from JSON file
import thankYouContent from '~/content/pages/thank-you.json'

const pageData = ref(thankYouContent)

useHead({
  title: pageData.value?.title || 'Thank You'
})
</script>

