# TinaCMS Setup Guide

This document explains how to set up TinaCMS for visual editing of your website.

## Prerequisites

- GitHub account
- This repository pushed to GitHub

## Using Your Existing GitHub Repository & Netlify

**Good news!** You can use your existing GitHub repository and Netlify deployment - no need to create new ones!

### What You Can Keep
- ✅ **Same GitHub repository** - Just merge or push the `add-decap-cms` branch
- ✅ **Same Netlify site** - Just update the build settings
- ✅ **Same domain/URL** - Everything stays the same

### Netlify Build Settings Update

In your Netlify dashboard, update these settings:

1. Go to **Site settings** → **Build & deploy** → **Build settings**
2. Update:
   - **Build command**: `npm run generate`
   - **Publish directory**: `.output/public`
3. Or let Netlify auto-detect Nuxt (it will use the correct settings automatically)

### GitHub OAuth App Setup

When creating the OAuth App below:
- For **local development**: Use `http://localhost:3002` (your local dev server port)
- For **production**: Use your actual Netlify URL (e.g., `https://your-site.netlify.app` or your custom domain)

You may want to create **two OAuth Apps**:
1. One for local development (`http://localhost:3002`)
2. One for production (your Netlify URL)

Then use different environment variables for each.

## Step 1: Create a GitHub OAuth App

1. Go to your GitHub account settings
2. Navigate to **Developer settings** → **OAuth Apps** → **New OAuth App**
3. Fill in the application details:
   - **Application name**: Thinking In Common CMS - Local (or any name you prefer)
   - **Homepage URL**: `http://localhost:3002` (for local development)
   - **Authorization callback URL**: `http://localhost:3002/api/auth/callback/github`
4. Click **Register application**
5. Note down your **Client ID**
6. Generate a new **Client Secret** and note it down

## Step 2: Create Environment Variables

### For Local Development

Create a `.env` file in the root of the project:

```env
# GitHub OAuth Client ID (from your LOCAL OAuth App)
NEXT_PUBLIC_TINA_CLIENT_ID=your_local_client_id_here

# Optional: Tina Cloud token (can be left blank for local development)
TINA_TOKEN=

# Your current Git branch
GITHUB_BRANCH=add-decap-cms
```

