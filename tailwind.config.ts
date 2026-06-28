import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#e6f0fb",
          100: "#cce1f7",
          200: "#99c3ef",
          300: "#66a5e7",
          400: "#3387df",
          500: "#1a6bc4",
          600: "#0d509a",
          700: "#0a3d75",
          800: "#072a50",
          900: "#03152a",
        },
        accent: {
          400: "#f59e0b",
          500: "#d97706",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
