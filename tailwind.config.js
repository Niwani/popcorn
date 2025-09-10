export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ["Playfair Display", "serif"],
        },
        backgroundImage: {
          'world-map': "url('src/assets/worldmap.jpeg')"
        }
      },
    },
    plugins: [],
  }
  