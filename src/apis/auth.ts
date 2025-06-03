import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const signUpUser = async (data: { name: string; email: string; password: string }) => {
  const response = await axios.post(`${baseUrl}/api/auth/signup`, data);
  return response.data;
};

export const verifyUser = async (token: string) => {
  const response = await axios.get(`${baseUrl}/api/auth/verify/${token}`);
  return response.data;
};

export const getUserInfo = async (token: string) => {
  const response = await axios.get(`${baseUrl}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const sendOtp = async (data: { email: string }) => {
  const response = await axios.post(`${baseUrl}/api/verification/send-otp`, data);
  return response.data;
};

export const verifyOtp = async (data: { email: string; verifyOtp: number }) => {
  const response = await axios.post(`${baseUrl}/api/verification/verify-otp`, data);
  return response.data;
};

export const updatePassword = async (data: { password: string; token: string }) => {
  const response = await axios.patch(`${baseUrl}/api/auth/forgot-password`, data, {
    headers: {
      Authorization: `Bearer ${data.token}`, // Include token in the header
    },
  });
  return response.data;
};

export const signInUser = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${baseUrl}/api/auth/login`, data);
  return response.data;
};


export const handleGoogleSignUp = () => {
  window.location.href = `${baseUrl}/api/auth/google/login`;
};
