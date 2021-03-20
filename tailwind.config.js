const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      foreground: "#000000",
      white: "#FFFFFF",
      selection: "#79FFE1",
      secondary: "#666666",
      link: "#0070F3",
      border: "#EAEAEA",
      code: "#F81CE5",
      cyan: "#50E3C2",
      purple: "#F81CE5",
      alert: "#FF0080",
      violet: "#7928CA",
      accents: {
        DEFAULT: "#FAFAFA",
        two: "#FAFAFA",
        three: "#999999",
        four: "#888888",
        five: "#666666",
        six: "#444444",
        seven: "#333333",
        eight: "#111111",
      },
      success: {
        light: "#3291FF",
        DEFAULT: "#0070F3",
        dark: "#0761D1",
      },
      error: {
        light: "#FF1A1A",
        DEFAULT: "#EE0000",
        dark: "#C50000",
      },
      warning: {
        light: "#F7B955",
        DEFAULT: "#F5A623",
        dark: "#AB570A",
      },
    },
  },
  variants: {},
  plugins: [],
};
