import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const PostContactForm = async (data: {
  firstName: string;
  lastName: string;
  message: string;
  phoneNo: string;
  email: string;
}) => {
  const response = await axios.post(`${baseUrl}/api/contact-us`, data); // replace with your real endpoint
  return response.data;
};
