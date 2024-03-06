import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(90deg, rgba(137,148,153,1) 0%, rgba(255,255,255,1) 100%)"
      },
      colors: {
        "casaSpecial": "#7fb2ad"
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
