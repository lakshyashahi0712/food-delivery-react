/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Ensures Tailwind scans all your component files
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8", // Custom primary color (blue)
          secondary: "#9333EA", // Custom secondary color (purple)
          accent: "#F59E0B", // Accent color (yellow)
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          heading: ["Poppins", "sans-serif"],
        },
        boxShadow: {
          soft: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
          strong: "0 6px 15px rgba(0, 0, 0, 0.2)", // Strong shadow
        },
        borderRadius: {
          xl: "12px",
          "2xl": "16px",
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // Optional: Styling for form inputs
      require("@tailwindcss/typography"), // Optional: Better typography styles
      require("@tailwindcss/aspect-ratio"), // Optional: Aspect ratio utilities
    ],
  };
  