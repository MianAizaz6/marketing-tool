import { useForm } from 'react-hook-form';
import { contactFormSchema, ContactFormSchemaType } from '../../../schemas/contact-schema';
import { contactUsData } from '../../../static-data';
import { callIcon, videoIcon } from '../../../static-img-url';
import AuthButton from '../../auth/auth-button';
import AuthField from '../../auth/auth-field';
import AuthFormWrapper from '../../auth/auth-form-wrapper';
import IconBox from './icon-box';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleApiError } from '../../../utils/handleApiError';
import { useMutation } from '@tanstack/react-query';
import { PostContactForm } from '../../../apis/contact';
import { handleApiSuccess } from '../../../utils/handleApiSuccess';

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const mutation = useMutation({
    mutationFn: PostContactForm,
    onSuccess: data => {
      console.log(data);
      handleApiSuccess('Your Message is Recieved');
    },
    onError: error => {
      handleApiError(error);
    },
  });

  const onSubmit = (data: ContactFormSchemaType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { website, ...formData } = data;
    mutation.mutate(formData);
  };

  console.log('Website Field:', watch('website'));
  console.log('Is Form Valid:', isValid);

  return (
    <div className="flex flex-col gap-[32px] py-[60px] px-[20px]">
      <div className="flex flex-col gap-[16px] mx-auto max-w-[710px]">
        <h2 className="text-[36px] font-bold uppercase text-[#0F172A] text-center">
          Talk to our <span className="text-[#FF4400]">Team</span>
        </h2>
        <p className="text-[#333333] text-[18px] leading-[30px] font-normal text-center">
          Whether you’re facing a technical issue or have a question about using our software, our
          support team is ready to assist you every step of the way. Your success is our priority.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-[1080px] mx-auto">
        <div className="flex flex-col border rounded-[8px] w-full border-[#E2E8F0] p-[24px] gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[18px] uppercase font-bold text-[#333333]">Contact us</h3>
            <p className="text-[18px] leading-[30px] text-[#333333] font-normal">
              Have a question, need support, or just want to say hello? We’d love to hear from you.
              Fill out the form below and we’ll get back to you as soon as possible.
            </p>
            <div className="flex justify-start items-center gap-[24px] flex-wrap">
              <a
                href="/demo"
                className="h-[48px] text-white rounded-[6px] bg-[#0F172A] grow justify-center px-[24px] flex items-center gap-[10px]"
              >
                <img src={videoIcon} className="w-[24px] h-[24px]" alt="" />
                Book a demo
              </a>
              <a
                href="/demo"
                className="h-[48px] text-[#FF4400] bg-transparent rounded-[6px] grow justify-center  border border-[#FF4400] px-[24px] flex items-center gap-[10px]"
              >
                <img src={callIcon} className="w-[24px] h-[24px]" alt="" />
                Call us Now
              </a>
            </div>
          </div>
          <hr className="text-[#E2E8F0]" />
          <div className="flex flex-col gap-[32px]">
            {contactUsData.map(item => (
              <IconBox
                icon={item.icon}
                heading={item.heading}
                paragraph={item.paragraph}
                callToAction={item.callToAction}
              />
            ))}
          </div>
        </div>
        <AuthFormWrapper style={{ minWidth: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-[16px] flex-wrap">
            <div className="grow">
              <AuthField
                {...register('firstName')}
                error={errors.firstName?.message}
                label="First Name"
                placeholder="Enter First Name"
              />
            </div>
            <div className="grow">
              <AuthField
                {...register('lastName')}
                error={errors.lastName?.message}
                label="Last Name"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <AuthField
            {...register('email')}
            error={errors.email?.message}
            label="Email"
            placeholder="Enter Email"
          />
          <AuthField
            {...register('phoneNo')}
            error={errors.phoneNo?.message}
            label="Phone Number"
            placeholder="+44 117 2345678"
          />
          <input
            type="text"
            {...register('website')}
            style={{ display: 'none' }}
            autoComplete="off"
          />
          <div className="flex flex-col gap-[6px]">
            <label className="text-[14px] leading-[20px] text-[#0F172A] font-medium">
              Your Message
            </label>
            <textarea
              className="border border-[#CBD5E1] px-[8px] py-[12px] rounded-[6px]"
              {...register('message')}
              rows={6}
              id=""
              placeholder="Type Your Message Here"
            />
            {errors.message?.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message?.message}</p>
            )}
          </div>
          <AuthButton
            text="Send Message"
            type="submit"
            disabled={Boolean(!isValid || watch('website'))}
          />
        </AuthFormWrapper>
      </div>
    </div>
  );
};

export default ContactFormSection;
