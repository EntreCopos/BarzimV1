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
        'yellow-barzim': 'var(--yellow-barzim)',
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
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
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
      },
      boxShadow: {
        'sutil-shadow': 'var(--sutil-shadow)',
        'sharp-shadow': 'var(--sharp-shadow)',
      },
      dropShadow: {
        'sharp-shadow': 'var(--sharp-shadow)',
      },
      backgroundImage: {
        'yellow-transparent-gradient': 'var(--yellow-trasparent-gradient)',
        'black-radial-gradient': 'var(--black-radial-gradient)',
        'hero-age-mobile': "url('../public/images/bg-age-mobile.png')",
        'hero-age-desktop': "url('../public/images/bg-age-desktop.png')",
        'hero-register-desktop':
          "url('../public/images/bg-register-desktop.png')",
        'hero-login-desktop': "url('../public/images/bg-login-desktop.png')",
        'hero-login-mobile': "url('../public/images/bg-login-mobile.png')",
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
