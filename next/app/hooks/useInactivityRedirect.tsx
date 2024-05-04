import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useInactivityRedirect = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true); // This will only set to true after mounting
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Ensure this runs only after mounting

    let timeoutId = setTimeout(() => {
      router.push('/');
    }, 300000); // 5 minutes

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        router.push('/');
      }, 300000);
    };

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);
    document.addEventListener('click', resetTimer);

    return () => {
      document.removeEventListener('mousemove', resetTimer);
      document.removeEventListener('keydown', resetTimer);
      document.removeEventListener('click', resetTimer);
      clearTimeout(timeoutId);
    };
  }, [isMounted]); // Effect depends on the mounted state

  return null;
};

export default useInactivityRedirect;
