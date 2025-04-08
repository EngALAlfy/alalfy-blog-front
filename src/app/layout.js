
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


// Import the MainScript component
import MainScript from '@/components/layout/MainScript';

// Import scroll top component
import ScrollTopButton from '@/components/layout/ScrollTopButton';
import Preloader from '@/components/layout/Preloader';

export const metadata = {
    title: "Alalfy Blog",
    description: "A blog created with Next.js and Bootstrap",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
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
