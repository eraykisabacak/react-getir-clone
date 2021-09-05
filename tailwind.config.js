module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
        'navbar-text': '#dbdbff',
        'fb-text': '#e7eaf1',
        'line-color': '#fafafa',
        'categories-hover': '#f3f0fe',
        'color-black': '#191919',
        'color-gray-dark': '#3e3e3e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
