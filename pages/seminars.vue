<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" :style="`background-image: url('${pageData?.backgroundImage || '/img/bkgd-1.jpg'}')`">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
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
      <div class="max-w-5xl mx-auto">
        <p class="mb-4">
          Here's a quick list of the recent and upcoming seminars I am conducting across the nation. I an currently providing in-person seminars and conferences on mindset, motivation, grit and co-teaching. All professional development training sessions are customized based on the needs of the audience. Attendees are offered a number of options and choices throughout the day so every educator experiences professional development they can utilize.
        </p>
        <p class="mb-8">
          Interested in learning more? <NuxtLink to="/contact" class="text-primary hover:underline">Contact me here</NuxtLink>
        </p>

        <h3 class="text-2xl font-bold mb-3">October 2018</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>October 18th: Motivation, Mindset & Grit<br/>Seattle, WA</li>
          <li>October 29th: Motivation, Mindset & Grit<br/>Omaha, NE</li>
          <li>October 30th: Motivation, Mindset & Grit<br/>Kansas City, MO</li>
          <li>October 31st: Motivation, Mindset & Grit<br/>Springfield, MO</li>
        </ul>

        <h3 class="text-2xl font-bold mb-3">November 2018</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>November 1st: Motivation, Mindset & Grit<br/>St. Louis, MO</li>
          <li>November 2nd: Motivation, Mindset & Grit<br/>New Orleans, LA</li>
          <li>November 26th -27th: Help Students Develop a Positive Growth Mindset<br/>Anaheim, CA</li>
          <li>November 28th-29th: Help Students Develop a Positive Growth Mindset<br/>Phoenix, AZ</li>
        </ul>

        <h3 class="text-2xl font-bold mb-3">December 2018</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>December 11th: Best Practices in Co-Teaching<br/>Pasadena, CA</li>
          <li>December 12th: Best Practices in Co-Teaching<br/>Ontario, CA</li>
          <li>December 13th: Best Practices in Co-Teaching<br/>Anaheim, CA</li>
          <li>December 14th: Best Practices in Co-Teaching<br/>Honolulu, HI</li>
        </ul>

        <h3 class="text-2xl font-bold mb-3">January 2019</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>January 14th: Best Practices in Co-Teaching<br/>Long Island, NY</li>
          <li>January 15th: Best Practices in Co-Teaching<br/>White Plains, NY</li>
          <li>January 16th: Best Practices in Co-Teaching<br/>New Brunswick, NJ</li>
          <li>January 17th: Best Practices in Co-Teaching<br/>Cherry Hill, NJ</li>
          <li>January 18th: Best Practices in Co-Teaching<br/>Boston, MA</li>
        </ul>

        <h3 class="text-2xl font-bold mb-3">February 2019</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>February 4th: Motivation, Mindset & Grit<br/>Appleton, WI</li>
          <li>February 5th: Motivation, Mindset & Grit<br/>Rockford, IL</li>
          <li>February 6th: Motivation, Mindset & Grit<br/>Chicago South, IL</li>
          <li>February 7th: Motivation, Mindset & Grit<br/>Champaign, IL</li>
          <li>February 8th: Motivation, Mindset & Grit<br/>Chicago North, IL</li>
        </ul>

        <h3 class="text-2xl font-bold mb-3">March 2019</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>March 4th & 5th: Co-Teaching Conference<br/>Anaheim, CA</li>
          <li>March 6th & 7th: Co-Teaching Conference<br/>San Francisco, CA</li>
          <li>March 18th & 19th: Co-Teaching Conference<br/>Boston, MA</li>
          <li>March 20th & 21st: Co-Teaching Conference<br/>Albany, NY</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import content directly from JSON file
import seminarsContent from '~/content/pages/seminars.json'

const pageData = ref(seminarsContent)

useHead({
  title: pageData.value?.title || 'Seminars'
})
</script>

