import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        kuning: '#DBA200',
        kuning2: '#FFC300',
        abu: '#EFF0F6',
        ungu: `#B680A2`,
        ungu2: `#834077`,
        pink1: `#FBECEF`,
        pink2: `#FDF4F4`,
        pink3: `#FDF4F4`,
        zinc: `#71717A`,
      },
      fontSize: {
        '10px': '10px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
