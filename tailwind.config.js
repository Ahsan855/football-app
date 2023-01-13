/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a3e635",

          secondary: "#1D1F23",

          accent: "#878F99",

          neutral: "#1C1F23",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
