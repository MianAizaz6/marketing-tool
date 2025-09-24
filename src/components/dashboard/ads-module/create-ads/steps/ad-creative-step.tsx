import { FileText, MousePointer, Type, Upload, UploadIcon } from 'lucide-react';
import InputComponent from '../input-component';
import TextAreaComponent from '../textArea-component';
import SelectComponent from '../select-component';
import { callToActionOptions } from '../../../../../static-data';
import FileUploadComponent from '../file-upload-component';

const AdCreativeStep = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      <div className="flex flex-col gap-6">
        <InputComponent
          placeholder="Enter a compelling headline that grabs attention"
          label="Ad Headline"
          Icon={Type}
          aiSuggestion={true}
        />
        <TextAreaComponent
          label="Ad Description"
          placeholder="Describe your offer and what makes it valuable to your audience..."
          Icon={FileText}
          rows={4}
          aiSuggestion={true}
        />
        <SelectComponent Icon={MousePointer} label="Call to Action" options={callToActionOptions} />
        <FileUploadComponent
          label="Ad Image or Video"
          accept="PNG, JPG, GIF up to 10MB"
          Icon={Upload}
          aiSuggestion={true}
        />
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-200 h-fit">
        <h3 className="font-semibold text-gray-900 mb-4">Live Ad Preview</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="flex items-center gap-3 p-3 border-b border-gray-100">
            <div className="w-8 h-8 bg-[#FF4400] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">B</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">Your Business</h4>
              <p className="text-xs text-gray-500">Sponsored</p>
            </div>
          </div>
          <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center">
            <div className="text-center">
              <UploadIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <span className="text-gray-500 text-sm">Your ad image will appear here</span>
            </div>
          </div>
          <div className="p-4">
            <h5 className="font-semibold text-gray-900 mb-2 leading-tight">
              Your compelling headline will appear here
            </h5>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Your ad description will appear here. Make it engaging and informative to capture your
              audience's attention.
            </p>
            <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Selected CTA
            </button>
          </div>
        </div>
        <div className="text-xs mt-4 text-gray-500 bg-gray-50 rounded-lg p-3">
          <p className="font-medium mb-1">Preview Note:</p>
          <p>
            This is how your ad will appear on social media platforms. The final appearance may vary
            slightly across different platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdCreativeStep;
