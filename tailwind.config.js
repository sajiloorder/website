/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 👇 Add your custom theme settings here
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        text: "var(--color-text)",
      },
      fontSize: {
        xxs: "0.625rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
      },
      screens: {
        xs: "480px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
