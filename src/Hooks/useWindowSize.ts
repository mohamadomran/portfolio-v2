import { useState, useEffect } from 'react';

interface WindowSize {
 width?: number;
 height?: number;
}

// Hook
export const useWindowSize = () => {
 const [windowSize, setWindowSize] = useState<WindowSize>({
  width: undefined,
  height: undefined,
 });

 useEffect(() => {
  const handleResize = () => {
   setWindowSize({
    width: window.innerWidth,
    height: window.innerHeight,
   });
  };

  window.addEventListener('resize', handleResize);

  handleResize();

  return () => window.removeEventListener('resize', handleResize);
 }, []);

 return windowSize;
};
