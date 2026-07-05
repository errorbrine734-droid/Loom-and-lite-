import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#06B6D4",
        accent: "#A855F7",
        background: "#050816",
        surface: "rgba(255,255,255,0.08)"
      },

      backdropBlur: {
        xs: "2px"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },

  plugins: []
};

export default config;
