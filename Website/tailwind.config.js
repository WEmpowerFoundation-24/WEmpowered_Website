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
        'Group-Picnic':"url('./src/assets/Home_Assets/GroupLunchPhoto.png')"
      },
      fontFamily:{
        'Gilroy-600': ['Gilroy-Regular', 'sans-serif'],
        'Gilroy-400': ['Gilroy-Light', 'sans-serif'],
        'Gilroy-500': ['Gilroy-Medium', 'sans-serif'],
        'Gilroy-700': ['Gilroy-SemiBold', 'sans-serif'],
        'Gilroy-800': ['Gilroy-Bold', 'sans-serif'],
        'Gilroy-900': ['Gilroy-ExtraBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}