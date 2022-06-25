module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'semibold': ['Poppins', '600'],
      },
      colors: {
        'btn': '#1A00BB',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'monospace']
    }
  },
  plugins: [],
}
