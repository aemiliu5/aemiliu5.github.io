import React from 'react';
import { league, leagueBold, dmSans } from '../utils/fonts.js';

import SocialMediaLink from './SocialMediaLink';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

import '@fortawesome/fontawesome-svg-core/styles.css';

const socialLinks = [
	{ fa: faTwitter, href: 'https://x.com/aemiliu5', label: 'X (Twitter)' },
	{ fa: faLinkedinIn, href: 'https://www.linkedin.com/in/aimilios-seimenis/', label: 'LinkedIn' },
	{ fa: faGithub, href: 'https://github.com/aemiliu5', label: 'GitHub' },
	{ fa: faInstagram, href: 'https://instagram.com/aemiliu5', label: 'Instagram' },
	{ fa: faEnvelope, href: 'mailto:hello@aemilius.dev', label: 'Email' },
];

function Footer() {
	return (
    <footer>
        <div className="bg-gradient-to-r from-[#2b1642] from-10% via-[#1e3599] via-50% to-[#0acc95] to-90% shadow-lg w-full overflow-hidden">
            <div className={`${leagueBold.className} text-[2rem] sm:text-[3.75rem] text-center mt-4`}>
                FIND ME IN
            </div>

            <div className="flex flex-row mt-4 gap-2 sm:gap-8 mb-6 justify-center">
                {socialLinks.map(({ fa, href, label }) => (
                    <div
                        key={href}
                        className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 bg-gray-950 rounded-full flex justify-center items-center text-center shadow-xl hover:scale-110 transition-all duration-100"
                    >
                        <SocialMediaLink
                            fa={fa}
                            href={href}
                            label={label}
                            size="text-[1.875rem] sm:text-[2.125rem] text-center hover:text-[#DEDEDE] transition-all duration-100"
                        />
                    </div>
                ))}
            </div>

            </div>

            <div className={`text-center my-4 pb-16 lg:pb-0`}>
                <div className={`text-[0.875rem] ${league.className} sm:text-[1.25rem]`}>
                Copyright © 2019-2026 Aimilios Seimenis, all rights reserved.<br />
                Designed with ❤️ by Antonia Baziotopoulou & Aimilios Seimenis<br />
                </div>
            <div className={`text-[0.6875rem] ${dmSans.className} mx-auto max-w-[60ch] px-6 mt-2`}>
            Logos and company names are trademarks of their respective owners. Their inclusion on this site is for informational purposes only and does not imply a direct partnership, affiliation, or endorsement.</div>
            </div>
    </footer>
	);
}

export default Footer;
