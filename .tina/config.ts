import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || 'main'

export default defineConfig({
  branch,
  
  // Get this from tina.io - leave empty for local-only mode
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  
  // Get this from tina.io - leave empty for local-only mode
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
  
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page Title',
            required: true,
          },
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
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
            label: 'Background Image',
          },
          {
            type: 'string',
            name: 'contentTitle',
            label: 'Content Title',
          },
          {
            type: 'string',
            name: 'content',
            label: 'Content',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'body',
            label: 'Body',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'paragraph1',
            label: 'Paragraph 1',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'paragraph2',
            label: 'Paragraph 2',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
    ],
  },
})
