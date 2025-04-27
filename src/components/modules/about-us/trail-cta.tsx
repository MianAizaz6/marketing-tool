import React from 'react';

const TrialCTA = () => {
  return (
    <section className="relative w-full bg-[#f9f9f9] py-16 px-4 text-center overflow-hidden">
      {/* Light swirl background */}
      <div className="absolute inset-0 bg-[url('/your-swirls-bg.svg')] bg-no-repeat bg-cover opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
          TRY OUR <span className="text-orange-500">AI SOFTWARE</span> <br />
          FOR <span className="text-orange-500">FREE</span> AND SEE YOUR BUSINESS GROW!
        </h2>

        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Experience the power of automation, smart analytics, and AI-driven insights.
          Sign up for a free trial today and take your business to the next level!
        </p>

        <div className="mt-8">
          <button className="border border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-md hover:bg-orange-50 transition">
            Get started – it's free
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrialCTA;
