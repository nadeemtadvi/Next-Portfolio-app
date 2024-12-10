import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: 'hsl(0, 0%, 12%)',
        bgsecondary: 'hsl(0, 0%, 19%)',
        colorprimary: 'hsl(0, 0%, 100%)',
        colorsecondary: 'hsl(0, 0%, 62%)',
        cardshadow: 'hsla(0, 0%, 0%, 0.4)',
        inputbg: 'hsl(0, 0%, 16%)',
        shadow1: '10px 10px 40px hsla(0, 0%, 0%, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
