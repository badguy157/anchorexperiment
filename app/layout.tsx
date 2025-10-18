import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400','500','600','700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Anchor Hotel, Haydon Bridge — Est. 1422',
  description: 'Riverside rooms, hearty food & ale. Northumberland hospitality since 1422.',
  metadataBase: new URL('https://anchorexperiment.vercel.app/'),
  openGraph: {
    title: 'The Anchor Hotel, Haydon Bridge — Est. 1422',
    description: 'Riverside rooms, hearty food & ale. Northumberland hospitality since 1422.',
    url: 'https://anchorexperiment.vercel.app/',
    siteName: 'The Anchor Hotel',
    images: ['/hero.jpg'],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
