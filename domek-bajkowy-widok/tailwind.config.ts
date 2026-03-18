import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0a1f14",
          900: "#0d2a1b",
          800: "#163d28",
          700: "#1b4d32",
          600: "#2d6a4f",
          500: "#40916c",
          400: "#52b788",
          300: "#74c69d",
          200: "#95d5b2",
          100: "#b7e4c7",
          50: "#d8f3dc",
        },
        gold: {
          DEFAULT: "#e9c46a",
          dark: "#c49a3c",
          light: "#f4d58d",
        },
        cream: {
          DEFAULT: "#faf8f4",
          dark: "#f0ece3",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-left": "slideLeft 0.7s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "ken-burns": "kenBurns 8s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        kenBurns: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
