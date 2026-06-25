import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PromoPopup from '@/components/PromoPopup';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aquagrand Water Purifiers Sambalpur | RO Purifiers Odisha | watercareaqua.in',
  description:
    'Aquagrand – Premium RO Water Purifiers in Sambalpur, Odisha. Authorized dealer of Aquaguard, Kent, Pureit. Best RO purifier price, AMC, installation & repair service.',
  keywords:
    'RO water purifier Sambalpur, Aquaguard dealer Sambalpur, water purifier Odisha, Kent RO Sambalpur, commercial RO system, watercareaqua.in',
  authors: [{ name: 'Aquagrand - watercareaqua.in' }],
  robots: 'index, follow',
  metadataBase: new URL('https://watercareaqua.in'),
  alternates: { canonical: 'https://watercareaqua.in/' },
  openGraph: {
    type: 'website',
    url: 'https://watercareaqua.in/',
    title: 'Aquagrand Water Purifiers | RO Purifiers Sambalpur Odisha',
    description:
      'Premium RO Water Purifiers in Sambalpur, Odisha. Best price, expert service, genuine products.',
  },
  other: {
    'geo.region': 'IN-OR',
    'geo.placename': 'Sambalpur, Odisha, India',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/favicons/favicon-180x180.png', sizes: '180x180' }],
  },
};

// ✅ themeColor must live here in Next.js 14+, not inside metadata
export const viewport: Viewport = {
  themeColor: '#0b6db8',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aquagrand Water Purifiers',
  url: 'https://watercareaqua.in',
  telephone: ['+919938884401', '+919090807429'],
  email: 'manasbarik25822@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Meher Nivas, Ainthapali Road, Opposite LIC Office',
    addressLocality: 'Sambalpur',
    addressRegion: 'Odisha',
    postalCode: '768004',
    addressCountry: 'IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <PromoPopup />
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}