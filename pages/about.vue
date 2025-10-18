<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" style="background-image: url('/img/bkgd-3.jpg')">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
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
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-12 gap-8">
          <div class="md:col-span-5">
            <img src="/img/about-cat.jpg" alt="Catherine Wilson" class="w-full rounded-lg shadow-lg">
          </div>
          <div class="md:col-span-7">
            <h2 class="text-3xl font-bold mb-4">
              {{ pageData.contentTitle }}
            </h2>
            <p class="mb-4">
              {{ pageData.paragraph1 }}
            </p>
            <p>
              {{ pageData.paragraph2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pageData = ref({
  heading: 'About Me',
  subheading: 'Educator. Speaker. Learner.',
  contentTitle: 'Doing Great Things in Education',
  paragraph1: 'Catherine Wilson is an outstanding educator, consultant and national presenter, who is known for her enthusiasm and practical ideas for teaching students with disabilities. Catherine brings a special passion for meeting the needs of all students through specially designed instruction, appropriate access and supports that shifts the focus from "disabilities" to student "abilities".',
  paragraph2: 'She is the author of Helping Your Students with SPECIAL NEEDS Achieve Greater Success with your State Standards  (Grades K-5), the extensive resource handbook each participant will receive at the seminar. Through her work as an Access to General Curriculum specialist Catherine helped develop and co-author Grading and Progress Monitoring for Students with Disabilities, A Resource for Teachers. Catherine is known for her practical and innovative strategies in the area of inclusive practices. You will leave Catherine\'s seminar better prepared to help all students achieve greater success with your State Standards.'
})

useHead({
  title: 'About Me'
})
</script>

