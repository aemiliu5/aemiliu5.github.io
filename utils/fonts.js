import { League_Spartan } from 'next/font/google';
import { DM_Sans } from 'next/font/google';

export const league = League_Spartan({
  weight: '400',
  subsets: ['latin'],
});

export const leagueBold = League_Spartan({
  weight: '600',
  subsets: ['latin'],
});

export const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const dmSansBold = DM_Sans({
  weight: '700',
  subsets: ['latin'],
});