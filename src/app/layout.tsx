import React, { FC } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';
import styles from './mainLayout.module.scss';
import { GitHubLink } from '@/components/gitHubLink/GitHubLink';
import { LinkProvider } from '@/providers/LinkProvider';

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
      <body className={`${openSans.className}`}>
        <div className={styles.mainContainer}>
          <header className={styles.header}>
            <span className={styles.headerText}>.my_blog</span>
            <LinkProvider>
              <GitHubLink />
            </LinkProvider>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
