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
        // Light Theme Colors
        purplereg: "#9B64D6", // Complementary purple tone for branding
        pinkreg: "#FFB2EF",
        redreg: "#ffb16e",
        yellowreg: "#F4D738",
        greenreg: "#90EE90",
        skyreg: "#87CEEB",
  
        purplelight: "#FBF9FA",
        pinklight: "#FCDFFF",
        redlight: "#F8D6B3",
        yellowlight: "#FDFD96",
        greenlight: "#B5D2AD",
        skylight: "#DAF5F0",
        
        yellowmedium: "#FFDB58",
        blackshadow: "#323130",
        borderblack: "#323130",
  
        // Dark Theme Colors
        darkbgcolor: "#3b3b3b", // Dark background
        darktext: "#EAEAEA", // Light text on dark background for better contrast
        darkytext: "#D1D1D1", // Slightly lighter dark text
        darkhtext: "#ababab", // Light hover text color
  
        // Main Branding Color and Accent
        mainColor: "#323130", // Neutral dark color for text and elements
        mainColorten: "#e7e9f675", // Semi-transparent version for background or hover
        titletext: "#ffffff", // White title for light contrast
        subtext: "#000", // Light secondary text color
        blurtext: "#92929D", // Softer gray text for less important content
        sectionColor: "#f8f8ff73", // Soft section background with opacity
         
        // Dark Theme Branding
        darkmainColor: "#a7ff00", // Bright green for dark mode accents (calls to action)
        darkmainColorten: "#a7ff0030", // Semi-transparent dark mode green
        darktitletext: "#F8F8F8", // Lighter title color for dark mode
        darksubtext: "#979696", // Dark mode secondary text
        darkblurtext: "#7D7D85", // Slightly faded blur text
        darksectionColor: "#141414", // Very dark background for dark mode
      },
    },
  },
  
  plugins: [],
};
export default config;
