import AuthButton from '../../components/auth/auth-button';
import AuthField from '../../components/auth/auth-field';
import GoogleAuthBtn from '../../components/auth/google-auth-btn';
import AuthFormWrapper from '../../components/auth/auth-form-wrapper';
import AuthHeading from '../../components/auth/auth-heading';
import { authBg } from '../../static-img-url';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchemaType, signUpSchema } from '../../schemas/auth-schemas';
import { useMutation } from '@tanstack/react-query';
import { handleGoogleSignUp, signUpUser } from '../../apis/auth';
import { handleApiError } from '../../utils/handleApiError';
import toast from 'react-hot-toast';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(signUpSchema) });

  const signUpmutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      toast.success('Account Created Successfully');
      // Maybe redirect or show toast
    },
    onError: error => {
      handleApiError(error);
      // Show toast error maybe
    },
  });

  const onSubmitSignUp = (data: SignUpSchemaType) => {
    signUpmutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen min-w-screen max-w-screen max-h-screen">
      <div className="w-[40%] hidden md:block">
        <img className="w-full h-full object-cover" src={authBg} alt="" />
      </div>
      <div className="bg-[#F8F8F8] flex flex-col gap-[30px] w-full min-h-full md:w-[60%] px-[20px] md:px-[50px] justify-center lg:px-[130px] py-[170px]">
        <AuthHeading title={'Create your account'} />
        <AuthFormWrapper onSubmit={handleSubmit(onSubmitSignUp)}>
          <GoogleAuthBtn text="Sign up with Google" onClick={handleGoogleSignUp} />

          <AuthField
            type="text"
            label="Name"
            placeholder="Enter name"
            {...register('name')}
            error={errors.name?.message}
          />
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
          <div className="flex flex-col gap-2">
            <div className="flex gap-[6px] items-start">
              <input className="mt-[6px]" type="checkbox" id="" {...register('terms')} />
              <p className="text-[#0F172A] text-[14px] leading-[20px] font-medium cursor-pointer">
                I agree with Terms of Service, Privacy Policy, and default Notification Settings.
              </p>
            </div>
            {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
          </div>
          <AuthButton type={'submit'} text="Sign Up" disabled={isSubmitting} />
          <p className="text-[#0F172A] text-[14px] leading-[20px] text-center font-medium cursor-pointer">
            Already have an account? <span className="text-[#FF4400]">Sign in here</span>
          </p>
        </AuthFormWrapper>
      </div>
    </div>
  );
};

export default SignUp;
