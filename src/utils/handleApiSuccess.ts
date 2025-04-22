import { toast } from 'react-hot-toast';

export const handleApiSuccess = (message = 'Operation successful!') => {
  toast.success(message);
};
