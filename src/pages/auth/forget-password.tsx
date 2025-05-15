import { useState } from 'react';
import AuthButton from '../../components/auth/auth-button';
import AuthField from '../../components/auth/auth-field';
import AuthFormWrapper from '../../components/auth/auth-form-wrapper';
import AuthHeading from '../../components/auth/auth-heading';
import { authBg } from '../../static-img-url';
import OtpInputField from '../../components/auth/otp-input';
import {
  emailSchema,
  EmailSchemaType,
  passwordSchema,
  passwordSchemaType,
} from '../../schemas/auth-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { sendOtp, updatePassword, verifyOtp } from '../../apis/auth';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { handleApiError } from '../../utils/handleApiError';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: emailErrors },
  } = useForm<EmailSchemaType>({ resolver: zodResolver(emailSchema) });

  const { handleSubmit: handleSubmitOtp } = useForm(); // No need for validation schema as we're using custom state

  // New password reset form
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
  } = useForm({
    resolver: zodResolver(passwordSchema), // You'll need to create this schema
  });

  const [emailValue, setEmailValue] = useState('');
  const [token, setToken] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const [validOtp, setValidOtp] = useState<boolean>(false);

  const sendOtpFunc = useMutation({
    mutationFn: sendOtp,
    onSuccess: () => {
      setValidEmail(true);
      toast.success('Please verify OTP from your Email');
      // Maybe redirect or show toast
    },
    onError: error => {
      handleApiError(error);
      // Show toast error maybe
    },
  });

  const verifyOtpFunc = useMutation({
    mutationFn: verifyOtp,
    onSuccess: data => {
      setValidOtp(true);
      setToken(data);
      toast.success('OTP Verification is SuccessFul');
      // Maybe redirect or show toast
    },
    onError: error => {
      handleApiError(error);
      // Show toast error maybe
    },
  });

  const newPasswordFunc = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      toast.success('Password Changed Successfully');

      setTimeout(() => {
        navigate('/sign-in');
      }, 1000);
      // Maybe redirect or show toast
    },
    onError: error => {
      handleApiError(error);
      // Show toast error maybe
    },
  });

  const onEmailCheck = (data: EmailSchemaType) => {
    setEmailValue(data.email);
    sendOtpFunc.mutate(data);
  };

  const onOtpCheck = () => {
    const data = {
      email: emailValue,
      verifyOtp: Number(otp),
    };
    verifyOtpFunc.mutate(data);
  };

  const newPassword = (data: passwordSchemaType) => {
    const payload = {
      password: data.password,
      token: token,
    };
    newPasswordFunc.mutate(payload);
  };

  return (
    <div className="flex min-h-screen min-w-screen max-w-screen max-h-screen">
      <div className="w-[40%] hidden md:block">
        <img className="w-full h-full object-cover" src={authBg} alt="" />
      </div>
      <div className="bg-[#F8F8F8] flex flex-col gap-[30px] w-full min-h-full md:w-[60%] px-[20px] md:px-[50px] justify-center lg:px-[130px] py-[170px]">
        {validEmail ? (
          <>
            {validOtp ? (
              <>
                <AuthHeading title={'Create new Password'} />
                <AuthFormWrapper onSubmit={handleSubmitPassword(newPassword)}>
                  <p className="text-[#0F172A] text-[14px] leading-[20px] font-medium cursor-pointer">
                    Enter a new password for your account below. Make sure it’s something secure and
                    easy for you to remember.
                  </p>
                  <AuthField
                    type="password"
                    label="New Password"
                    {...registerPassword('password')}
                    error={passwordErrors.password?.message}
                    placeholder="Password"
                  />
                  <AuthField
                    type="password"
                    label="Confirm Password"
                    {...registerPassword('confirmPassword')}
                    error={passwordErrors.confirmPassword?.message}
                    placeholder="Password"
                  />
                  <AuthButton
                    type={'submit'}
                    text="Create"
                    disabled={Boolean(passwordErrors.password || passwordErrors.confirmPassword)}
                  />
                  <p className="text-[#0F172A] text-[14px] leading-[20px] text-center font-medium cursor-pointer">
                    Didn’t get the code? <span className="text-[#FF4400]">Resend</span>
                  </p>
                </AuthFormWrapper>
              </>
            ) : (
              <>
                <AuthHeading title={'Enter your verification code'} />
                <AuthFormWrapper onSubmit={handleSubmitOtp(onOtpCheck)}>
                  <p className="text-[#0F172A] text-[14px] leading-[20px] font-medium cursor-pointer">
                    {`A 6-digit code have been sent to your email ${emailValue}. It might take
                    a minute to arrive. Please enter the code below to verify.`}
                  </p>
                  <OtpInputField value={otp} onChange={setOtp} />
                  <AuthButton type={'submit'} text="Verify" disabled={Boolean(otp.length < 6)} />
                  <p className="text-[#0F172A] text-[14px] leading-[20px] text-center font-medium cursor-pointer">
                    Didn’t get the code? <span className="text-[#FF4400]">Resend</span>
                  </p>
                </AuthFormWrapper>
              </>
            )}
          </>
        ) : (
          <>
            <AuthHeading title={'Reset your password'} />
            <AuthFormWrapper onSubmit={handleSubmitEmail(onEmailCheck)}>
              <p className="text-[#0F172A] text-[14px] leading-[20px] font-medium cursor-pointer">
                Enter the email address you used when you joined and we’ll send you instructions to
                reset your password.
              </p>
              <AuthField
                type="text"
                label="Email"
                {...registerEmail('email')}
                placeholder="Enter Email"
                error={emailErrors.email?.message}
              />
              <AuthButton
                type={'submit'}
                text="Send Reset Link"
                disabled={Boolean(emailErrors.email)}
              />
              <p className="text-[#0F172A] text-[14px] leading-[20px] text-center font-medium cursor-pointer">
                Already have an account? <span className="text-[#FF4400]">Sign in here</span>
              </p>
            </AuthFormWrapper>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
