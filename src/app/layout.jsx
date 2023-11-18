import './globals.css';
import ScrollTop from './scrollTop';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Lublio',
  description: 'Embark on a linguistic adventure like no other with our interactive app - where proficiency and cultural enrichment go hand in hand.',
  keywords: [
    'language',
    'learning',
    'english',
    'french',
    'german',
    'spanish',
    'italian',
    'russian',
    'turkish',
  ],
  authors: [
    {
      name: 'Team Lublio',
      url: 'lublio.com',
    },
  ],
  creator: 'Luan',
  openGraph: {
    title: 'Lublio',
    description: 'Embark on a linguistic adventure like no other with our interactive app - where proficiency and cultural enrichment go hand in hand.',
    url: 'https://lublio.com',
    siteName: 'Lublio',
    images: [
      {
        url: 'https://lublio.com/images/lublio_og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <ScrollTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
