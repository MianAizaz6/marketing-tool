import React from 'react'
import CardWrapper from './card-wrapper';
import InputField from '../../ui-components/form-inputs';
import Textarea from '../../ui-components/form-inputs/textarea';
import FileInput from '../../ui-components/form-inputs/file-input';

type MyComponentProps = {
  ChangeStep: (step: number) => void,
  formData: object,
  onChangeHandler: (name: string, value: string) => void,
  validation: boolean,
};

const WebsiteInfo: React.FC<MyComponentProps> = ({ ChangeStep, formData, onChangeHandler, validation }) => {


  const { websiteUrl, description, logo } = formData;

  return (
    <CardWrapper title='Website URL and Business Description' desc="Set up your workspace to personalize and organize your 
     social media management.">
      <div className="space-y-4 bg-white p-6 rounded-md">


        <div>
          <InputField name="websiteUrl" label='Website URL *' validation={validation} type="text" placeholder="Website URL" value={websiteUrl} onChange={onChangeHandler} />
        </div>

        <Textarea name="description" label='Business Description' type="text" placeholder="Business Description" value={description} onChange={onChangeHandler} />

        <div>
          <FileInput
            buttonLabel="Upload Profile image"
            label="Upload Logo"
            name="logo"
            onChange={onChangeHandler}
            value={logo}
          />
        </div>


      </div>
      <div className='flex justify-end w-full mt-5'>
        <button
          type="button"
          onClick={() => ChangeStep(2)}
          className="w-fit px-8 bg-black cursor-pointer text-white rounded-md py-2 font-medium hover:bg-gray-900 transition"
        >
          Let's Continue
        </button>
      </div>
    </CardWrapper>
  )
}

export default WebsiteInfo
