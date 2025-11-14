# Migration from Jekyll to Nuxt 3

This document outlines the migration from the original Jekyll site to the new Nuxt 3 + Tailwind + TinaCMS stack.

## What Changed

### Framework
- **Before**: Jekyll (Ruby-based static site generator)
- **After**: Nuxt 3 (Vue.js-based framework)

### Styling
- **Before**: Bootstrap 3 + Custom CSS
- **After**: Tailwind CSS (utility-first CSS framework)

### Build System
- **Before**: Gulp + BrowserSync
- **After**: Nuxt built-in dev server and build system

### Content Management
- **Before**: Manual HTML/Markdown editing
- **After**: TinaCMS with visual editing interface

## File Structure Comparison

### Old Structure (Jekyll)
```
_layouts/          → layouts/
_includes/         → components/
_data/            → (integrated into pages)
_config.yml       → nuxt.config.ts
*.html pages      → pages/*.vue
Gemfile           → package.json
gulpfile.js       → (removed)
css/              → assets/css/
```

### New Structure (Nuxt)
```
layouts/default.vue    - Main layout with nav and footer
pages/                 - All page components
  index.vue           - Home page
  about.vue           - About page
  contact.vue         - Contact page
  seminars.vue        - Seminars page
  training-resources.vue - Resources page
  thank-you.vue       - Thank you page
assets/css/main.css   - Tailwind + custom styles
public/img/           - Static images
.tina/                - TinaCMS configuration
```

## Features Preserved

✅ All pages and content
✅ Navigation structure
✅ Contact form (Netlify Forms)
✅ Images and assets
✅ Google Analytics
✅ Responsive design
✅ SEO meta tags

## New Features

✨ Visual content editing with TinaCMS
✨ Modern Vue.js component architecture
✨ Tailwind CSS utility classes
✨ TypeScript support
✨ Improved performance
✨ Better developer experience
✨ Hot module replacement (instant updates during development)

## Files Kept for Reference

The following old files are kept but no longer used:
- `_layouts/`
- `_includes/`
- `_data/`
- `_config.yml`
- `Gemfile`
- `gulpfile.js`
- Original `css/` directory

You can safely delete these after confirming the new site works correctly.

## Environment Requirements

### Before
- Ruby
- Jekyll gem
- Node.js (for Gulp)

### After
- Node.js 18+ (only requirement)

## Development Commands

### Before
```bash
gulp              # Start dev server
jekyll build      # Build site
```

### After
```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run generate  # Generate static site
```

## Deployment

### Before
- Manual Jekyll build
- Upload _site folder

### After
- Push to GitHub
- Automatic deployment via Netlify/Vercel
- Continuous deployment on every commit

## Notes

- All functionality has been preserved
- The visual design remains the same
- URLs and routes are identical
- Contact form still works with Netlify
- The site is now easier to maintain and update

