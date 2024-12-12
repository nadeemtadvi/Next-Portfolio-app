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
        purplereg:"#fff",
        pinkreg:"#FFB2EF",
        redreg:"#FF7A5C",
        yellowreg:"#F4D738",
        greenreg:"#90EE90",
        skyreg:"#87CEEB",

        purplelight:"#e9e9e9",
        pinklight:"#FCDFFF",
        redlight:"#F8D6B3",
        yellowlight:"#FDFD96",
        greenlight:"#B5D2AD",
        skylight:"#DAF5F0",
        
        yellowmedium:"#FFDB58",
        blackshadow:"#323130",
        borderblack:"#323130",

        darkbgcolor:"#3b3b3b",
        darktext:"#8f8f8f",
        darkytext:"#252525",
        darkhtext:"#ababab",

        // mainColor: "#1623B2",
        mainColor: "#323130",
        mainColorten:"#e7e9f675",
        titletext:"#323130",
        subtext:"#323433",
        blurtext:"#92929D",
        sectionColor:"#f8f8ff73",
         
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
