import { useState, useEffect } from 'react';

function useWindowHeight() {
  // Initialize state with undefined or a default value if you want
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);

  useEffect(() => {
    // Ensure window is available before setting up the event handler
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const newHeight = window.innerHeight;
        setWindowHeight(newHeight);
        document.body.style.height = `${newHeight}px`;
        document.body.style.top = "0";
      };

      // Set initial body styles
      document.body.style.height = `${windowHeight}px`;
      document.body.style.top = "0";

      // Listen for window resize events
      window.addEventListener('resize', handleResize);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowHeight;
}

export default useWindowHeight;
