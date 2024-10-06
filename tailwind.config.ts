import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      "fade-in": {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        },
    },
    "fade-out": {
        "0%": {
            opacity: 1
        },
        "100%": {
            opacity: 0
        },
    },
    },
  },
  plugins: [],
};
export default config;
