<template>
  <div>
    <!-- Show TinaCMS admin interface directly -->
    <div class="admin-container">
      <div class="admin-header">
        <h1>🦙 TinaCMS Admin</h1>
        <a href="/" class="back-link">← Back to Site</a>
      </div>
      <div class="admin-content">
        <div class="info-box">
          <h3>Visual Content Management</h3>
          <p>Edit your website content with the TinaCMS interface. The admin interface is available at <code>/admin/index.html</code> for full visual editing capabilities.</p>
        </div>
        
        <div class="pages-grid">
          <div v-for="page in pages" :key="page.name" class="page-card">
            <h3>{{ page.title }}</h3>
            <p>{{ page.description }}</p>
            <div class="page-actions">
              <a :href="`/${page.name === 'index' ? '' : page.name}`" class="btn btn-primary btn-full" target="_blank">View Page</a>
              <a :href="`/admin/index.html#/collections/page/entries/${page.name}`" class="btn btn-success btn-full">Edit in TinaCMS</a>
            </div>
          </div>
        </div>
        
        <div class="warning-box">
          <h3>Note</h3>
          <p>For the full TinaCMS visual editing experience with image previews and rich text editing, visit <a href="/admin/index.html" target="_blank">/admin/index.html</a> directly.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const pages = [
  {
    name: 'index',
    title: 'Home Page',
    description: 'Main landing page content'
  },
  {
    name: 'about',
    title: 'About Page',
    description: 'About Catherine and her services'
  },
  {
    name: 'contact',
    title: 'Contact Page',
    description: 'Contact information and form'
  },
  {
    name: 'seminars',
    title: 'Seminars Page',
    description: 'Information about seminars and workshops'
  },
  {
    name: 'training-resources',
    title: 'Training Resources',
    description: 'Educational resources and materials'
  },
  {
    name: 'thank-you',
    title: 'Thank You Page',
    description: 'Confirmation page after form submission'
  }
]

useHead({
  title: 'TinaCMS Admin'
})
</script>

<style scoped>
.admin-container {
  min-height: 100vh;
  background-color: #f8fafc;
}

.admin-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-header h1 {
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.back-link {
  color: #4299e1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #4299e1;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.back-link:hover {
  background-color: #4299e1;
  color: white;
}

.admin-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.info-box {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
}

.info-box h3 {
  color: #234e52;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.info-box p {
  color: #234e52;
  margin: 0;
}

.info-box code {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
}

.pages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.page-card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.page-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.page-card h3 {
  color: #2d3748;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.page-card p {
  color: #718096;
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.page-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  text-align: center;
}

.btn-primary {
  background-color: #4299e1;
  color: white;
}

.btn-primary:hover {
  background-color: #3182ce;
}

.btn-success {
  background-color: #48bb78;
  color: white;
}

.btn-success:hover {
  background-color: #38a169;
}

.btn-full {
  flex: 1;
}

.warning-box {
  background: #fffaf0;
  border: 1px solid #f6e05e;
  border-radius: 0.5rem;
  padding: 1rem;
}

.warning-box h3 {
  color: #744210;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.warning-box p {
  color: #744210;
  margin: 0;
}

.warning-box a {
  color: #744210;
  text-decoration: underline;
}

.warning-box a:hover {
  color: #553c09;
}
</style>

