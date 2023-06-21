/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#2d2926',
        green: '#48a23f',
        brown: '#946037',
        lgreen: '#99c221',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        pic2: "url('./images/pic2.png')",
        pic3: "url('./images/pic3.png')",
        pic4: "url('./images/pic4.png')",
      }),
    },
  },
  plugins: [],
}

