/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        integral_cf: ["Integral CF", "sans-serif"],
      },
      screens: {
        "max-md": { max: "767.98px" },
        "max-md579": { max: "579.98px" },
        "max-md654": { max: "653.98px" },
        "max-md1024": { max: "1023.98px" },
        "max-md1150": { max: "1149.98px" },
        "max-md1205": { max: "1204.98px" },
      },
      colors(theme) {
        return {
          gray: {
            ...theme.colors.gray,
            100: "#F0F0F0",
            200: "#CCCCCC",
            300: "#F2F0F1",
            400: "#F0EEED",
            600: "#606060",
          },
        };
      },
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "32px"],
      "3xl": ["40px", "40px"],
      "4xl": ["48px", "48px"],
      "5xl": ["64px", "64px"],
    },
  },
  plugins: [],
};
