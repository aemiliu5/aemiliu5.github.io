import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > window.innerHeight) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />
            <div className="w-full h-full overflow-x-hidden">
                {children}
            </div>

            {/* Back to top button */}
            {showBackToTop && (
                <button
                    type="button"
                    aria-label="Back to top"
                    className="fixed bottom-6 right-6 text-white p-3 z-50 rounded-full bg-[#0abb95] shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    onClick={scrollToTop}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default Layout;

