// import { subtle } from "crypto";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: " #A32323",
        foreground: "#F7E8E8",
      },
      fontFamily: {
        custom1: ['"Nyght serif dark"', 'sans-serif'],
        custom2:['Sitka Small Semibold', 'sans-serif' ],
      },
      fontSize: {
        'head': '3.5rem',
        'buttons': '2rem',
        'back': '1.2 rem',
        'subtle': '3 rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
