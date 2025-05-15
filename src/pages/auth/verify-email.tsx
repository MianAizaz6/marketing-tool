import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import AuthHeading from '../../components/auth/auth-heading';
import { authBg } from '../../static-img-url';
import AuthButton from '../../components/auth/auth-button';
import { verifyUser } from '../../apis/auth';
import axios from 'axios';

export default function EmailVerification() {
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { token } = useParams(); // This assumes your route is set up with a :token parameter

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Extract token from URL if not available in params
        const tokenToUse = token || window.location.pathname.split('/').pop();

        if (!tokenToUse) {
          setStatus('error');
          setMessage('Verification token is missing');
          return;
        }

        // Make API call to verify email
        await verifyUser(tokenToUse);

        setStatus('success');
        setMessage('Email verified successfully!');

        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } catch (error) {
        setStatus('error');
        // setMessage(error.response.data.message );
        if (axios.isAxiosError(error) && error.response?.data?.message) {
          setMessage(error.response.data.message);
        } else {
          setMessage('An error occurred during verification. Please try again.');
        }
        console.error('Verification error:', error);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    //   <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    //     <h1 className="text-2xl font-bold text-center text-gray-800">Email Verification</h1>

    //   </div>
    // </div>
    <div className="flex min-h-screen min-w-screen max-w-screen max-h-screen">
      <div className="w-[40%] hidden md:block">
        <img className="w-full h-full object-cover" src={authBg} alt="" />
      </div>
      <div className="bg-[#F8F8F8] flex items-center flex-col gap-[30px] w-full min-h-full md:w-[60%] px-[20px] md:px-[50px] justify-center lg:px-[130px] py-[170px]">
        {status === 'loading' && (
          <div className="flex flex-col items-center text-center p-4">
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
            <AuthHeading title={'Verifying your email address...'} />
          </div>
        )}
        {status === 'success' && (
          <div className="flex flex-col items-center text-center p-4">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <p className="text-green-600 font-medium mb-4">{message}</p>
            <AuthHeading title={'Redirecting to dashboard...'} />{' '}
          </div>
        )}
        {status === 'error' && (
          <div className="flex flex-col items-center text-center p-4">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />{' '}
            <p className="text-red-600 font-medium mb-4">{message}</p>
            <div onClick={() => navigate('/sign-in')}>
              <AuthButton type={'submit'} text="Back to Login" disabled={false} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
