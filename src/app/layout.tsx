import type { Metadata } from 'next';
import './globals.scss';
import pageModule from './page.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import StartAnimation from './components/StartAnimation';
import ScrollHandler from './components/ScrollHandler';

export const metadata: Metadata = {
  title: 'Jacob Mau | Freier Architekt',
  description: 'Architektur, Energieberatung und mehr.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <StartAnimation />
        <Header />
        <div className={pageModule['page-container']}>
          {children}
        </div>
        <Footer />
        <ScrollHandler />
      </body>
    </html>
  );
}
