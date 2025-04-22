import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('auth_token', token); // Or use context/store if you want
      toast.success('Logged in successfully with Google!');
      navigate('/dashboard'); // Or home, depending on your flow
    } else {
      toast.error('Google login failed. Try again.');
      navigate('/login');
    }
  }, [navigate]);

  return <p className="text-center mt-4">Logging you in with Google...</p>;
};

export default GoogleCallback;
