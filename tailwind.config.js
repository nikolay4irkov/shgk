// tailwind.config.js
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: "16px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "860px",
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      inset: {
        "1/2": "50%",
        4: "1rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        unset: "unset",
      },
      spacing: {
        14: "3.5rem",
        28: "7rem",
        35: "8.75rem",
        80: "20rem",
        72: "18rem",
        76: "19rem",
        44: "11rem",
        48: "12rem",
        96: "24rem",
        112: "28rem",
        140: "35rem",
      },
      backgroundColor: {
        orange: "#F9B130",
        grey: "#F2F2F2",
        mediumGrey: "#C4C4C4",
        darkGrey: "#3F3F3F",
        lightGrey: "#F0F0F0",
      },
      textColor: {
        grey: "#333333",
        orange: "#F9B130",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
    fontFamily: {
      proxima: ["Proxima Nova", "sans-serif"],
      gilroy: ["Gilroy", "sans-serif"],
      arial: ["Arial", "sans-serif"],
    },
  },
  variants: {
    translate: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"],
    textColor: ["responsive", "hover", "group-hover"],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["src/html/**/*.html", "src/js/**/*.js"],
  },
};
