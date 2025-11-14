<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <nav :class="['navbar', { 'navbar--mobile-open': mobileMenuOpen }]">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <NuxtLink to="/" class="navbar-brand">
            <img :src="logoUrl" alt="Thinking In Common" @error="handleImageError">
          </NuxtLink>

          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-white hover:text-gray-200 focus:outline-none transition-colors"
            aria-label="Toggle navigation"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-1">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <NuxtLink to="/about" class="nav-link">About Me</NuxtLink>
            <NuxtLink to="/training-resources" class="nav-link">Training Resources</NuxtLink>
            <NuxtLink to="/seminars" class="nav-link">Seminars</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">Contact Me</NuxtLink>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-show="mobileMenuOpen" class="mobile-menu md:hidden mt-2">
          <div class="flex flex-col space-y-2">
            <NuxtLink to="/" class="nav-link" @click="mobileMenuOpen = false">Home</NuxtLink>
            <NuxtLink to="/about" class="nav-link" @click="mobileMenuOpen = false">About Me</NuxtLink>
            <NuxtLink to="/training-resources" class="nav-link" @click="mobileMenuOpen = false">Training Resources</NuxtLink>
            <NuxtLink to="/seminars" class="nav-link" @click="mobileMenuOpen = false">Seminars</NuxtLink>
            <NuxtLink to="/contact" class="nav-link" @click="mobileMenuOpen = false">Contact Me</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content area -->
    <div>
      <!-- Page Content -->
      <slot />
    </div>

    <!-- Footer -->
    <footer class="mt-auto">

      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <p class="copyright">Copyright &copy; Thinking In Common {{ currentYear }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import logoSvg from '~/assets/logo.svg'
import logoPng from '~/assets/logo.png'

const mobileMenuOpen = ref(false)
const currentYear = computed(() => new Date().getFullYear())

// Logo URL - using assets directory
const logoUrl = ref(logoSvg)

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = logoPng
}
</script>

