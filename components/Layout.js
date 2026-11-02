import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const SITE_URL = 'https://aemilius.dev';

const Layout = ({ children, title, description }) => {
    const fullTitle = title ? `${title} | Aimilios Seimenis` : 'Aimilios Seimenis - Game Programmer';
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
                <title>{fullTitle}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicons/favicon.ico" />
                {/* Link previews (LinkedIn, Slack, Discord, X) */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="aemilius.dev" />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={`${SITE_URL}/og.jpg`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
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

