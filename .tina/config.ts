import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'

export default defineConfig({
  branch,
  
  // Get this from tina.io (optional for local-only development)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  
  // Get this from tina.io (optional for local-only development)
  token: process.env.TINA_TOKEN,

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

  // Enable visual editing
  cmsCallback: (cms) => {
    // Enable contextual editing in TinaCMS
    cms.flags.set('tina-admin', true)
    cms.flags.set('visual-editing', true)
    return cms
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
          {
            type: 'object',
            name: 'resources',
            label: 'Training Resources (for Training Resources page only)',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || 'New Resource' }
              },
            },
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
                required: true,
              },
              {
                type: 'object',
                name: 'links',
                label: 'Links',
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.text || 'New Link' }
                  },
                },
                fields: [
                  {
                    type: 'string',
                    name: 'text',
                    label: 'Link Text',
                    required: true,
                  },
                  {
                    type: 'string',
                    name: 'url',
                    label: 'URL',
                    required: true,
                  },
                ],
              },
              {
                type: 'object',
                name: 'images',
                label: 'Images',
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.alt || 'Image' }
                  },
                },
                fields: [
                  {
                    type: 'image',
                    name: 'src',
                    label: 'Image',
                    required: true,
                  },
                  {
                    type: 'string',
                    name: 'alt',
                    label: 'Alt Text',
                  },
                  {
                    type: 'string',
                    name: 'link',
                    label: 'Image Link (URL)',
                  },
                ],
              },
              {
                type: 'boolean',
                name: 'showDivider',
                label: 'Show Divider After Resource',
              },
            ],
          },
        ],
      },
    ],
  },
})
