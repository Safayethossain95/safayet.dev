/** @type {import('tailwindcss').Config} */

const { transform } = require('next/dist/build/swc');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans-serif"], // Added 'sans-serif' for better fallback
      monospace: ["DM Mono", "monospace"],
    },
    extend: {
      boxShadow: {
        'custom-blue': '0px 0px 30px 4px rgba(0, 199, 255, 0.7)',
      },
      colors: {
        bg: "#000a1f",
        "fun-gray-light": "#b2bbcf",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#00c7ff",
        "fun-pink-darker": "#000f2e",
        "fun-pink-darkest": "#000c24",
        "fun-pink-dark": "#192742",
        "fun-pink-light": "#009ac5",
      },
      rotate: {
        '360': '360deg', // This is okay for custom rotation
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeinit: {
          '0%': { opacity: '0' ,scale:'2'},
          '100%': { opacity: '1',scale:'1' },
        },
      },
     
      animation: {
        'upAndDown': 'fadeIn 3s ease-out infinite',
        'fadeInIt': 'fadeinit 3s ease-out',
         // This is well defined
      },
      willChange: {
        'projectCard': 'border-color, opacity, transform', // This is correctly defined for optimization
      },
    },
  },
  plugins: [],
};
