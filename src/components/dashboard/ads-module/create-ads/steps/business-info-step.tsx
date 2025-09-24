import { Building2, FileText, Globe, Tag } from 'lucide-react';
import InputComponent from '../input-component';
import SelectComponent from '../select-component';
import { businessCategories } from '../../../../../static-data';
import TextAreaComponent from '../textArea-component';

const BusinessInfoStep = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      <div className="flex flex-col gap-6">
        <InputComponent
          placeholder="Enter your business name"
          label="Business Name"
          Icon={Building2}
        />
        <InputComponent
          placeholder="https://www.yourwebsite.com"
          label="Website URL"
          Icon={Globe}
        />
        <SelectComponent Icon={Tag} label="Business Category" options={businessCategories} />
        <TextAreaComponent
          label="Business Description"
          placeholder="Describe what your business does and what makes it unique..."
          Icon={FileText}
          rows={4}
        />
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-200 h-fit">
        <h3 className="font-semibold text-gray-900 text-[16px] mb-4">Business Profile Preview</h3>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#FF4400] rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-[16px] font-semibold text-gray-900">Your Business Name</h4>
              <p className="text-sm text-gray-600">Business Category</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Your business description will appear here...
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-900">
            <Globe className="w-4 h-4" />
            <span className="text-[14px] ">www.yourwebsite.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoStep;
