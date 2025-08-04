/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['MS ゴシック', 'MS Gothic', 'monospace'],
        'script': ['MS ゴシック', 'MS Gothic', 'monospace'],
      },
      colors: {
        // Wedding elegance color palette inspired by the couple's photo
        'charcoal': '#2D3748',          // Deep charcoal from tuxedo
        'stone': '#E2E8F0',             // Stone/beige from architecture
        'blush': '#F7FAFC',             // Soft blush pink from bouquet
        'blush-pink': '#FBB6CE',        // Deeper blush pink
        'sage': '#68D391',              // Sage green from bouquet foliage
        'sage-muted': '#9AE6B4',        // Muted sage green
        'pearl': '#F7FAFC',             // Pearl white from dress
        'silver': '#A0AEC0',            // Silver gray from bow tie
        'cream': '#FFFAF0',             // Warm cream background
        'champagne': '#FAF089',         // Champagne gold accent
      }
    },
  },
  plugins: [],
}
