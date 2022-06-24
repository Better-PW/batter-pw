module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn': '#1A00BB',
      },
      darkMode: 'class',
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
    fontFamily: {
      'poppins':['Poppins','monospace']
    }
  },
  plugins: [],
}
