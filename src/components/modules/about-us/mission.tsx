import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-8">
          OUR VISION AND MISSION
        </h2>

        <div className="grid md:grid-cols-2 gap-6 p-6 bg-[#f8f8f8] rounded-md">
          <div className="bg-[#f8f8f8] p-6 border-[3px] border-white rounded-lg shadow-md">
            <h3 className="text-md text-left font-semibold text-[#0F172A] mb-4">VISION STATEMENT</h3>
            <div className="bg-white p-4 rounded-md text-left text-sm text-gray-700">
              <p className="mb-4">
                "To become the most trusted social media management platform that empowers businesses, creators, and marketing teams to grow, engage, and thrive in the digital world.
              </p>
              <p className="mb-4">
                We envision a future where managing social media is no longer overwhelming — but instead, strategic, efficient, and aligned with business goals.
              </p>
              <p>
                By equipping our users with smart, scalable tools, we aim to redefine how brands connect with their audiences and turn content into real, measurable growth"
              </p>
            </div>
          </div>

          <div className="bg-[#f8f8f8] p-6 border-[3px] border-white rounded-lg shadow-md">
            <h3 className="text-md text-left font-semibold text-[#0F172A] mb-4">MISSION STATEMENT</h3>
            <div className="bg-white p-4 rounded-md text-left text-sm text-gray-700">
              <p className="mb-4">
                "Our mission is to simplify and elevate the way businesses manage their social media — making it easier to stay consistent, creative, and results-driven across every platform.
              </p>
              <p className="mb-4">
                We’re building intuitive, all-in-one software that supports every step of the content journey — from planning and collaboration to scheduling, publishing, and performance tracking.
              </p>
              <p>
                We believe great tools lead to great results — and we’re here to help brands grow smarter, every day"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
