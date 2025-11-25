import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          // ...
          colors: {
            primary: "#FDB003",
            secondary: "#F6C68B",
            button: "#F19D37",
            content1: "#FFF"
          },
        },
        dark: {
          // ...
          colors: {
            primary: "#FDB003",
            background: '#262c35',
            secondary: "#FBEFDF",
            button: "#F19D37",
            content1: "#000"
          },
        },
        // ... custom themes
      },
    })
  ],
}

module.exports = config;