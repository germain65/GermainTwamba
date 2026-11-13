import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { paper: 'var(--paper)', ink: 'var(--ink)', mute: 'var(--mute)', rule: 'var(--rule)', accent: 'var(--accent)', tint: 'var(--tint)' },
    fontFamily: { serif: ['"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', 'Georgia', 'serif'], sans: ['ui-sans-serif', 'system-ui', '"Segoe UI"', 'sans-serif'] },
  } },
  plugins: [],
} satisfies Config;
