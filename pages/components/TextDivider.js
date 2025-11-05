import React from 'react';
import { leagueBold } from '../../utils/fonts';

const TextDivider = ({ text }) => {
  return (
    <div className="relative flex items-center">
      <div className="flex-grow border-t-4 border-gray-100"></div>
      <span className={`flex-shrink mx-8 text-[26px] sm:text-[48px] text-gray-100 ${leagueBold.className}`}>{text}</span>
      <div className="flex-grow border-t-4 border-gray-100"></div>
    </div>
  );
}

export default TextDivider;