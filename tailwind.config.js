/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'script': ['Brush Script MT', 'cursive'],
      },
      colors: {
        // 紅葉 (autumn leaves) color palette
        'maple-red': '#B91C1C',      // Deep maple red
        'golden-amber': '#F59E0B',   // Golden amber
        'burnt-orange': '#EA580C',   // Burnt orange
        'warm-brown': '#A3681A',     // Rich warm brown
        'burgundy': '#991B1B',       // Deep burgundy
        'autumn-gold': '#FBBF24',    // Bright autumn gold
        'copper': '#D97706',         // Copper/bronze tone
        'cream': '#FEF7ED',          // Warm cream background
      }
    },
  },
  plugins: [],
}
