import { useState } from 'react';
import AuthButton from '../../components/auth/auth-button';
import AuthField from '../../components/auth/auth-field';
import AuthFormWrapper from '../../components/auth/auth-form-wrapper';
import AuthHeading from '../../components/auth/auth-heading';
import { authBg } from '../../static-img-url';
import OtpInputField from '../../components/auth/otp-input';

const ResetPassword = () => {
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validOtp, setValidOtp] = useState<boolean>(false);

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
                <AuthFormWrapper>
                  <p className="text-[#0F172A] text-[14px] leading-[20px] font-medium cursor-pointer">
                    Enter a new password for your account below. Make sure it’s something secure and
                    easy for you to remember.
                  </p>
                  <AuthField
                    type="password"
                    label="New Password"
                    placeholder="Password"
                    name="new-password"
                  />
                  <AuthField
                    type="password"
                    label="Confirm Password"
                    placeholder="Password"
                    name="new-password-confirm"
                  />
                  <AuthButton type={'submit'} text="Create" disabled={true} />
                  <p className="text-[#0F172A] text-[14px] leading-[20px] text-center font-medium cursor-pointer">
                    Didn’t get the code? <span className="text-[#FF4400]">Resend</span>
                  </p>
                </AuthFormWrapper>
              </>
            ) : (
              <>
                <AuthHeading title={'Enter your verification code'} />
                <AuthFormWrapper>
                  <p className="text-[#0F172A] text-[14px] leading-[20px] font-medium cursor-pointer">
                    A 6-digit code have been sent to your email lorenipsum@gmail.com. It might take
                    a minute to arrive. Please enter the code below to verify.
                  </p>
                  <OtpInputField value="" onChange={() => {}} />
                  <AuthButton type={'submit'} text="Verify" disabled={true} />
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
            <AuthFormWrapper>
              <p className="text-[#0F172A] text-[14px] leading-[20px] font-medium cursor-pointer">
                Enter the email address you used when you joined and we’ll send you instructions to
                reset your password.
              </p>
              <AuthField type="text" label="Email" placeholder="Enter Email" name="email" />
              <AuthButton type={'submit'} text="Send Reset Link" disabled={true} />
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

export default ResetPassword;
