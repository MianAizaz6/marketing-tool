import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

const token = localStorage.getItem('accessToken');



export const getWebsiteSpeedReport = async (query: string) => {
  const response = await axios.get(`${baseUrl}/api/website-speed/speed-metrics${query || ''}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

