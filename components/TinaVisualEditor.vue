<template>
  <div class="tina-visual-editor">
    <slot />
    
    <!-- Visual editing overlay -->
    <div v-if="isEditMode" class="tina-overlay">
      <div class="tina-indicator">
        🎨 Visual Editing Mode
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'

const isEditMode = ref(false)

onMounted(() => {
  if (process.client) {
    isEditMode.value = window.location.pathname.includes('/admin') || 
                       window.location.search.includes('tina=true') ||
                       window.location.search.includes('edit=true')
    
    if (isEditMode.value) {
      // Add global styles for visual editing
      const style = document.createElement('style')
      style.textContent = `
        .tina-editable {
          position: relative;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 4px;
          padding: 2px 4px;
          margin: -2px -4px;
        }
        
        .tina-editable:hover {
          background-color: rgba(59, 130, 246, 0.1);
          outline: 2px solid rgba(59, 130, 246, 0.3);
          outline-offset: 2px;
        }
        
        .tina-editable:hover::after {
          content: "✏️ Click to edit";
          position: absolute;
          top: -30px;
          left: 0;
          background: #3b82f6;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          z-index: 1000;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .tina-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 9998;
        }
        
        .tina-indicator {
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          z-index: 9999;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          animation: slideIn 0.3s ease-out;
          pointer-events: auto;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `
      document.head.appendChild(style)
    }
  }
})

// Provide edit mode to child components
provide('isEditMode', isEditMode)
</script>

<style scoped>
.tina-visual-editor {
  position: relative;
}
</style>
