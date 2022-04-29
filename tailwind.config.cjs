module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: () => ({
        primary: '#5F4B4B',
        secondary: '#6B7A6B',
        info: '#0E670E',
        'info-light': '#D8F3DB',
        main: '#92DD99',
        shadow: '#8A9E8A'
      })
    }
  },
  plugins: []
};
