import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'yellow-barzim': {
          DEFAULT: 'hsl(var(--yellow-barzim-HSL) / <alpha-value>)',
          foreground: 'hsl(var(--deep-black) / <alpha-value>)',
        },
        barzimContrast: {
          DEFAULT: 'hsl(var(--yellow-barzim-HSL))',
          foreground: 'hsl(var(--deep-black))',
        },
        'slate-barzim': 'var(--slate-barzim)',
        'marfim-barzim': 'var(--marfim-barzim)',
        'deep-black': 'var(--deep-black)',
        'deep-vermillo': 'var(--deep-vermillo)',
        'tabs-background': 'var(--tabs-background)',
        'stroke-cervejas': 'var(--stroke-bg-cervejas)',
        'gray-cards': 'var(--bg-cards)',
        'black-fill': '--black-fill-cards',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      boxShadow: {
        'sutil-shadow': 'var(--sutil-shadow)',
        'sharp-shadow': 'var(--sharp-shadow)',
      },
      dropShadow: {
        'sharp-shadow': 'var(--sharp-shadow)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      },
      backgroundImage: {
        'beer-header-gradient': 'var(--beer-header-gradient)',
        'beer-card-bg-gradient': 'var(--beer-card-image-bg-gradient)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
