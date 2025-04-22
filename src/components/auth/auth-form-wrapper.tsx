import { ReactNode, FormHTMLAttributes } from 'react';

interface AuthFormWrapperProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const AuthFormWrapper = ({ children, ...rest }: AuthFormWrapperProps) => {
  return (
    <form
      className="bg-white border max-w-[398px] border-[#E2E8F0] rounded-[6px] p-[24px] flex flex-col gap-[24px]"
      {...rest}
    >
      {children}
    </form>
  );
};

export default AuthFormWrapper;
