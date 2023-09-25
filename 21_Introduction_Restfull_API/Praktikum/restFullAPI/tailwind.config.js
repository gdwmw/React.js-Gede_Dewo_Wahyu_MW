/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tailwindGreen: "#11cdb6",
        tailwindGreenSecondary: "#0eab98",
        tailwindBlue: "#1ea3bc",
        tailwindBlueSecondary: "#07859d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
