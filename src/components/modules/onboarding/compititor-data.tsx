import React from 'react'
import CardWrapper from './card-wrapper';
import InputField from '../../ui-components/form-inputs';

type MyComponentProps = {
  ChangeStep: (step: number) => void;
  onChangeHandler: (name: string, value: string) => void,
  addNewLink: () => void,
  websiteURLs: object[],
  limit: number,
  onChangeWebsiteLink: (name: string, value: string) => void,
  removeLink: (index: number) => void
};

const CompititorData: React.FC<MyComponentProps> = ({ ChangeStep, addNewLink, websiteURLs, limit, onChangeWebsiteLink, removeLink }) => {


  const AddButton = <button type="button" onClick={() => addNewLink()} className="w-fit px-8 bg-white border-1 border-[#FF4400] text-[#FF4400] cursor-pointer rounded-md py-2 font-medium hover:bg-[#FF4400] hover:text-white transition"> + Add More </button>

  return (
    <CardWrapper title='Competitor Data Analysis' desc="Choose the best competitors to compare your business stats and improve your business.">
      <div className="space-y-4 bg-white p-6 rounded-md">
        {
          websiteURLs && websiteURLs.length ? websiteURLs.map((item, key) => {
            return (
              <div className='relative'>
                <div className={`${websiteURLs && websiteURLs.length > 1 ? 'w-[95%]' : 'w-full'}`}>
                  <InputField name={key} onChange={onChangeWebsiteLink} label={`Competitor Website URL ${key + 1}`}  type="text" placeholder="Competitor Website URL" value={item.url} />
                </div>
                {
                  websiteURLs && websiteURLs.length > 1 && key > 0 ? <button onClick={() => removeLink(key)} className='absolute cursor-pointer top-10 -right-1 w-6 h-6 bg-red-500 rounded-full text-white text-sm' >X</button> : undefined
                }
              </div>
            )
          }) : undefined
        }

        {limit ? websiteURLs && websiteURLs.length < limit ? AddButton : null : AddButton}

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
