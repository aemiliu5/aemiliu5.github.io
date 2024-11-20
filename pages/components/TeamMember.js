// components/TeamMemberBig.js

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Inter, Roboto, Plus_Jakarta_Sans } from 'next/font/google';

const interT = Inter({ weight: '300', subsets: ['latin'] });
const inter = Inter({ weight: '400', subsets: ['latin'] });
const interB = Inter({ weight: '600', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });
const PJS = Plus_Jakarta_Sans({ weight: '600', subsets: ['latin'] });

const TeamMember = ({ imageSize, src, name, position, linkedin, bio }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className={`w-[${imageSize}]px h-[${imageSize}]px rounded-full overflow-hidden`}>
            <Image src={src} width={imageSize} height={imageSize} />
          </div>
        </div>

        <div className="bg-white w-96 rounded-xl p-4 text-center mt-4">
          <div className={`text-bold text-[23px] ${PJS.className}`}>{name}</div>
          <div className={`text-[#272727] text-[14px] my-2 ${PJS.className}`}>{position}</div>

          <div className="flex justify-center">
            <Link href={linkedin ?? ''} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="my-4 text-[32px] text-[#6157da] hover:text-[#afc1ff] transition-all duration-400" />
            </Link>
          </div>

          <div className={`text-[#272727] text-[18px] ${roboto.className}`}>{bio}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
