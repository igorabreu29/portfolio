import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e7eaee',
          100:'#b5bfcc',
          200:'#919fb3',
          300:'#5f7490',
          400:'#40597a',
          500:'#102f59',
          600:'#0f2b51',
          700:'#0b213f',
          800:'#091a31',
          900:'#071425',
        }
      }
    },
  },
  plugins: [],
}
export default config
