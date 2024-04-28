/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'laptop-mobile': "url('/src/assets/images/laptop_mobile.jpg')",
        'laptop-tablet': "url('/src/assets/images/laptop_tablet.jpg')",
        'laptop-desktop': "url('/src/assets/images/laptop_desktop.jpg')",
      },
      colors: {
        backgroundPrimary: '#f8f7f4',
        backgroundFooter: '#d3d2d2',
        backgroundThird: '#717171',
        backgroundFourth: '#f0f0f0',
        backgroundDot: '#bbb',
        backgroundButton: '#a43bc4',
        backgroundButtonHover: '#9133ad',
        borderColor: '#ececec',
        color: '#434746',
      },
      boxShadow: {
        button: '2px 2px 10px rgb(182, 180, 180)',
      },
      fontFamily: {
        fontSegoe: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        fontHandlee: ['Handlee', 'cursive'],
        fontDancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
