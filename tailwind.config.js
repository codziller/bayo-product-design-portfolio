/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      helvetica: "'Helvetica Neue', 'sans-serif'",
    },
    fontSize: {
      "4xl": [
        "48px",
        {
          lineHeight: "1.5",
        },
      ],
      "3.8xl": [
        "38px",
        {
          lineHeight: "1.5",
        },
      ],
      "3.5xl": [
        "35px",
        {
          lineHeight: "1.5",
        },
      ],

      "3.2xl": [
        "30px",
        {
          lineHeight: "1.5",
        },
      ],
      "3xl": [
        "28px",
        {
          lineHeight: "1.5",
        },
      ],

      "2.5xl": [
        "26px",
        {
          lineHeight: "1.5",
        },
      ],
      "2xl": ["25px"],
      "22px": ["22px"],
      "xl-alt": ["20px"],
      xl: ["18px"],
      lg: ["16px"],
      base: ["14px"],
      sm: ["12px"],
      xs: ["10px"],
      xxs: ["8px"],
      xxxs: ["7px"],
    },
    extend: {
      fontFamily: {
        "helvetica-medium": "'Helvetica-Medium', 'sans-serif'",
      },
      boxShadow: {
        custom: "0px 0px 10px rgba(225, 231, 242, 0.8)",
      },
      colors: {
        blue: {
          DEFAULT: "#5444F2",
          disabled: "#CECBF7",
          hover: "#1921C8",
          "outline-hover": "#eeedfe",
          fade: "rgba(72, 55, 241, 0.3)",
          light: "#E6EBFF",
          backdrop: "rgba(255, 255, 255, 0.02)",
          dull: "rgba(84, 68, 242, 0.1)",
          clear: "rgba(84, 68, 242, 0.11)",
          border: "rgba(84, 68, 242, 0.21)",
          textHover: "#9990FA",
          bright: "#1A8DFF",
        },
        grey: {
          DEFAULT: "#C1C1C1",
          alt: "#C2C2C2",
          text: "#65717C",
          whitesmoke: "#f5f6fa",
          darksmoke: "#2E2E2E",
          border: "#e7e7e7",
          light: "#D0D0D2",
          backdrop: "#7c7c7c",
          ghostwhite: "#f5f6fadc",
          bordercolor: "#E1E1E1",
          light: "#e1e1e1",
          fade: "#444444",
          fadeLight: "#F2F2F2",
          dark: "#333333",
          darker: "#999999",
          darkest: "#151515",
          black: "#151718",
          greyLight: "#d0cfd128",
          dull: "#F8F8F8",
          white: "rgba(255, 255, 255, 0.8)",
          15: "rgba(255, 255, 255, 0.15)",
          144: "rgb(142, 142, 144)",
        },
        red: {
          DEFAULT: "#F3564D",
        },
        purple: {
          DEFAULT: "#EBF1FE",
        },
        green: {
          light: "#02BA81",
          warning: "#02BA81",
        },
        yellow: {
          DEFAULT: "#FFB413",
        },
        transparent: {
          DEFAULT: "transparent",
        },
        black: {
          DEFAULT: "#000000",
          light: "#272626",
          fade: "rgba(0, 0, 0, 0.3)",
        },
      },
      height: {
        13: "52px",
      },
      maxWidth: {
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "90%": "90%",
        "9xl": "100rem",
      },
      width: {
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "90%": "90%",
      },
      screens: {
        "4xs": "300px",
        "3xs": "380px",
        "2xs": "475px",
        xs: "540px",
        slg: "910px",
      },
      margin: {
        "-85px": "-85px",
        "-60px": "-60px",
      },
      backgroundImage: {},
      keyframes: {
        slide: {
          "0%": { transform: "translateY(40px)" },
          "100%": { transform: "translateY(50px)" },
        },
      },
      animation: {
        slide: "slide 0.5s forwards",
      },
    },
    minHeight: {
      460: "460px",
      360: "360px",
    },
    minWidth: {
      460: "460px",
      360: "360px",
    },
    borderWidth: {
      DEFAULT: "1px",
      "1/2": "0.5px",
    },
  },
  plugins: [],
};
