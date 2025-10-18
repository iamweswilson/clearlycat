import { defineConfig } from 'tinacms'

// Your GitHub information
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'add-decap-cms'

export default defineConfig({
  branch,

  // Get this from your GitHub OAuth App
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'img',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'json',
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === 'index') {
              return '/'
            }
            if (document._sys.filename === 'about') {
              return '/about'
            }
            if (document._sys.filename === 'contact') {
              return '/contact'
            }
            return `/${document._sys.filename}`
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'heading',
            label: 'Page Heading (shown in header)',
            required: true,
          },
          {
            type: 'string',
            name: 'subheading',
            label: 'Subheading',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'backgroundImage',
            label: 'Header Background Image',
          },
          {
            type: 'string',
            name: 'contentTitle',
            label: 'Content Title (optional)',
          },
          {
            type: 'string',
            name: 'body',
            label: 'Main Content',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'paragraph1',
            label: 'Paragraph 1 (About page)',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'paragraph2',
            label: 'Paragraph 2 (About page)',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
    ],
  },
})

