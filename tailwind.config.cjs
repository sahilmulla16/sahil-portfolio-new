/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        "text-primary": "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        stroke: "hsl(var(--stroke))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Instrument Serif', 'serif'],
      },
      animation: {
        'role-fade-in': 'role-fade-in 0.5s ease-out forwards',
      }
    }
  },
  plugins: []
}