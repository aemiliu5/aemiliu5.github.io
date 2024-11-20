import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Plus_Jakarta_Sans } from 'next/font/google';

const PJS = Plus_Jakarta_Sans({ weight: '600', subsets: ['latin'] });

const SocialMediaLink = ({ href, fa }) => {
  return (
    <Link href={href ?? ''}>
      <FontAwesomeIcon icon={fa} className={`mx-2 text-[32px] text-[#ffffff] hover:text-[#da5761] transition-all duration-400 ${PJS.className}`} />
    </Link>
  );
};

export default SocialMediaLink;