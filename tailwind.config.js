/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#8c0327",
        
"secondary": "#d75050",
        
"accent": "#d59b6c",
        
"neutral": "#836b5d",
        
"base-100": "#f2f2f2",
        
"info": "#42aebd",
        
"success": "#489380",
        
"warning": "#eb8014",
        
"error": "#e01a2e",
        },
      },
    ],
  },

}