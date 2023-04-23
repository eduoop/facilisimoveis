const { mauve, violet } = require('@radix-ui/colors');

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
        'secondary': "#ffb628",
        'gray-primary': "#3A3A3A",
        ...mauve,
        ...violet,
      },
      backgroundImage: {
        'banner-sm': "url('https://www.imagemhost.com.br/images/2023/04/16/correct-mobile.png')",
        'banner-lg': "url('https://www.imagemhost.com.br/images/2023/04/16/Site-more.png')",
        'banner-md': "url('https://www.imagemhost.com.br/images/2023/04/16/site-laptop.png')",
        'banner-tablet': "url('https://www.imagemhost.com.br/images/2023/04/16/site-tablet.png')",
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}