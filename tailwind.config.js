/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1114px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#fff",
      primary: {
        main: "#0040FE",
        50: "#E6ECFF",
        100: "#B0C4FF",
        200: "#8AA7FF",
        300: "#547FFE",
        400: "#3366FE",
        500: "#0040FE",
        600: "#003AE7",
        700: "#002DB4",
        800: "#00238C",
        900: "#001B6B",
      },
      gray: {
        main: "#808080",
        50: "#F2F2F2",
        100: "#D8D8D8",
        200: "#C5C5C5",
        300: "#AAAAAA",
        400: "#999999",
        500: "#808080",
        600: "#747474",
        700: "#5B5B5B",
        800: "#464646",
        900: "#363636",
        950: "#1C1C1C",
      },
      red: {
        main: "#BF181D",
        50: "#F9E8E8",
        100: "#EBB7B9",
        200: "#E29597",
        300: "#D46468",
        400: "#CC464A",
        500: "#BF181D",
        600: "#AE161A",
        700: "#881115",
        800: "#690D10",
        900: "#500A0C",
      },
      green: {
        main: "#3B9212",
        50: "#EBF4E7",
        100: "#C2DDB6",
        200: "#A5CD92",
        300: "#7CB660",
        400: "#62A841",
        500: "#3B9212",
        600: "#368510",
        700: "#2A680D",
        800: "#20500A",
        900: "#193D08",
      },
      purple: {
        50: "#f2e6ff",
        100: "#d8b0ff",
        200: "#c58aff",
        300: "#aa54ff",
        400: "#9933ff",
        500: "#8000ff",
        600: "#7400e8",
        700: "#5b00b5",
        800: "#46008c",
        900: "#36006b",
      },

      yellow: {
        main: "#D19D00",
        50: "#FAF5E6",
        100: "#F1E1B0",
        200: "#EAD28A",
        300: "#E0BD54",
        400: "#DAB133",
        500: "#D19D00",
        600: "#BE8F00",
        700: "#946F00",
        800: "#735600",
        900: "#584200",
      },
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    fontSize: {
      "Banner/52/Bold": [
        "52px",
        {
          lineHeight: "78px",
          fontWeight: "700",
        },
      ],
      "Banner/52/Regular": [
        "52px",
        {
          lineHeight: "78px",
          fontWeight: "400",
        },
      ],
      "Banner/44/Bold": [
        "44px",
        {
          lineHeight: "66px",
          fontWeight: "700",
        },
      ],
      "Banner/44/Regular": [
        "44px",
        {
          lineHeight: "66px",
          fontWeight: "400",
        },
      ],
      "HeadLine/36/Bold": [
        "36px",
        {
          lineHeight: "54px",
          fontWeight: "700",
        },
      ],
      "HeadLine/36/Regular": [
        "36px",
        {
          lineHeight: "54px",
          fontWeight: "400",
        },
      ],
      "HeadLine/32/ExtraBold": [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "800",
        },
      ],
      "HeadLine/32/Bold": [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "700",
        },
      ],
      "HeadLine/28/Bold": [
        "28px",
        {
          lineHeight: "48px",
          fontWeight: "700",
        },
      ],
      "HeadLine/28/Light": [
        "28px",
        {
          lineHeight: "48px",
          fontWeight: "300",
        },
      ],
      "HeadLine/28/Regular": [
        "28px",
        {
          lineHeight: "48px",
          fontWeight: "400",
        },
      ],
      "HeadLine/24/Regular": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "400",
        },
      ],
      "HeadLine/24/Medium": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "500",
        },
      ],
      "HeadLine/24/ExtraBold": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "800",
        },
      ],
      "Banner/44/ExtraBold": [
        "44px",
        {
          lineHeight: "66px",
          fontWeight: "800",
        },
      ],
      "HeadLine/24/Bold": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "700",
        },
      ],
      "Title/20/Bold": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "700",
        },
      ],
      "Title/20/Regular": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "400",
        },
      ],
      "Title/16/Regular": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "Title/16/Bold": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "700",
        },
      ],
      "Title/14/Regular": [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "400",
        },
      ],
      "Title/14/bold": [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "700",
        },
      ],
      "SubHeading/18/Bold": [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "700",
        },
      ],
      "SubHeading/18/Regular": [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "400",
        },
      ],
      "BodyText/16/Bold": [
        "16px",
        {
          lineHeight: "32px",
          fontWeight: "700",
        },
      ],
      "BodyText/16/Medium": [
        "16px",
        {
          lineHeight: "32px",
          fontWeight: "500",
        },
      ],
      "BodyText/16/Regular": [
        "16px",
        {
          lineHeight: "32px",
          fontWeight: "400",
        },
      ],
      "BodyText/16/Light": [
        "16px",
        {
          lineHeight: "32px",
          fontWeight: "300",
        },
      ],
      "BodyText/14/Bold": [
        "14px",
        {
          lineHeight: "26px",
          fontWeight: "700",
        },
      ],
      "BodyText/14/Medium": [
        "14px",
        {
          lineHeight: "26px",
          fontWeight: "500",
        },
      ],
      "BodyText/14/Regular": [
        "14px",
        {
          lineHeight: "26px",
          fontWeight: "400",
        },
      ],
      "BodyText/14/Light": [
        "14px",
        {
          lineHeight: "26px",
          fontWeight: "300",
        },
      ],
      "BodyText/12/Bold": [
        "12px",
        {
          lineHeight: "22px",
          fontWeight: "700",
        },
      ],
      "BodyText/12/Medium": [
        "12px",
        {
          lineHeight: "22px",
          fontWeight: "500",
        },
      ],
      "BodyText/12/Regular": [
        "12px",
        {
          lineHeight: "22px",
          fontWeight: "400",
        },
      ],
      "BodyText/12/Light": [
        "12px",
        {
          lineHeight: "22px",
          fontWeight: "300",
        },
      ],
      "Body-OneLine/16/Bold": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "700",
        },
      ],
      "Body-OneLine/16/Medium": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      "Body-OneLine/16/Regular": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "Body-OneLine/16/Light": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "300",
        },
      ],
      "Body-OneLine/14/Bold": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "700",
        },
      ],
      "Body-OneLine/14/Medium": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],
      "Body-OneLine/14/Regular": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      "Body-OneLine/14/Light": [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "300",
        },
      ],
      "Body-OneLine/12/Bold": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "700",
        },
      ],
      "Body-OneLine/12/Medium": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "500",
        },
      ],
      "Body-OneLine/12/Regular": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      "Body-OneLine/12/Light": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "300",
        },
      ],
      "HelpText/11/Light": [
        "11px",
        {
          lineHeight: "16px",
          fontWeight: "300",
        },
      ],
      "HelpText/11/Regular": [
        "11px",
        {
          lineHeight: "16px",
          fontWeight: "400",
        },
      ],
      chequeText: [
        "10px",
        {
          lineHeight: "16px",
          fontWeight: "700",
        },
      ],
      claimText: [
        "10px",
        {
          lineHeight: "10px",
          fontWeight: "700",
        },
      ],
      smallchequeText: [
        "8px",
        {
          lineHeight: "16px",
          fontWeight: "700",
        },
      ],
    },
    boxShadow: {
      button_sm_hover:
        "1px 1px 2.8px 0px rgba(0, 0, 0, 0.10), -1px 1px 15px 1px rgba(0, 0, 0, 0.10)",
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
