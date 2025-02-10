import React, { FC } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Топ проект',
  description: 'Топ проект, разработанный на NEXT js',
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang='ru'>
      <body className={`${openSans.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
