// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: 'rgb(137 74 255)', // Spotify's green accent
        darkBg: '#121212',        // Dark background
        cardBg: '#181818',        // Slightly lighter background for cards
        darkText: '#B3B3B3',      // Light gray text color
      },
    },
  },
  plugins: [],
}

