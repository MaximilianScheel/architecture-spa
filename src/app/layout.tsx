import type { Metadata } from 'next';
import './globals.scss';
import { Inter } from 'next/font/google';
import pageModule from './Page.module.scss';
import Header from './components/Header';
import Footer from './footer/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meine Architekten-Seite',
  description: 'Architektur, Energieberatung und mehr.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <div className={pageModule.container}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
