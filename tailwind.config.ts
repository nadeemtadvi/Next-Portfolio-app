import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // mainColor: "var(--)",
        // mainColorten:"var(--mainColorten)",
        // titletext:"var(--titletext)",
        // subtext:"var(--subtext)",
        // blurtext:"var(--blurtext)",
        mainColor: "#1623B2",
        mainColorten:"#e7e9f6",
        titletext:"#0B0C0C",
        subtext:"#323433",
        blurtext:"#92929D",
        sectionColor:"#f8f8ff",
      },
    },
  },
  plugins: [],
};
export default config;
