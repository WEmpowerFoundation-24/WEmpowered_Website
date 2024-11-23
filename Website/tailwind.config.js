/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Class-student':"url('./src/assets/Home_Assets/HomePageImage.png')",
      },
      fontFamily:{
        'Gilroy': ['Gilroy-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}