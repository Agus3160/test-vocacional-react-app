/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear:{
          "0%": { opacity: 0, clipPath:"inset(100% 100% 0% 0%)"},
          "100%": { opacity: 1, clipPath:"inset(0% 0% 0% 0%)"},
        },
        pulseScale:{
          "0%": { transform: "translateX(0) scale(1)" },
          "50%": { transform: "translateX(0%) scale(0.85)"  },
          "100%": { transform: "translateX(0) scale(1)" },  
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        appear: "appear 0.5s ease-in-out forwards",
        pulseScale: "pulseScale 0.5s ease-in-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

