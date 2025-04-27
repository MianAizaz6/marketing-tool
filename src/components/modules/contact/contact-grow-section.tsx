import { growSection } from '../../../static-img-url';

const ContactGrowSection = () => {
  return (
    <div className="grid grid-cols-1 mx-auto md:grid-cols-2 justify-center items-center max-w-full md:max-w-[1100px] py-[60px] gap-[40px] flex-wrap px-[20px]">
      <div className="flex flex-col  gap-[16px]">
        <h2 className="text-[36px] font-bold uppercase text-[#0F172A] leading-[100%]">
          WANT TO <span className="text-[#FF4400]">GROW</span> WITH US?
        </h2>
        <p className="w-full lg:w-[480px] text-[#333333] font-normal text-[18px] leading-[30px]">
          Let’s build something impactful together. Whether you’re interested in partnering, want a
          demo of our platform, or exploring growth op mx-autoportunities for your business, we’re
          here to help.<br></br>
          Reach out and let’s explore how our social media management software can support your
          goals, scale your strategy, and grow your brand — faster and smarter.
        </p>
      </div>
      <div className="flex w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] border items-center justify-center border-[#333333] rounded-[16px]">
        <img src={growSection} className="w-[300px] h-[300px] lg:w-[430px] lg:h-[287px]" alt="" />
      </div>
    </div>
  );
};

export default ContactGrowSection;
