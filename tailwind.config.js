/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "welcome-text": "#378295",
        "page-bg": "#F5F5F5",
        "home-text": "#FE7759",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-baloo)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
