import { Open_Sans, Manrope } from 'next/font/google';

// This configures the Next.js Font for Open Sans
// We then export a variable and class name to be used
// within Tailwind (tailwind.config.ts) and Storybook (preview.js)
export const OPEN_SANS = Open_Sans({
  weight: ['300', '400', '600', '700'],
  display: 'fallback',
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const MANROPE = Manrope({
  weight: ['300', '400', '600', '700'],
  display: 'fallback',
  subsets: ['latin'],
  variable: '--font-manrope',
});
