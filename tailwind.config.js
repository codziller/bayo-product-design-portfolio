/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

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
        "40px",
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
      "2xl": ["24px"],
      "22px": ["22px"],
      "xl-alt": ["20px"],
      xl: ["18px"],
      lg: ["16px"],
      15: ["15px"],
      base: ["14px"],
      sm: ["12px"],
      xs: ["10px"],
      xxs: ["8px"],
      xxxs: ["7px"],
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        nunito_sans: ["var(--font-nunito_sans)", ...fontFamily.sans],
      },
      boxShadow: {
        custom: "0px 0px 10px rgba(225, 231, 242, 0.8)",
      },
      colors: {
        blue: {
          DEFAULT: "#0081EB",
          disabled: "#CECBF7",
          hover: "#1921C8",
          "outline-hover": "#eeedfe",
          50: "#F2F8FF",
          alt: "#70BAF2",
          backdrop: "rgba(255, 255, 255, 0.02)",
          dull: "rgba(84, 68, 242, 0.1)",
          clear: "rgba(84, 68, 242, 0.11)",
          border: "rgba(84, 68, 242, 0.21)",
          textHover: "#9990FA",
          bright: "#1A8DFF",
        },
        grey: {
          DEFAULT: "#C1C1C1",
          dark: "#101626",
          blue: "#54627E",
          alt: "#C2C2C2",
          text: "#65717C",
          whitesmoke: "#f5f6fa",
          border: "#B0B6C3",
          light: "#D0D0D2",
          backdrop: "#7c7c7c",
          ghostwhite: "#f5f6fadc",
          bordercolor: "#E1E1E1",
          light: "#e1e1e1",
          fade: "#444444",
          fadeLight: "#F2F2F2",

          darker: "#101626",
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
          light: "#3D4451",
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

      backgroundImage: {
        hero: "url('/iphone_14_pro_space_black_mockup.png')",
        app_store: "url('/app_store.svg')",
        google_play: "url('/google_play.svg')",
        pattern_bg: "url('/pattern_bg.svg')",
        pattern_bg_2: "url('/pattern_bg_2.svg')",
        iphone_14_one: "url('/iphone_14_one.png')",
        iphone_14_two: "url('/iphone_14_two.png')",
        iphone_14_three: "url('/iphone_14_three.png')",
        iphone_14_vendor_one: "url('/iphone_14_vendor_one.png')",
        iphone_14_vendor_two: "url('/iphone_14_vendor_two.png')",
        iphone_14_vendor_three: "url('/iphone_14_vendor_three.png')",
        pattern_blue_bg: "url('/pattern_blue.svg')",
      },

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
