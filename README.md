# Thinking In Common

Educational Specialist website built with Nuxt 3, Tailwind CSS, and TinaCMS for visual content editing.

## Stack

- **Nuxt 3** - Modern Vue.js framework
- **Tailwind CSS** - Utility-first CSS framework
- **TinaCMS** - Git-backed headless CMS with visual editing
- **TypeScript** - Type safety

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory with:
```
NEXT_PUBLIC_TINA_CLIENT_ID=your_github_oauth_client_id
TINA_TOKEN=your_tina_token
GITHUB_BRANCH=add-decap-cms
```

3. Create a GitHub OAuth App:
   - Go to GitHub Settings > Developer settings > OAuth Apps > New OAuth App
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/github/callback`
   - Copy the Client ID to your `.env` file

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## TinaCMS Setup

To enable visual editing with TinaCMS:

1. Complete the environment variables setup above
2. Start the dev server
3. Visit `http://localhost:3000/admin` to access the CMS
4. Log in with GitHub to start editing

## Building for Production

Generate static site:
```bash
npm run generate
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment

This site can be deployed to:
- Netlify (recommended - includes form handling)
- Vercel
- GitHub Pages
- Any static hosting service

### Netlify Deployment

The contact form uses Netlify Forms. When deploying to Netlify, forms will work automatically.

## Migration Notes

This site was migrated from Jekyll to Nuxt 3. Old Jekyll files are kept for reference but are no longer used:
- `_layouts/`, `_includes/`, `_data/` - Old Jekyll templates
- `Gemfile`, `_config.yml` - Jekyll configuration
- `gulpfile.js`, old `package.json` - Old build system

All functionality has been preserved in the new Nuxt application.

