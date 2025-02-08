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
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
