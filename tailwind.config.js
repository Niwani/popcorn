export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        backgroundImage: {
          'world-map': "url('src/assets/worldmap.jpeg')"
        }
      },
    },
    plugins: [],
  }
  