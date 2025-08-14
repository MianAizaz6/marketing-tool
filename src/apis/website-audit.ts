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

export const getWebsiteSeoReport = async (query: string) => {
  const response = await axios.get(`${baseUrl}/api/seo${query || ''}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getMobileUsabilityReport = async (query: string) => {
  const response = await axios.get(`${baseUrl}/api/mobile-usability${query || ''}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getuserInterfaceReport = async (query: string) => {
  const response = await axios.get(`${baseUrl}/api/uiux${query || ''}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};


export const contentRelevenceDetails = async (data: {
  keywords: string[],
  websiteUrl: string
}) => {
  const response = await axios.post(`${baseUrl}/api/content-relevance`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};