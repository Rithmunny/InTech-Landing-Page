/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        orange: "#de9000",
        dimgray: "#6e6e6e",
        darkgoldenrod: "#c47800",
        darkturquoise: "#00d9f1",
        red: {
          100: "#ff2323",
          200: "rgba(255, 43, 46, 0.8)",
          300: "rgba(255, 4, 8, 0.8)",
        },
        mediumspringgreen: "#00cf68",
        forestgreen: "#00b54f",
        gainsboro: {
          100: "#e0e0e0",
          200: "#d9d9d9",
        },
        gray: "rgba(0, 0, 0, 0.83)",
        teal: "#46777c",
        silver: "#c7c7c7",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        inter: "Inter",
      },
      borderRadius: {
        "6xl": "25px",
        mini: "15px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "3xs": "10px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
