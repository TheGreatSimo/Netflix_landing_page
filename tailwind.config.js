/** @type {import('tailwindcss').Config} */
// color = #c11119
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", "sans-serif"]
      },
      colors: {
        customRed: '#c11119',
      },
    },
  },
  plugins: [],
};
