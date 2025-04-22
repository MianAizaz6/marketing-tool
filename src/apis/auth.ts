import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const signUpUser = async (data: { name: string; email: string; password: string }) => {
  console.log(baseUrl);
  const response = await axios.post(`${baseUrl}/api/auth/signup`, data); // replace with your real endpoint
  return response.data;
};

export const signInUser = async (data: { email: string; password: string }) => {
  console.log(baseUrl);
  const response = await axios.post(`${baseUrl}/api/auth/login`, data); // replace with your real endpoint
  return response.data;
};

export const handleGoogleSignUp = () => {
  window.location.href = `${baseUrl}/api/auth/google/login`;
};
