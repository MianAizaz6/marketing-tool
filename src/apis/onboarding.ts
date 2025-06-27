import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

const token = localStorage.getItem('accessToken');

console.log('====token1111', token);

export const OnboardUser = async (data: {
  websiteUrl: string;
  description: string;
  logo: File[];
  goals: string[];
  metrics: string[];
  competitorWebsite: []
}) => {
  const response = await axios.post(`${baseUrl}/api/onboard-process`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getWorkSpaceList = async (query: string) => {
  const response = await axios.get(`${baseUrl}/api/onboard-process${query || ''}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

