/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        onboarding: "url('./src/assets/image/onboarding.svg')",
      },

      colors: {
        "highlight-100": "#A4AFCE",
        "highlight-200": "#FEBA6A",
        "highlight-300": "#FEBA6A",
        login: {
          100: "#FFEBCC",
        },
        sidebar: {
          active: "#FF9C27",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["darkerGrotesque-Bold", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
