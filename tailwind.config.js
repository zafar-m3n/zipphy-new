/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "skew-scroll": {
          "0%": {
            transform: "rotateX(20deg) rotateZ(-20deg) skewX(20deg)",
          },
          "100%": {
            transform: "rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateY(-100%)",
          },
        },
      },
      animation: {
        slider: "slide 15s linear infinite",
        shine: "shine 5s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        gradient: "gradient 8s linear infinite",
        float: "float 4s ease-in-out infinite",
        "skew-scroll": "skew-scroll 20s linear infinite",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
