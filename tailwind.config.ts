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
        mainColor: "#1623B2",
        mainColorten:"#e7e9f6",
        titletext:"#0B0C0C",
        subtext:"#323433",
        blurtext:"#92929D",
        sectionColor:"#f8f8ff",
         
        darkmainColor: "#a7ff00",
        darkmainColorten: "#a7ff0030",
        darktitletext: "#fff",
        darksubtext: "#979696",
        darkblurtext: "#7D7D85",
        darksectionColor: "#141414",
      },
     
  
    },
  },
  plugins: [],
};
export default config;
