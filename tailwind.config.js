import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#0085A1',
      },
    },
  },
  plugins: [typography],
}

