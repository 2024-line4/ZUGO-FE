import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        footerBg: "var(--footer-bg-color)",

        gray1: "var(--gray1-color)",
        blue1: "var(--blue1-color)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
