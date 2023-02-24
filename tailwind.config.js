module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.75rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },

      screens: {
        "2xl": "1475px", // 1475px + 2*6rem = 1283px container (so like in Figma)
      },

      colors: {
        primary: "#1F1C1B;",
        secondary: "#C7C7C9",
        text: "#4d5154",
        dark: "#110419",
        light: "#F9F9F9",
      },

      fontFamily: {
        header: ["manrope", "sans-serif"],
        text: ["manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
