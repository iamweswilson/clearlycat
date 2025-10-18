import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Enable TinaCMS visual editing mode
  if (process.client) {
    // Check if we're in edit mode
    const isEditMode = window.location.pathname.includes('/admin') || 
                       window.location.search.includes('tina=true')
    
    if (isEditMode) {
      // Add visual editing styles and scripts
      const style = document.createElement('style')
      style.textContent = `
        [data-tina-field] {
          position: relative;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        [data-tina-field]:hover {
          background-color: rgba(59, 130, 246, 0.1);
          outline: 2px solid rgba(59, 130, 246, 0.3);
          outline-offset: 2px;
        }
        
        [data-tina-field]:hover::after {
          content: "✏️ Edit";
          position: absolute;
          top: -25px;
          left: 0;
          background: #3b82f6;
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
          z-index: 1000;
        }
        
        .tina-visual-editing {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #3b82f6;
          color: white;
          padding: 10px 15px;
          border-radius: 8px;
          font-size: 14px;
          z-index: 9999;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `
      document.head.appendChild(style)
      
      // Add visual editing indicator
      const indicator = document.createElement('div')
      indicator.className = 'tina-visual-editing'
      indicator.textContent = 'Visual Editing Mode - Click fields to edit'
      document.body.appendChild(indicator)
      
      // Add click handlers for visual editing
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        const tinaField = target.closest('[data-tina-field]')
        
        if (tinaField) {
          e.preventDefault()
          const fieldName = tinaField.getAttribute('data-tina-field')
          if (fieldName) {
            // Open TinaCMS admin with focus on this field
            const adminUrl = `${window.location.origin}/admin/index.html#/collections/page/edit/about.json`
            window.open(adminUrl, '_blank')
          }
        }
      })
    }
  }
})
