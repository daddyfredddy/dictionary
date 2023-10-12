/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kalas1": "#050505",
        "kalas2": "#1F1F1F",
        "kalas3": "#2D2D2D",
        "kalas4": "#3A3A3A",
        "kalas5": "#757575",
        "kalas6": "#E9E9E9",
        "kalas7": "#A445ED",
        "kalas8": "#FF5252",
        "kalas9": "#",
        "kalas10": "#",
        "kalas11": "#",
        "shado": "rgba(70, 96, 187, 0.20)",        
      }
    },
    fontFamily: {
      fonty: ["Inter", "sans-serif"],
      fonty1: ["Lora", "Serif"],
      fonty2: ["Inconsolata", 'monospace'],
    }
  },
  plugins: [],
}

