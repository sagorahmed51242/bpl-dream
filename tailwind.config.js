/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      outlineOffset: {
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '16': '16px', // Define as many values as needed
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

