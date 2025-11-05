import React from 'react';
import { league, leagueBold, dmSans } from '../../utils/fonts.js';
import 'tailwind-scrollbar';

import SocialMediaLink from '../components/SocialMediaLink';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

import '@fortawesome/fontawesome-svg-core/styles.css';

function Footer() {
	return (
    <div>
        <div className="bg-gradient-to-r from-[#2b1642] from-10% via-[#1e3599] via-50% to-[#0acc95] to-90% shadow-lg sticky z-50 w-full overflow-hidden">
            <div className={`${leagueBold.className} text-[32px] sm:text-[60px] text-center mt-4`}>
                FIND ME IN
            </div>

            <div className="flex flex-row mt-4 sm:px-64 gap-2 sm:gap-8 mb-6 justify-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gray-950 rounded-full flex justify-center items-center text-center shadow-xl hover:scale-110 transition-all duration-100"><SocialMediaLink fa={faTwitter} 			href="https://x.com/aemiliu5" 					size="text-[40px] text-center sm:text-[30px] hover:text-[#DEDEDE] translate-y-0.5 sm:translate-y-0 ransition-all duration-100" /></div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gray-950 rounded-full flex justify-center items-center text-center p-5 shadow-xl hover:scale-110 transition-all duration-100"><SocialMediaLink fa={faLinkedinIn} 		href="https://www.linkedin.com/in/aimilios-seimenis/" 			size="text-[40px] text-center sm:text-[30px] hover:text-[#DEDEDE] translate-y-0.5 sm:translate-y-0 transition-all duration-100" /></div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gray-950 rounded-full flex justify-center items-center text-center p-5 shadow-xl hover:scale-110 transition-all duration-100"><SocialMediaLink fa={faGithub} 			href="https://github.com/aemiliu5" 				size="text-[40px] text-center sm:text-[30px] hover:text-[#DEDEDE] translate-y-0.5 sm:translate-y-0 transition-all duration-100" /></div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gray-950 rounded-full flex justify-center items-center text-center p-5 shadow-xl hover:scale-110 transition-all duration-100"><SocialMediaLink fa={faInstagram} 		href="https://instagram.com/aemiliu5" 			size="text-[40px] text-center  sm:text-[30px] hover:text-[#DEDEDE] translate-y-0.5 sm:translate-y-0 transition-all duration-100" /></div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gray-950 rounded-full flex justify-center items-center text-center p-5 shadow-xl hover:scale-110 transition-all duration-100"><SocialMediaLink fa={faEnvelope} 		href="mailto:hello@aemilius.dev" 				size="text-[40px] text-center sm:text-[30px] hover:text-[#DEDEDE] translate-y-0.5 sm:translate-y-0 transition-all duration-100" /></div>
            </div>

            </div>

            <div className={`text-center my-4`}>
                <div className="text-[14px] ${league.className} sm:text-[20px]">
                Copyright © 2019-2025 Aimilios Seimenis, all rights reserved.<br />
                Designed with ❤️ by Antonia Baziotopoulou & Aimilios Seimenis<br />
                </div>
            <div className={`text-[8px] ${dmSans.className} mx-[20vw] mt-2`}>
            Logos and company names are trademarks of their respective owners. Their inclusion on this site is for informational purposes only and does not imply a direct partnership, affiliation, or endorsement.</div>
            </div>
        
    </div>
	);
}

export default Footer;