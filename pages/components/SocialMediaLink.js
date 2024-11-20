import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Plus_Jakarta_Sans } from 'next/font/google';

const PJS = Plus_Jakarta_Sans({ weight: '600', subsets: ['latin'] });

const SocialMediaLink = ({ href, fa, size }) => {
  return (
    <Link href={href ?? ''}>
      <FontAwesomeIcon icon={fa} className={`mx-2 ${size} text-[#ffffff] text-center ${PJS.className}`} />
    </Link>
  );
};

export default SocialMediaLink;