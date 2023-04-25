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
        cabinet_grotesk: ["Cabinet Grotesk", ...fontFamily.sans],
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
          label: "#6B7188",
          backdrop: "#7c7c7c",
          ghostwhite: "#f5f6fadc",
          bordercolor: "#E1E1E1",
          light: "#e1e1e1",
          fade: "#8A93A6",
          fadeLight: "#F2F2F2",
          disabled: "#E3E6EA",
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
          DEFAULT: "#222222",
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
        xlg: "1100px",
      },
      margin: {
        "-85px": "-85px",
        "-60px": "-60px",
      },

      backgroundImage: {
        hero: "url('/images/bayo-img.png')",
        "virtual-account": "url('/images/virtual-account.png')",
        "payment-link": "url('/images/payment-link.png')",
        "3d-exploration": "url('/images/3d-exploration.png')",
        eco: "url('/images/eco.png')",
        google: "url('/images/google.png')",
        kokun: "url('/images/kokun.png')",

        "virtual-account-hero": "url('/images/virtual-account-hero.png')",
        "va-1": "url('/images/va-1.png')",
        "va-2": "url('/images/va-2.png')",
        "va-3": "url('/images/va-3.png')",
        "pl-hero": "url('/images/pl-hero.png')",
        "pl-1": "url('/images/pl-1.png')",
        "pl-2": "url('/images/pl-2.png')",
        "pl-3": "url('/images/pl-3.png')",

        "hero-about": "url('/images/hero-about.png')",
        "pl-desktop": "url('/images/pl-desktop.png')",
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
