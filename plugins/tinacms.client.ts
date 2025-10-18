import { defineNuxtPlugin } from '#app'
// TinaCloud import disabled - not needed for static content loading
// import { TinaCloud } from 'tinacms'

export default defineNuxtPlugin((nuxtApp) => {
  // TinaCMS plugin disabled to prevent import errors
  // Content is loaded directly from JSON files
  // TinaCMS admin panel still works through /admin route
  
  // const config = useRuntimeConfig()
  // const tina = new TinaCloud({
  //   clientId: config.public.tinaClientId as string || null,
  //   branch: config.public.githubBranch as string || 'main',
  //   token: config.public.tinaToken as string || null,
  // })
  // nuxtApp.provide('tina', tina)

  return {
    provide: {
      tina: null
    }
  }
})

