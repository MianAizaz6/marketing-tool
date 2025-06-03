import toast from "react-hot-toast";
import { getUserInfo } from "../apis/auth";

export const handleGoogleLogin = () => {
  const width = 500;
  const height = 600;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  const authWindow = window.open(
    'http://localhost:3001/api/auth/google/login',
    'Google Login',
    `width=${width},height=${height},top=${top},left=${left}`
  );

  // Now listen for the token from popup
  const messageListener = async (event: MessageEvent) => {
    if (event.data?.payload) {
      const payload = JSON.parse(event.data.payload);
      const token = payload.token;
      console.log('Received token:', token);

      localStorage.setItem('accessToken', token);

      try {
        const userInfo = await getUserInfo(token);
        // Save user info - example: in localStorage or your app state
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        // Now navigate
        window.location.href = '/'; // wherever you want
      } catch (err) {
        toast.error('Failed to fetch user info. Please try again.');
        console.error('Error fetching user info:', err);
      }

      // Important: Cleanup listener and close popup
      window.removeEventListener('message', messageListener);
      authWindow?.close();
    }
  };

  window.addEventListener('message', messageListener);
};
