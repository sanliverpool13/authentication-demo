/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        avocado: "var(--color-avocado-100)",
        "border-grey": "var(--color-border-grey)",
        errorLight: "var(--color-error-red-light)",
        "error-red-dark": "var(--color-error-red-dark)",
        "black-hover": "var(--color-black-hover)",
      },
      width: {
        "inputs-and-button": "var(--w-inputs-and-button)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add Inter as the default sans font
      },
    },
  },
  plugins: [],
};
