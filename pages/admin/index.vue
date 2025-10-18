<template>
  <div>
    <ClientOnly>
      <div id="tina-admin"></div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

definePageMeta({
  layout: false
})

onMounted(async () => {
  // TinaCMS admin will be loaded here
  if (typeof window !== 'undefined') {
    // Redirect to the built admin page
    window.location.href = '/admin/index.html'
  }
})
</script>

