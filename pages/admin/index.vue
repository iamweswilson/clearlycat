<template>
  <div>
    <!-- Redirect to the actual TinaCMS admin -->
    <div v-if="isRedirecting" class="loading-container">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Loading TinaCMS Admin...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const isRedirecting = ref(true)

onMounted(() => {
  if (process.client) {
    // Redirect to the actual TinaCMS admin interface
    window.location.href = '/admin/index.html'
  }
})

useHead({
  title: 'TinaCMS Admin'
})
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8fafc;
}

.loading-spinner {
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #4299e1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

p {
  color: #718096;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>

