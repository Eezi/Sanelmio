/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(262, 46%, 62%)',
        primaryDark: '#7951BE',
        secondary: 'hsl(33, 100%, 68%)',
      }
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
