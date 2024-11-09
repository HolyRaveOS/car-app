import fluid, { extract, fontSize } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: {
    files: [
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './pages/**/*.{ts,tsx}',
    ],
    extract,
  },
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '102rem',
      },
    },
    screens: {
      '2xl': { max: '100rem' },
      xl: { max: '63.938rem' },
      lg: { max: '47.938rem' },
      md: { max: '39.938rem' },
      sm: { max: '20rem' },
    },
    fontSize,
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fluid: ({ theme }: { theme: any }) => ({
      defaultScreens: ['20rem', theme('screens[2xl].max')],
    }),
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'), fluid],
} satisfies Config;
export default config;