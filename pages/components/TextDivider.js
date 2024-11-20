import React from 'react';

const TextDivider = ({ text }) => {
  return (
    <div className="relative flex items-center">
      <div className="flex-grow border-t-4 border-gray-100"></div>
      <span className="flex-shrink mx-8 text-[32px] sm:text-[60px] text-gray-100">{text}</span>
      <div className="flex-grow border-t-4 border-gray-100"></div>
    </div>
  );
}

export default TextDivider;