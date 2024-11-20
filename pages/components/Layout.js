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
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            </Head>

            <Navbar />
            <main>
                <div
                className="overflow-hidden"
                style={{
                    width: '100%',
                    height: '100%' 
                }}>
                    {children}
                </div>

                {/* Back to top button */}
                {showBackToTop && (
                    <button
                        className="fixed text-white py-2 px-2 z-50 rounded-full bg-[#0abb95]"
                        onClick={scrollToTop}
                        style={{
                            transform: 'translateY(-50%)', // Center the button vertically
                            top: '95%', // Position the button vertically in the middle
                            right: '0.5%' // Position the button to the right with a margin
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>

                    </button>
                )}
            </main>
        </>
    );
};

export default Layout;

