import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Lâm Quang Vinh - Backend Developer',
  description:
    'Portfolio and CV of Lâm Quang Vinh, a skilled Backend Developer specializing in .NET and modern web technologies.',
  keywords:
    'Lâm Quang Vinh, Backend Developer, .NET, Portfolio, CV, Software Engineer',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
