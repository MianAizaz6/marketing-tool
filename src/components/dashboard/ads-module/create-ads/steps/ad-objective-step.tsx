import { useState } from 'react';
import { adObjectives } from '../../../../../static-data';

const AdObjectiveStep = () => {
  const [selectedObjective, setSelectedObjective] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[60%] ">
        {adObjectives.map(({ id, title, description, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setSelectedObjective(id)}
            className={`p-6 rounded-xl ${selectedObjective === id ? 'bg-[#FF4400]' : 'bg-white hover:bg-gray-50'} border-2 text-left transition-all border-gray-200 hover:border-gray-300 `}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg ${selectedObjective === id ? 'bg-black' : 'bg-gray-100'} `}
              >
                <Icon
                  className={`w-6 h-6  ${selectedObjective === id ? 'text-white' : 'text-gray-600'} `}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`font-semibold mb-2 ${selectedObjective === id ? 'text-white' : 'text-gray-900'} `}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm  ${selectedObjective === id ? 'text-white' : 'text-gray-600'} `}
                >
                  {description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdObjectiveStep;
