import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Use local mode for both development and production
  clientId: "local",
  token: "local",
  
  // Enable local content for both dev and production
  localContent: true,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  // Disable SDK generation for static builds
  client: {
    skip: true,
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        templates: [
          {
            name: "standardPage",
            label: "Standard Page",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Page Title",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Main Heading",
                required: true,
              },
              {
                type: "string",
                name: "subheading",
                label: "Subheading",
              },
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
                description: "Background image for the page header",
              },
              {
                type: "rich-text",
                name: "body",
                label: "Page Content",
                isBody: true,
              },
            ],
          },
          {
            name: "aboutPage",
            label: "About Page",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Page Title",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Main Heading",
                required: true,
              },
              {
                type: "string",
                name: "subheading",
                label: "Subheading",
              },
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
                description: "Background image for the page header",
              },
              {
                type: "string",
                name: "contentTitle",
                label: "Content Title",
                description: "Main title for the content section",
              },
              {
                type: "object",
                name: "aboutImage",
                label: "About Image",
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Image",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "width",
                    label: "Width (px)",
                    description: "Leave empty for auto width",
                  },
                  {
                    type: "number",
                    name: "height",
                    label: "Height (px)",
                    description: "Leave empty for auto height",
                  },
                ],
              },
              {
                type: "rich-text",
                name: "body",
                label: "Page Content",
                isBody: true,
              },
            ],
          },
          {
            name: "trainingResources",
            label: "Training Resources Page",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Page Title",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Main Heading",
                required: true,
              },
              {
                type: "string",
                name: "subheading",
                label: "Subheading",
              },
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
                description: "Background image for the page header",
              },
              {
                type: "rich-text",
                name: "body",
                label: "Page Content",
                isBody: true,
              },
              {
                type: "object",
                name: "resources",
                label: "Resources",
                list: true,
                itemProps: (item) => {
                  return { label: item?.title || "New Resource" }
                },
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Resource Title",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "links",
                    label: "Links",
                    list: true,
                    itemProps: (item) => {
                      return { label: item?.text || "New Link" }
                    },
                    fields: [
                      {
                        type: "string",
                        name: "text",
                        label: "Link Text",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                        required: true,
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "images",
                    label: "Images",
                    list: true,
                    itemProps: (item) => {
                      return { label: item?.alt || item?.src?.split('/').pop() || "New Image" }
                    },
                    fields: [
                      {
                        type: "image",
                        name: "src",
                        label: "Image",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "alt",
                        label: "Alt Text",
                      },
                      {
                        type: "string",
                        name: "link",
                        label: "Image Link (optional)",
                      },
                    ],
                  },
                  {
                    type: "boolean",
                    name: "showDivider",
                    label: "Show Divider",
                    default: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
