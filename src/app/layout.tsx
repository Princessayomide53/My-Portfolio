import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const Schibs = Schibsted_Grotesk({
  variable: '--font-Schibsted-grotesk',
  subsets: ['latin'],
});

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
    <html lang='en'>
      <body className={`${Schibs.variable}  antialiased`}>{children}</body>
    </html>
  );
}
