/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xxxxs': '280px',
      'xxxs': '345px',
      'xxs': '376px',
      'xs': '420px',
      'ss': '480px',
      's': '580px',
      'sm': '640px',
      'md': '768px',
      'md-lg':'920px',
      'lg': '1024px',
      'lg-xl': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1628px',
      '4xl': '1700px',
    },
    extend: {
      backgroundImage:{
        'Class-student':"url('assets/Home_Assets/HomePageImage.png')",
        'Group-Picnic':"url('assets/Home_Assets/GroupLunchPhoto.png')",
        'Working_site_img':"url('assets/Home_Assets/Working_Site_image.png')",
        "Contact_US":"url('assets/Home_Assets/ContactUsPic.png')"
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