import React, { useState } from 'react';
import Header from '../components/ui-components/header';
import Footer from '../components/ui-components/footer';
import { paypalIcon } from '../static-img-url';
import CustomModel from '../components/ui-components/custom-model';
import PaymentProcessing from '../components/modules/pricing-plans/payment-processing-popup';
import PaymentSuccess from '../components/modules/pricing-plans/payment-success-popup';

interface Plan {
  id: number;
  label: string;
  name: string;
  price: number;
  includes: string[];
}

const plans: Plan[] = [
  {
    id: 1,
    label: 'Starter Plan',
    name: 'Starter Plan',
    price: 19,
    includes: [
      'Connect up to 5 social profiles',
      'Schedule up to 50 posts/month',
      'Basic content calendar',
      'Mobile app access',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    id: 2,
    label: 'Growth Plan',
    name: 'Growth Plan',
    price: 49,
    includes: [
      'Connect up to 25 social profiles',
      'Schedule up to 100 posts/month',
      'Advanced content calendar',
      'Mobile app + web access',
      'Advanced analytics',
      'Priority email support',
    ],
  },
  {
    id: 3,
    label: 'Business Plan',
    name: 'Business Plan',
    price: 99,
    includes: [
      'Connect up to 50 social profiles',
      'Unlimited posts/month',
      'Full content suite',
      'Team collaboration tools',
      'Dedicated support manager',
      'Phone & email support',
    ],
  },
];

const PaymentFormPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isYearly, setIsYearly] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const selectedPlan = plans.find((plan) => plan.id === activeTab)!;

  const toggleProcess = () => {
    setProcessing(!processing);
  }

  const toggleSuccessPopup = () => {
    setPaymentSuccess(!paymentSuccess);
  }

  const getTotalPrice = () => {
    return isYearly ? selectedPlan.price * 12 * 0.75 : selectedPlan.price;
  };

  return (
    <div className='flex flex-col gap-12'>
      <Header />
      <div className='max-w-5xl mx-auto'>
        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
        <div className=" grid md:grid-cols-2 gap-0 border-[1px] border-[#dde3ea] shadow-md rounded overflow-hidden">
          {/* Left - Payment Form */}
          <div className="bg-white p-6 rounded-[8px_0px_0px_8px] shadow-md">
            <button onClick={() => toggleProcess()} className="w-full border py-2 rounded mb-4 bg-gray-50 hover:bg-gray-100 font-medium text-sm flex items-center justify-center">
              <img src={paypalIcon} alt="PayPal" className="h-5 mr-2" /> Pay with PayPal
            </button>
            <p className="text-center text-sm text-gray-400 mb-4">or</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full p-3 border border-gray-300 rounded-md text-sm bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-3 border border-gray-300 rounded-md text-sm bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="123"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full p-3 border border-gray-300 rounded-md text-sm bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-black"
              />
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By confirming your subscription, you allow us to charge your card for this payment and future payments in accordance with our Terms & Privacy.
            </p>
          </div>

          {/* Right - Plan Summary */}
          <div className="bg-[#F8F8F8] p-6">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  className={`border rounded-full text-sm px-3 py-1 ${activeTab === plan.id ? 'border-orange-500 bg-orange-100 text-orange-600' : 'bg-white text-gray-600'
                    }`}
                  onClick={() => setActiveTab(plan.id)}
                >
                  {plan.label}
                </button>
              ))}
            </div>

            <div className="mb-3">
              <h3 className="text-lg font-semibold">{selectedPlan.name}</h3>
              <p className="text-xl font-bold mt-1">${selectedPlan.price.toFixed(2)} <span className="text-sm font-normal">/month</span></p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <p className="text-sm font-medium text-gray-900">Monthly</p>

              {/* Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <div className="w-12 h-6 bg-[#0B1120] rounded-full relative transition-colors duration-300">
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'
                      }`}
                  ></span>
                </div>
              </label>

              <p className="text-sm font-medium text-gray-900">Annually</p>

              <span className="ml-2 text-xs font-medium text-[#F04438] bg-[#FFF2F0] px-3 py-1 rounded-full">
                Save 25%
              </span>
            </div>


            {/* Collapse */}
            <div>
              <div
                onClick={() => setShowDetails(!showDetails)}
                className="flex justify-between items-center cursor-pointer mb-2"
              >
                <h4 className="font-semibold text-sm text-gray-800">Plan Includes:</h4>
                <span className="text-lg font-bold">{showDetails ? '-' : '+'}</span>
              </div>
              {showDetails && (
                <ul className="space-y-2 text-sm text-gray-700">
                  {selectedPlan.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Total */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-gray-700">${getTotalPrice().toFixed(2)}</span>
              </div>
              <input
                type="text"
                placeholder="Promo Code"
                className="input mb-2"
              />
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total Payment</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <button onClick={() => toggleSuccessPopup()} className="w-full mt-4 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md">
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <CustomModel heading={''} open={processing} header={false} toggle={toggleProcess} height={'h-[270px]'} width={'w-[400px]'}>
        <PaymentProcessing />
      </CustomModel>

      <CustomModel heading={''} open={paymentSuccess} header={false} toggle={toggleSuccessPopup} height={'h-[290px]'} width={'w-[400px]'}>
        <PaymentSuccess />
      </CustomModel>
      <Footer />
    </div>
  );
};

export default PaymentFormPage;
