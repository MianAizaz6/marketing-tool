import { useState } from 'react';
// eslint-disable-next-line no-shadow-restricted-names
import { Sun, Infinity, DollarSign, Calendar, Sparkles } from 'lucide-react';
import InputComponent from '../input-component';
import { aiRecommendationData, AIRecommendationType } from '../../../../../static-data';

type BudgetType = 'daily' | 'lifetime';

// Example AI response (in real case you’ll fetch from backend/AI)

const BudgetDurationStep = () => {
  const [budgetType, setBudgetType] = useState<BudgetType>('daily');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [aiRecommendation, setAiRecommendation] =
    useState<AIRecommendationType>(aiRecommendationData);
  // const [budget, setBudget] = useState<number>(20);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Panel: User Inputs */}
      <div className="space-y-6">
        {/* Budget Type Selection */}
        <div className="flex gap-3">
          <button
            onClick={() => setBudgetType('daily')}
            className={`p-6 rounded-xl ${budgetType === 'daily' ? 'bg-[#FF4400]' : 'bg-white hover:bg-gray-50'} border-2 text-left transition-all border-gray-200 hover:border-gray-300 `}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg ${budgetType === 'daily' ? 'bg-black' : 'bg-gray-100'} `}
              >
                <Sun
                  className={`w-6 h-6  ${budgetType === 'daily' ? 'text-white' : 'text-gray-600'} `}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`font-semibold mb-2 ${budgetType === 'daily' ? 'text-white' : 'text-gray-900'} `}
                >
                  Daily Budget
                </h3>
                <p
                  className={`text-sm  ${budgetType === 'daily' ? 'text-white' : 'text-gray-600'} `}
                >
                  Spend per day, runs until paused
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setBudgetType('lifetime')}
            className={`p-6 rounded-xl ${budgetType === 'lifetime' ? 'bg-[#FF4400]' : 'bg-white hover:bg-gray-50'} border-2 text-left transition-all border-gray-200 hover:border-gray-300 `}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg ${budgetType === 'lifetime' ? 'bg-black' : 'bg-gray-100'} `}
              >
                <Infinity
                  className={`w-6 h-6  ${budgetType === 'lifetime' ? 'text-white' : 'text-gray-600'} `}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`font-semibold mb-2 ${budgetType === 'lifetime' ? 'text-white' : 'text-gray-900'} `}
                >
                  Lifetime Budget
                </h3>
                <p
                  className={`text-sm  ${budgetType === 'lifetime' ? 'text-white' : 'text-gray-600'} `}
                >
                  Spread spend over chosen dates{' '}
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <InputComponent
            placeholder={`Enter the amount you want to spend ${
              budgetType === 'daily'
                ? 'per day'
                : budgetType === 'lifetime'
                  ? 'in total (lifetime)'
                  : ''
            } or select using the slider`}
            label="Budget Amount"
            Icon={DollarSign}
          />
        </div>
        {/* Duration (if lifetime) */}
        {budgetType === 'lifetime' && (
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Calendar className="w-4 h-4 text-gray-600" />
                <label className="text-[#364153] text-[14px] font-medium capitalize">
                  Start Date
                </label>
              </div>
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Calendar className="w-4 h-4 text-gray-600" />
                <label className="text-[#364153] text-[14px] font-medium capitalize">
                  End Date
                </label>
              </div>
              <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-2 py-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Right Panel: AI Guidance */}
      <div className="bg-gradient-to-br h-fit from-orange-50 to-red-50 rounded-lg p-6">
        <div className="flex items-center mb-4 gap-3">
          <div className="w-10 h-10 bg-[#FF4400] rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">AI Recommendations</h4>
            <p className="text-sm text-gray-600">Suggested Spend & Timeline</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Type</span>
            <span className="px-2 py-1 bg-white min-w-[120px] text-center rounded-md shadow-sm text-gray-900 text-sm font-semibold capitalize">
              {aiRecommendation.type === 'daily' ? 'Daily Budget' : 'Lifetime Budget'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Recommended Budget</span>
            <span className="px-2 py-1 min-w-[120px] text-center bg-white rounded-md shadow-sm text-gray-900 text-sm font-semibold">
              {aiRecommendation.type === 'daily'
                ? `$${aiRecommendation.budget} / day`
                : `$${aiRecommendation.budget} total`}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Recommended Duration</span>
            <span className="px-2 py-1 bg-white min-w-[120px] text-center rounded-md shadow-sm text-gray-900 text-sm font-semibold">
              {aiRecommendation.duration} days
            </span>
          </div>
        </div>

        {/* Apply Recommendation Button */}
        <button
          type="button"
          onClick={() => {
            // TODO: hook this to your applyRecommendation handler
            // Example: applyRecommendation(aiRecommendation)
          }}
          className="mt-4 w-full bg-[#FF4400] text-white text-sm font-semibold py-2 rounded-md hover:bg-[#e63c00] transition"
          aria-label={
            aiRecommendation.type === 'daily'
              ? `Apply $${aiRecommendation.budget} per day for ${aiRecommendation.duration} days`
              : `Apply $${aiRecommendation.budget} total for ${aiRecommendation.duration} days`
          }
        >
          {aiRecommendation.type === 'daily'
            ? `Apply $${aiRecommendation.budget} / day for ${aiRecommendation.duration} days`
            : `Apply $${aiRecommendation.budget} total for ${aiRecommendation.duration} days`}
        </button>

        <p className="text-xs text-gray-500 mt-3 italic">
          These are starting points — adjust anytime as your campaign runs.
        </p>
      </div>
    </div>
  );
};

export default BudgetDurationStep;
