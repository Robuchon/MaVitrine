/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#f5f5f4",
        Secondary: "#e986ed",
        Accent: "#211130",
        Neutral: "#fff200",
        Info: "#67e8f9",
        Success: "#4ade80",
        Warning: "#FFC700",
        Error: "#F00003",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
  ],
};
