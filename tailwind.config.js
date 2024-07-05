/** @type {import('tailwindcss').Config} */

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

function svgToDataUri(svgString) {
  // Remove newlines and unnecessary whitespace
  let cleanedSvgString = svgString
    .replace(/[\r\n]+/g, "") // Remove newlines
    .replace(/\s\s+/g, " ") // Replace multiple spaces with a single space
    .replace(/>\s+</g, "><"); // Remove spaces between tags

  // Encode special characters
  cleanedSvgString = cleanedSvgString
    .replace(/"/g, "'") // Replace double quotes with single quotes
    .replace(/%/g, "%25") // Percent
    .replace(/#/g, "%23") // Hash
    .replace(/{/g, "%7B") // Open brace
    .replace(/}/g, "%7D") // Close brace
    .replace(/</g, "%3C") // Less than
    .replace(/>/g, "%3E"); // Greater than

  // Add the SVG prefix
  const dataUri = `data:image/svg+xml,${cleanedSvgString}`;

  return dataUri;
}

module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Add this line if you have src directory as well
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#29abe2",
        "fade-blue": "#009393",
        "teal-blue": "#6ceef6",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        phone: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        monitor: "1536px",
        "phone-max": { max: "640px" },
        "tablet-max": { max: "768px" },
        "laptop-max": { max: "1024px" },
        "desktop-max": { max: "1280px" },
        "screen-max": { max: "1536px" },
      },
      gridTemplateRows: {
        main: "auto 1fr auto",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },
  ],
};