**Replace the values:**
- `NEXT_PUBLIC_TINA_CLIENT_ID` - Your GitHub OAuth Client ID from Step 1
- `TINA_TOKEN` - (Optional) Generate at [TinaCMS Cloud](https://app.tina.io/) or leave blank
- `GITHUB_BRANCH` - Your current working branch (e.g., `add-decap-cms`)

### For Production (Netlify)

In your **Netlify Dashboard** → **Site settings** → **Environment variables**, add:

```
NEXT_PUBLIC_TINA_CLIENT_ID=your_production_client_id_here
TINA_TOKEN=
GITHUB_BRANCH=master
```

**Important Notes:**
- Use your **production OAuth App Client ID** (not the local one)
- `GITHUB_BRANCH` should be your main branch (usually `master` or `main`)
- The `NEXT_PUBLIC_` prefix makes the variable accessible in the browser (required for TinaCMS)

### Complete Environment Variables Reference

| Variable | Required? | Local Value | Production Value | Description |
|----------|-----------|-------------|------------------|-------------|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | **Yes** | Local OAuth Client ID | Production OAuth Client ID | GitHub OAuth App Client ID |
| `TINA_TOKEN` | No | (leave blank) | (leave blank) | TinaCMS Cloud token - only needed for cloud features |
| `GITHUB_BRANCH` | **Yes** | `add-decap-cms` | `master` or `main` | Git branch to save changes to |

## Step 3: Build TinaCMS Admin Interface

Run the TinaCMS build command to generate the admin interface:

```bash
npx @tinacms/cli build
```

This creates the `/admin` folder with the CMS interface.

## Step 4: Start Development Server

Start your Nuxt dev server (note: your site runs on port 3002):

```bash
npm run dev
```

The site should be available at `http://localhost:3002`

## Step 5: Access the CMS

1. Open your browser to `http://localhost:3002/admin/index.html`
2. Click "Log in with GitHub"
3. Authorize the application
4. You should now see the TinaCMS admin interface

**Note:** If `/admin` route doesn't work, access directly at `http://localhost:3002/admin/index.html`

## Step 6: Edit Content

### Option A: Through TinaCMS Admin (Recommended)
1. Navigate to `http://localhost:3002/admin/index.html`
2. Select "Pages" collection
3. Choose a page to edit (index, about, or contact)
4. Make your changes in the form fields
5. Click "Save" to commit changes to your repository

### Option B: Edit Content Files Directly
Content is stored in JSON files at `content/pages/`:
- `index.json` - Home page content
- `about.json` - About page content
- `contact.json` - Contact page content

Edit these files and changes will appear immediately on the site.

## Production Setup

### Deploying to Your Existing Netlify Site

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Migrate to Nuxt 3 + Tailwind + TinaCMS"
   git push origin add-decap-cms
   ```

2. **Merge to main branch** (or deploy the branch directly):
   ```bash
   git checkout master
   git merge add-decap-cms
   git push origin master
   ```

3. **Netlify will automatically deploy** using the settings from `netlify.toml`

### Setting Up Production OAuth

For TinaCMS to work in production:

1. **Create a production GitHub OAuth App:**
   - **Application name**: Thinking In Common CMS (Production)
   - **Homepage URL**: `https://your-actual-site.netlify.app` (or your custom domain)
   - **Authorization callback URL**: `https://your-actual-site.netlify.app/api/github/callback`

2. **Add environment variables to Netlify:**
   - Go to **Site settings** → **Environment variables** → **Add a variable**
   - Add these three variables:
   
   | Key | Value | Scopes |
   |-----|-------|--------|
   | `NEXT_PUBLIC_TINA_CLIENT_ID` | Your production OAuth Client ID | All scopes |
   | `TINA_TOKEN` | (leave blank or add TinaCMS Cloud token) | All scopes |
   | `GITHUB_BRANCH` | `master` (or `main`) | All scopes |

   **Example:**
   ```
   Key: NEXT_PUBLIC_TINA_CLIENT_ID
   Value: 1a2b3c4d5e6f7g8h9i0j
   Scopes: ✓ All scopes
   ```

3. **Redeploy your site** for the environment variables to take effect
   - Go to **Deploys** → **Trigger deploy** → **Deploy site**
   - Or just push a new commit to trigger automatic deployment

## Troubleshooting

### Cannot access /admin

Make sure:
- The development server is running
- You're accessing the correct URL
- Environment variables are set correctly

### GitHub authentication fails

Check:
- OAuth App callback URL matches exactly
- Client ID is correct in .env file
- Your GitHub account has access to the repository

### Changes not saving

Ensure:
- You have write access to the GitHub repository
- The GITHUB_BRANCH matches your current branch
- The repository is properly connected to TinaCMS

## Quick Reference

### Local .env File Template

Copy this template to create your `.env` file:

```env
# Required: GitHub OAuth Client ID (local)
NEXT_PUBLIC_TINA_CLIENT_ID=paste_your_local_client_id_here

# Optional: TinaCMS Cloud token
TINA_TOKEN=

# Required: Your Git branch
GITHUB_BRANCH=add-decap-cms
```

### Netlify Environment Variables Template

Add these in Netlify Dashboard → Site settings → Environment variables:

```
Variable 1:
  Key: NEXT_PUBLIC_TINA_CLIENT_ID
  Value: paste_your_production_client_id_here
  
Variable 2:
  Key: TINA_TOKEN
  Value: (leave empty)
  
Variable 3:
  Key: GITHUB_BRANCH
  Value: master
```

### OAuth App Summary

You'll need **TWO** OAuth Apps:

**Local Development:**
- Name: Thinking In Common CMS - Local
- Homepage: `http://localhost:3002`
- Callback: `http://localhost:3002/api/auth/callback/github`

**Production:**
- Name: Thinking In Common CMS - Production
- Homepage: `https://your-site.netlify.app` (or your custom domain)
- Callback: `https://your-site.netlify.app/api/auth/callback/github`

