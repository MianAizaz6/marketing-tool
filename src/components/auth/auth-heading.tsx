interface AuthHeadingProps {
  title: string;
}
const AuthHeading = ({ title }: AuthHeadingProps) => {
  return <h3 className="text-[#0F172A] text-[24px] font-bold">{title}</h3>;
};

export default AuthHeading;
