<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" style="background-image: url('/img/bkgd-2.jpg')">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="page-heading text-center">
            <h1>{{ pageData.heading }}</h1>
            <hr class="small">
            <span class="subheading">{{ pageData.subheading }}</span>
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

        <!-- Resource Sections -->
        <div v-for="resource in resources" :key="resource.title" class="mb-8">
          <h3 class="text-2xl font-bold mb-3">{{ resource.title }}</h3>
          <div v-for="link in resource.links" :key="link.url" class="mb-2">
            <a :href="link.url" class="resource-btn" target="_blank">
              {{ link.text }}
            </a>
          </div>
          <hr v-if="resource.showDivider" class="my-6">
        </div>

        <!-- Infographics Section -->
        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-3">Best Practices for Co-Teaching</h3>
          <p class="mb-2">
            <a href="//drive.google.com/drive/folders/0B6LJvCVcyOwfY250UTM5X3FJTms?resourcekey=0-rQ_vlIT6ljargrgnpgdQ1A&usp=sharing" class="resource-btn" target="_blank">
              View All Resources
            </a>
          </p>
          <p class="text-sm mb-2">Download The Infographics</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <a href="/img/maximizeoppw_coteaching.png" target="_blank">
              <img src="/img/maximizeoppw_coteaching.png" alt="Infographic" class="resource-graphic">
            </a>
            <a href="/img/coteachingapproaches1.png" target="_blank">
              <img src="/img/coteachingapproaches1.png" alt="Infographic" class="resource-graphic">
            </a>
            <a href="/img/coteachingapproaches2.png" target="_blank">
              <img src="/img/coteachingapproaches2.png" alt="Infographic" class="resource-graphic">
            </a>
          </div>
          <hr class="my-6">
        </div>

        <!-- Additional sections continue... -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pageData = ref({
  heading: 'Training Resources',
  subheading: 'Get what you need here.'
})

const resources = ref([
  {
    title: 'National Train the Trainer Institute: Maximizing the Effectiveness of Paraprofessionals',
    links: [
      { text: 'Home Base', url: '//docs.google.com/document/d/1MetiRDcc2JaC8Ow133oM5B_EuLh02BBv9UX2Sa5NlUU/edit?usp=sharing' },
      { text: 'View All Resources', url: '//drive.google.com/drive/folders/1XwR8VLtgJKoRn4k9vLPc7XRnIcqUodsN?usp=sharing' }
    ],
    showDivider: false
  },
  {
    title: 'Truro Mass; June 28, 2022 Professional Development',
    links: [
      { text: 'District Resources', url: '//drive.google.com/drive/folders/1Egv76PO2xhtSZMrWs7GJEYmcg0d5Z384?usp=sharing' },
      { text: 'Additional Co-Teaching Resources', url: '//drive.google.com/drive/folders/0B6LJvCVcyOwfY250UTM5X3FJTms?resourcekey=0-rQ_vlIT6ljargrgnpgdQ1A&usp=sharing' }
    ],
    showDivider: false
  },
  {
    title: 'Gresham High School; June 3, 2022 Professional Development',
    links: [
      { text: 'District Resources', url: '//drive.google.com/drive/folders/1KOtvWR3tbN5r8ldrIru6oFC1I37SCj_6?usp=sharing' },
      { text: 'Additional Co-Teaching Resources', url: '//drive.google.com/drive/folders/0B6LJvCVcyOwfY250UTM5X3FJTms?resourcekey=0-rQ_vlIT6ljargrgnpgdQ1A&usp=sharing' }
    ],
    showDivider: false
  },
  {
    title: 'Help Students Develop a Positive Growth Mindset (2 Day Conference)',
    links: [
      { text: 'View All Resources', url: '//drive.google.com/drive/folders/1liiHF89PbYnL9rhqOa-hEjzAOujBp1AM?usp=sharing' }
    ],
    showDivider: true
  },
  {
    title: 'MOTIVATION, MINDSET and GRIT: Practical, Proven Strategies to Increase Learning',
    links: [
      { text: 'View All Resources', url: '//drive.google.com/drive/folders/0B6LJvCVcyOwfZC1IRW41bDExOFE' }
    ],
    showDivider: true
  },
  {
    title: 'Helping Students With Special Needs K-5',
    links: [
      { text: 'Resources', url: '//drive.google.com/folderview?id=0B6LJvCVcyOwfMWlacGstYWJEMzg&usp=sharing' },
      { text: 'Downloads', url: '//drive.google.com/folderview?id=0B6LJvCVcyOwfakJGU3FBekhTa0U&usp=sharing' }
    ],
    showDivider: true
  }
])

useHead({
  title: 'Training Resources'
})
</script>

