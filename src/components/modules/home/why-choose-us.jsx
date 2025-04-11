import React from 'react';
import { CheckSquare } from 'lucide-react';
import { whyChooseImg } from '../../../static-img-url';

const features = [
  {
    title: 'INSTANT TREND DETECTION',
    description:
      'AI continuously scans social media and industry trends in real time, helping you create relevant, high-impact content that resonates with your audience and keeps you ahead of the competition.'
  },
  {
    title: 'AUTOMATED CUSTOMER INTERACTION',
    description:
      'AI-powered chatbots and smart response systems engage with customers instantly, answering queries, resolving issues, and personalizing interactions—boosting customer satisfaction and brand loyalty.'
  },
  {
    title: 'REAL-TIME PERFORMANCE TRACKING',
    description:
      'Get live insights into your campaigns with AI-driven analytics. Track engagement, measure ROI, and receive intelligent recommendations to refine your strategy and maximize results instantly.'
  }
];

const WhyChooseAI = () => {
  return (
    <section className="bg-[#0C0F1F] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          WHY CHOOSE OUR AI PRODUCT?
        </h2>
        <div className="grid md:grid-cols-2 gap-1 items-start">
          {/* Features */}
          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-orange-500 rounded-lg p-5 flex gap-4 items-start hover:shadow-lg transition-all"
              >
                <div className="bg-white p-2 rounded-md">
                  <CheckSquare className="text-black w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-[16px] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={whyChooseImg}
              alt="AI Dashboard Illustration"
              className="w-full max-w-md rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAI;