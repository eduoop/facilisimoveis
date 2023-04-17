/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'sm': { 'max': '640px' },
        'md': { 'max': '768px' },
        'lg': { 'max': '1024px' },
        'xl': { 'max': '1280px' },
        '2xl': { 'max': '1536px' }
      },
      fontFamily: {
        'display': ['Nunito Sans',],
      },
      colors: {
        'primary': "#ffaa00",
        'secondary': "#ffb628"
      },
      backgroundImage: {
        'banner-sm': "url('https://www.imagemhost.com.br/images/2023/04/16/correct-mobile.png')",
        'banner-lg': "url('https://www.imagemhost.com.br/images/2023/04/16/Site-more.png')",
        'banner-md': "url('https://www.imagemhost.com.br/images/2023/04/16/site-laptop.png')",
        'banner-tablet': "url('https://www.imagemhost.com.br/images/2023/04/16/site-tablet.png')",
      }
    },
  },
  plugins: [],
}