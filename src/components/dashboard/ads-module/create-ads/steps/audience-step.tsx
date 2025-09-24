import { Locate, User } from 'lucide-react';
import InputComponent from '../input-component';

const AudienceStep = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="flex flex-col gap-6">
        <InputComponent
          Icon={User}
          label="Who do you usually serve?"
          placeholder="Small businesses in UK, Fitness enthusiasts aged 25-40 etc."
        />
        <InputComponent
          Icon={Locate}
          label="Where are they located?"
          placeholder="London only”, “UK nationwide”, “English-speaking countries” etc."
        />
      </div>
    </div>
  );
};

export default AudienceStep;
