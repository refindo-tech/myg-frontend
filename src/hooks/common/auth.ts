import { useEffect, useState } from 'react';

export const isAuthenticated = () => {
    const token = sessionStorage.getItem('accessToken');
    return !!token;
};

const useAuthCheck = () => {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
    const loggedIn = isAuthenticated();
    // console.log('User is authenticated', loggedIn);
    setIsLogged(loggedIn);
  }, []);

  // console.log('isLogged', isLogged);
  return isLogged;
};

export default useAuthCheck;
