import { useState } from 'react';
import StepsRadioButtons from './steps-radio-buttons';
import { Megaphone, Sparkles, Text } from 'lucide-react';
import { promotionOptions } from '../../../../../static-data';
import TextAreaComponent from '../textArea-component';

const OfferStep = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-6 h-full">
      <StepsRadioButtons
        options={promotionOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        label="Select promotion type"
        Icon={Megaphone}
      />
      <TextAreaComponent
        Icon={Text}
        label="Describe your offer"
        placeholder="E.g., 20% off all products, Free shipping on orders over $50, Buy one get one free"
      />
      <TextAreaComponent
        Icon={Sparkles}
        label="What makes this special or valuable for your customer?"
        placeholder="Helps businesses get more clients online” or “Limited-time discount to save money."
      />
    </div>
  );
};

export default OfferStep;
