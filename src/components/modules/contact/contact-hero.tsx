import { callIcon, contactUsHeroImage, videoIcon } from '../../../static-img-url';

const ContactHero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[32px] px-[20px] md:px-[120px] py-[60px] bg-gradient-to-r from-white to-[#F8F8F8] ">
      <div className="flex flex-col gap-[16px] mx-auto max-w-[700px]">
        <h2 className="text-[36px] font-bold uppercase text-[#0F172A] text-center">
          We’re Here to <span className="text-[#FF4400]">Help</span>
        </h2>
        <p className="text-[#333333] text-[18px] leading-[30px] font-normal text-center">
          Whether you’re facing a technical issue or have a question about using our software, our
          support team is ready to assist you every step of the way. Your success is our priority.
        </p>
        <div className="flex justify-center items-center gap-[24px] flex-wrap">
          <a
            href="/demo"
            className="h-[48px] text-white rounded-[6px] bg-[#0F172A] px-[24px] flex items-center gap-[10px]"
          >
            <img src={videoIcon} className="w-[24px] h-[24px]" alt="" />
            Book a demo
          </a>
          <a
            href="/demo"
            className="h-[48px] text-[#FF4400] bg-transparent rounded-[6px] border border-[#FF4400] px-[24px] flex items-center gap-[10px]"
          >
            <img src={callIcon} className="w-[24px] h-[24px]" alt="" />
            Call us Now
          </a>
        </div>
      </div>
      <img src={contactUsHeroImage} alt="" />
    </div>
  );
};

export default ContactHero;
