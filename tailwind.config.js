/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.html"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            "clip-path": "inset(100% 100% 0 0)",
          },
          "100%": {
            opacity: "1",
            "clip-path": "inset(0 0 0 0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "0",
            transform: "translateX(200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        flowerOpen: {
          "0%": {
            transform: "scale(0.2) rotate(0deg)", // Start small and unrotated
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)", // Settle at full size and final position
            opacity: "1",
          },
        },
        "slide-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "circle-Open": {
          "0%": {
            opacity: "0",
            "clip-path": "circle(0% at 50% 50%)",
          },
          "100%": {
            opacity: "1",
            "clip-path": "circle(100% at 50% 50%)",
          },
        },
      },
      animation: {
        appear: "appear linear 2s",
        fadeIn: "fadeIn linear 2s",
        fadeOut: "fadeOut linear 2s",
        flowerOpen: "flowerOpen 2s forwards",
        "slide-left": "slide-left 2s forwards", // Adjust duration as needed
        "slide-right": "slide-right 2s forwards", // Adjust duration as needed
        "slide-bottom": "slide-bottom 2s forwards",
        "circle-open": "circle-Open 2s forwards",
        "slide-top": "slide-top 2s forwards",
        // "animation-timeline": "view()",
        // "animation-range": " entry 0% cover 40%",
      },
      boxShadow: {
        "custom-light": "2px 4px 16px -1px rgba(90,90,90,0.3)", // Light color shadow
        "custom-dark": "0 4px 6px -1px rgba(0, 0, 0, 0.75)", // Dark color shadow
        "custom-purple": "1px 4px 16px 1px rgba(128, 50, 128, 0.7)",
      },
      fontSize: {
        "xs-10": "10px", // Custom class for 10px font size
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      textColor: {
        "custom-gray": "#999999", // Custom text color for #999999
      },
      borderColor: {
        "dark-border": "#262626", // Custom class for the #262626 border color
      },
      backgroundImage: {
        header: "url('./assets/homepage/abstract-design.png')",
        value: "url('./assets/servicespage/Abstract-value.png')", // New image
        contact: "url('./assets/contactpage/abstract-contact.png')",
        "custom-gradient":
          "linear-gradient(134.79deg, rgba(112, 59, 247, 0.5) -0.01%, rgba(112, 59, 247, 0) 9.65%)",
        "linear-gradient":
          "linear-gradient(95.93deg, #262626 -14.82%, rgba(38, 38, 38, 0) 40.46%)",
        "linear-details":
          "linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)",
      },
      backgroundColor: {
        "color-all": "rgba(20, 20, 20, 1)", // Custom background color
        "custom-dark": "#1A1A1A", // Custom background color
        "custom-purple": "#703BF7",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-linear": {
          border: "1px solid",
          borderImage:
            "linear-gradient(to bottom right, rgba(112, 59, 247, 1) 12.99%, rgba(38, 38, 38, 1) 39%) 1",
          borderRadius: "inherit",
          zIndex: "-1",
        },
        ".scroll-animate": {
          animationTimeline: "view()",
          animationRange: "entry 0% cover 40%",
        },
      };

      // Add utilities with responsive and hover variants
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
