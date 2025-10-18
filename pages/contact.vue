<template>
  <div>
    <!-- Page Header -->
    <header class="intro-header" style="background-image: url('/img/contact-bg.jpg')">
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
      <div class="max-w-4xl mx-auto">
        <p class="mb-8">Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you as soon as possible!</p>
        
        <form name="contact" action="/thank-you" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact">
          
          <div class="mb-6">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              class="form-control" 
              placeholder="Name" 
              id="name" 
              name="name" 
              required
            >
          </div>

          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              class="form-control" 
              placeholder="Email Address" 
              id="email" 
              name="email" 
              required
            >
          </div>

          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              rows="5" 
              class="form-control" 
              placeholder="Message" 
              id="message" 
              name="message" 
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" class="btn-default">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pageData = ref({
  heading: 'Contact Me',
  subheading: 'Questions? Ideas? Contact me!'
})

useHead({
  title: 'Contact Me'
})
</script>

