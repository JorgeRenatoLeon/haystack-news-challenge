import '@/styles/customBootstrap.scss';
import './globals.css';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';

const fontFamily = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'PhotoSearch',
  description: 'Search photos from Flickr',
  keywords: 'flickr, photos, search, images',
  language: 'English',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"
        />

        <Navbar />

        <main className="container-fluid py-4">{children}</main>
      </body>
    </html>
  );
}
