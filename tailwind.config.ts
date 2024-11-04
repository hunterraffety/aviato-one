import type { Config } from "tailwindcss";

const config: Config = {
      images: {
      domains: ["i.pravatar.cc"],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'corporate-blue': '#1E3A8A', // A deep blue
        'slate-blue': '#3B82F6',     // slate blue
        'light-grey': '#F3F4F6',     // light grey
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
