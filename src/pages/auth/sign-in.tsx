import AuthButton from '../../components/auth/auth-button';
import AuthField from '../../components/auth/auth-field';
import AuthFormWrapper from '../../components/auth/auth-form-wrapper';
import AuthHeading from '../../components/auth/auth-heading';
import { authBg } from '../../static-img-url';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchemaType, signInSchema } from '../../schemas/auth-schemas';
import { useMutation } from '@tanstack/react-query';
import { signInUser } from '../../apis/auth';
import { handleApiError } from '../../utils/handleApiError';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
    onSuccess: data => {
      if (data?.accessToken) {
        localStorage.setItem('token', data.accessToken); // or sessionStorage
        toast.success('Login successful!');
        navigate('/dashboard'); // Or wherever you want to take them
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
          <p className="text-[#FF4400] text-[14px] leading-[20px] text-right font-medium cursor-pointer">
            Forgot password?
          </p>
          <AuthButton type={'submit'} text="Log in" disabled={isSubmitting} />
          <p className="text-[#0F172A] text-[14px] leading-[20px] text-center font-medium cursor-pointer">
            Don’t have an account? <span className="text-[#FF4400]">Sign up here</span>
          </p>
        </AuthFormWrapper>
      </div>
    </div>
  );
};

export default SignIn;
