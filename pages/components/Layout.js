import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            </Head>
            <main>
                <div
                    style={{
                        width: '100%',
                        height: '100%' 
                    }}
                >
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;