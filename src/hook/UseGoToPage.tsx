import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UseGoToPage = (path: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(path);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate, path]);
};

export default UseGoToPage;
