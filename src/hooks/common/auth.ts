import { useEffect, useState } from 'react';


export const isAuthenticated = () => {
    const token = sessionStorage.getItem('accessToken') || null;
    return token ? true : false;
};

const useAuthCheck = () => {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = isAuthenticated();
      if (!loggedIn) {
        setIsLogged(false);
      } else {
        setIsLogged(true);
      }
    };
    checkAuth();
  }, []);

  return isLogged;
};

export default useAuthCheck;
