import React from 'react'
import CardWrapper from './card-wrapper';
import InputField from '../../ui-components/form-inputs';

type MyComponentProps = {
  ChangeStep: (step: number) => void;
  formData: object,
  onChangeHandler: (name: string, value: string) => void,
};

const CompititorData: React.FC<MyComponentProps> = ({ ChangeStep, formData }) => {

  const { compititorData } = formData;

  return (
    <CardWrapper title='Competitor Data Analysis' desc="Choose the best competitors to compare your business stats and improve your business.">
      <div className="space-y-4 bg-white p-6 rounded-md">
        <div>
          <InputField name="websiteUrl" label='Competitor Website URL' type="text" placeholder="Competitor Website URL" value={'websiteUrl'} />
        </div>


        <button
          type="button"
          onClick={() => ChangeStep(4)}
          className="w-fit px-8 bg-white border-1 border-[#FF4400] text-[#FF4400] cursor-pointer rounded-md py-2 font-medium hover:bg-[#FF4400] hover:text-white transition"
        >
          + add more
        </button>
      </div>
      <div className='flex justify-between  w-full mt-5'>
        <button
          type="button"
          onClick={() => ChangeStep(2)}
          className="w-fit px-8 bg-white cursor-pointer border-1 border-[#CBD5E1] text-black rounded-md py-2 font-medium hover:bg-gray-900 hover:text-white transition"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => ChangeStep(4)}
          className="w-fit px-8 bg-black cursor-pointer text-white rounded-md py-2 font-medium hover:bg-gray-900 transition"
        >
          Next
        </button>
      </div>
    </CardWrapper>
  )
}

export default CompititorData;
