/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#C2C2C2",
        Secondary: "#D74A4A",
        Accent: "#1C1C1C",
        Neutral: "#E5C07B",
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
