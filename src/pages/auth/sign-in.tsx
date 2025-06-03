import AuthButton from '../../components/auth/auth-button';
import AuthField from '../../components/auth/auth-field';
import AuthFormWrapper from '../../components/auth/auth-form-wrapper';
import AuthHeading from '../../components/auth/auth-heading';
import { authBg } from '../../static-img-url';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchemaType, signInSchema } from '../../schemas/auth-schemas';
import { useMutation } from '@tanstack/react-query';
import { getUserInfo, signInUser } from '../../apis/auth';
import { handleApiError } from '../../utils/handleApiError';
import toast from 'react-hot-toast';
import { handleGoogleLogin } from '../../utils/handleGoogleLogin';
import GoogleAuthBtn from '../../components/auth/google-auth-btn';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signInUser,
    onSuccess: async data => {
      if (data?.accessToken) {
        localStorage.setItem('token', data.accessToken); // or sessionStorage
        toast.success('Login successful!');
        try {
          const userInfo = await getUserInfo(data?.token);
          // Save user info - example: in localStorage or your app state
          localStorage.setItem('userInfo', JSON.stringify(userInfo));

          // Now navigate
          navigate('/');
        } catch (err) {
          toast.error('Failed to fetch user info. Please try again.');
          console.error('Error fetching user info:', err);
        }
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    },
    onError: error => {
      handleApiError(error);
    },
  });

  const onSubmit = (data: SignInSchemaType) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen min-w-screen max-w-screen max-h-screen">
      <div className="w-[40%] hidden md:block">
        <img className="w-full h-full object-cover" src={authBg} alt="" />
      </div>
      <div className="bg-[#F8F8F8] flex flex-col gap-[30px] w-full min-h-full md:w-[60%] px-[20px] md:px-[50px] justify-center lg:px-[130px] py-[170px]">
        <AuthHeading title={'Welcome Back'} />
        <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <GoogleAuthBtn text="Sign in with Google" onClick={handleGoogleLogin} />
          <AuthField
            type="text"
            label="Email"
            placeholder="Enter Email"
            {...register('email')}
            error={errors.email?.message}
          />
          <AuthField
            type="password"
            label="Password"
            placeholder="Enter Password"
            {...register('password')}
            error={errors.password?.message}
          />
          <Link to={'/forget-password'} className="text-[#FF4400] text-[14px] leading-[20px] text-right font-medium cursor-pointer">
            Forgot password?
          </Link>
          <AuthButton type={'submit'} text="Log in" disabled={isSubmitting} />
          <p className="text-[#0F172A] text-[14px] leading-[20px] text-center font-medium cursor-pointer">
            Don’t have an account? <Link to="/sign-up" className="text-[#FF4400]">Sign up here</Link>
          </p>
        </AuthFormWrapper>
      </div>
    </div>
  );
};

export default SignIn;
