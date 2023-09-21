/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'onboarding': "url('./src/assets/image/onboarding.svg')"
      },
      fontFamily:{
        "sans": ['darkerGrotesque-Bold', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

