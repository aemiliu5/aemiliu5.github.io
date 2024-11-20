// components/FadeInOnScroll.js

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 50% of the element is visible
  });

  // Update state when the element is in view
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100px]'
      } duration-[1200ms] ease-in-out transition-all`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
