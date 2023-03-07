/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      moon: "#5F5E66",
      sage: "#ACA297",
      ivory: "#EFEBE0",
    },

    fontFamily: {
      montserrat: "'montserrat', sans-serif;",
      archivo: "'archivo', sans-serif;",
      tangerine: "'tangerine', sans-serif;",
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
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
