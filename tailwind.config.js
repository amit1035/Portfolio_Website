/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          400: "#6366F1",
          500: "#4F46E5",
          600: "#4338CA",
          700: "#3730A3",
        },
        darkBg: "#121826",
        darkBg2: "#1F2937",
        grayLight: "#D1D5DB",
        grayDark: "#374151",
        glassDark: "rgba(31, 31, 31, 0.6)", // for glassmorphism
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "#6366F1" }, // indigo-400
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        "indigo-glow": "0 0 15px 3px rgba(99, 102, 241, 0.5)",
        glow: "0 0 10px rgba(99, 102, 241, 0.6)", // soft glow
      },
    },
  },
  plugins: [],
};
