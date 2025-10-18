import { defineNuxtPlugin } from '#app'
import { TinaCloud } from 'tinacms'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  // Initialize TinaCMS Cloud client for visual editing
  const tina = new TinaCloud({
    clientId: config.public.tinaClientId as string || null,
    branch: config.public.githubBranch as string || 'main',
    token: config.public.tinaToken as string || null,
  })

  // Provide TinaCMS to the app
  nuxtApp.provide('tina', tina)

  return {
    provide: {
      tina
    }
  }
})

