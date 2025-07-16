import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

const token = localStorage.getItem('accessToken');

export const postChat = async (payload: {
  onboardProcessId: number;
  moduleId: number;
  question: string;
  type: string;
}) => {
  const response = await axios.post(`${baseUrl}/api/chat/`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
