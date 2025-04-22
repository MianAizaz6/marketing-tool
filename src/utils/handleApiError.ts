import axios from 'axios';
import { toast } from 'react-hot-toast';

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || 'Something went wrong';
    toast.error(message);
  } else {
    toast.error('An unexpected error occurred');
  }
};
