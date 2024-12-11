/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  important: '#app',
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}