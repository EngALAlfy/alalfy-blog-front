// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
// Import AOS CSS
import 'aos/dist/aos.css';
// Import GLightbox CSS
import 'glightbox/dist/css/glightbox.min.css';
// Import Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./globals.css";


import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import 'highlight.js/styles/github-dark.css';

// Import the MainScript component
import MainScript from '@/components/layout/MainScript';

// Import scroll top component
import ScrollTopButton from '@/components/layout/ScrollTopButton';
import Preloader from '@/components/layout/Preloader';

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/img/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/logo.png" />
            </head>
            <body className={`antialiased`}>
                <Header/>
                <Preloader/>
                {children}
                <ScrollTopButton/>
                <MainScript/>
                <Footer/>
            </body>
        </html>
    );
}