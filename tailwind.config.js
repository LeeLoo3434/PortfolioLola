module.exports = {
  content: [
    './src/**/*.js',
    './public/index.html',
    // Add other source files you want to scan
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Example custom color
      },
      borderRadius: {
        xl: '1rem', // Example custom border radius
      },
    },
  },
  plugins: [
    require('postcss-nesting'), // Enable CSS nesting before tailwindcss
    require('tailwindcss'), // Keep this line
    // Add other Tailwind CSS plugins if needed
  ],
};
