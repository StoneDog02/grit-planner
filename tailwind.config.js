/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
      },
      backdropSaturate: {
        0: "0",
        50: ".5",
        100: "1",
        150: "1.5",
        200: "2",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      backdropFilter: ["responsive"],
      backdropBlur: ["responsive"],
      backdropSaturate: ["responsive"],
    },
  },
};
