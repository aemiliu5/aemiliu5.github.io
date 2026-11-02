import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Plus_Jakarta_Sans } from 'next/font/google';

const PJS = Plus_Jakarta_Sans({ weight: '600', subsets: ['latin'] });

const SocialMediaLink = ({ href, fa, size, iconOnly = false, label }) => {
  const icon = (
    <FontAwesomeIcon icon={fa} className={`mx-2 ${size} text-[#ffffff] text-center ${PJS.className}`} />
  );

  if (iconOnly || !href) {
    return icon;
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-full w-full items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {icon}
    </Link>
  );
};

export default SocialMediaLink;