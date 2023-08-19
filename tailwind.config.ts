import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "dark":"#191918",
        "light":"#FFFCFA",
        "grey":"#E2E0DF",
        "red":"#C3315D",
        "pink":"#ED7DC0",
        "orange":"#FF7A42",
        "green":"#00879F",
        "blue":"#32B8CB",
        "violet":"#7A60B3"
      }
    },
  },
  plugins: [],
}
export default config
