<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" style="background-image: url('/img/bkgd-4.jpg')">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="site-heading text-center">
            <h1>{{ pageData.heading }}</h1>
            <hr class="small">
            <span class="subheading" v-html="pageData.subheading"></span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="post-preview">
          <div>
            <h2 class="post-title">
              {{ pageData.contentTitle }}
            </h2>
            <p>
              {{ pageData.content }}
            </p>
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
import { ref } from 'vue'

const pageData = ref({
  heading: 'Thinking In Common',
  subheading: '<strong>Catherine Wilson</strong><br/>Educational Specialist',
  contentTitle: 'Accessing Ability',
  content: 'This website is dedicated to promoting inclusive schools and communities and exploring positive way of supporting students with disabilities. Teachers need simple, effective strategies and ideas to use in their classrooms that allow students access to and progress in the general education curriculum. This site serves to share ideas that work with all students.'
})

useHead({
  title: 'Home'
})
</script>

