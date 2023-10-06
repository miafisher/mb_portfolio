/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      moon: "#5F5E66",
      sage: "#ACA297",
      ivory: "#F2F2F2",
      coconut: "#F0EDE5",
      purple: "#7c459c",
      orange: "#f25c05",
    },

    fontFamily: {
      montserrat: "'montserrat', sans-serif;",
    },

    extend: {
      screens: {
        xxs: "374px",
        xs: "540px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1423px",
      },
      gridRow: {
        "span-16": "span 16 / span 16",
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
