import type { Metadata } from 'next';
import { MANROPE } from '~/font';

import '~/styles/index.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body style={MANROPE.style}>{children}</body>
    </html>
  );
}
