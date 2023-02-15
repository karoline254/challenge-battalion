tailwind.config = {
  content: [
    './src/*.{html,js}',
    './index.html',
  ],
  theme: {
    screens: {
      'mb': '375px',
      'des': '1440px',
    },
    extend: {
      colors: {
        test: "#da373d",
        darkBlue:'hsl(229, 31%, 21%)',
        grB: 'hsl(229, 8%, 60%)',
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
      },
      fontFamily: {
        Rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
}