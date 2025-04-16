import React from 'react'

const CTASection = () => {
  return (
    <section className="bg-[#0C0F1F] py-20 px-4 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        TRY OUR <span className="text-orange-500">AI SOFTWARE</span> <br /> FOR{' '}
        <span className="text-orange-500">FREE</span> AND SEE YOUR BUSINESS GROW!
      </h2>
      <p className="max-w-xl mx-auto mb-6 text-sm md:text-base text-gray-300">
        Experience the power of automation, smart analytics, and AI-driven insights. Sign up for
        a free trial today!
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-[#FA503E] text-white px-6 py-2 rounded shadow">
          Try our product
        </button>
        <button className="border border-white px-6 py-2 rounded">Learn more</button>
      </div>
    </section>
  )
}

export default CTASection
