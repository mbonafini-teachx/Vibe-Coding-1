/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#f5f5dc", // Beige for parchment background
        "faded-gold": "#d4af37", // Gold trim
        "vintage-text": "#6b4423", // Faded brown text
      },
      fontFamily: {
        serif: ["Georgia", "serif"], // For elegant, old-world text
      },
    },
  },
  plugins: [],
};
