import React, { useState } from 'react';

interface PlanFeature {
  label: string;
  included: boolean;
}

interface Plan {
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  cta: string;
  featured: boolean;
  features: PlanFeature[];
}

const pricingPlans: Plan[] = [
  {
    name: 'Starter',
    description: 'Perfect for individuals or small businesses getting started.',
    priceMonthly: 19,
    priceYearly: 15,
    cta: 'Try for free',
    featured: false,
    features: [
      { label: 'Connect up to 5 social profiles', included: true },
      { label: 'Schedule up to 50 posts/month', included: true },
      { label: 'Basic content calendar', included: true },
      { label: 'Mobile app access', included: true },
      { label: 'Basic analytics', included: true },
      { label: 'Email support', included: true },
    ],
  },
  {
    name: 'Growth',
    description: 'For growing teams who want more content power and collaboration.',
    priceMonthly: 49,
    priceYearly: 39,
    cta: 'Try for free',
    featured: true,
    features: [
      { label: 'Connect up to 25 social profiles', included: true },
      { label: 'Schedule up to 150 posts/month', included: true },
      { label: 'Basic content calendar', included: true },
      { label: 'Mobile app access', included: true },
      { label: 'Basic analytics', included: true },
      { label: 'Email support', included: true },
    ],
  },
  {
    name: 'Business',
    description: 'Designed for agencies, marketers, and larger teams.',
    priceMonthly: 99,
    priceYearly: 79,
    cta: 'Try for free',
    featured: false,
    features: [
      { label: 'Connect up to 50 social profiles', included: true },
      { label: 'Schedule up to 150 posts/month', included: true },
      { label: 'Basic content calendar', included: true },
      { label: 'Mobile app access', included: true },
      { label: 'Basic analytics', included: true },
      { label: 'Customer support', included: true },
      { label: 'Online support', included: true },
    ],
  },
];

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-white  px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-green-600">FAIR</span> PRICING, SIMPLE CHOICES!
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Choose a plan that fits your workflow and team size. All plans include a free 14-day trial. No credit card required.
      </p>

      <div className="inline-flex mt-6 rounded-full border border-gray-200">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-4 py-2 text-sm rounded-l-full ${!isYearly ? 'bg-black text-white' : 'text-gray-700'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-4 py-2 text-sm rounded-r-full ${isYearly ? 'bg-black text-white' : 'text-gray-700'}`}
        >
          Yearly <span className="text-red-500 text-xs ml-1">Save 25%</span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-10 max-w-6xl mx-auto">
        {pricingPlans.map((plan, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border shadow-sm ${plan.featured ? 'bg-black text-white' : 'bg-white text-black'
              }`}
          >
            <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
            <p className="text-sm mb-4">{plan.description}</p>
            <div className="text-3xl font-bold mb-1">
              ${isYearly ? plan.priceYearly : plan.priceMonthly}
            </div>
            <p className="text-sm mb-4">per month</p>
            <button
              className={`w-full py-2 rounded-md font-medium ${plan.featured ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-white text-black border'
                }`}
            >
              {plan.cta}
            </button>

            <ul className="mt-6 space-y-2 text-sm text-left">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {feature.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

