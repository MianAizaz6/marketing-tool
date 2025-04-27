import React from 'react';
import { teamImg } from '../../../static-img-url';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">ABOUT US</h2>
          <p className="text-gray-700 mb-4">
            A social media management software designed to help businesses grow and thrive online.
          </p>
          <p className="text-gray-700 mb-4">
            Our all-in-one platform makes it easy to plan, schedule, and publish content across multiple channels — all from a single dashboard. With features like content calendars, AI-powered captions, performance analytics, and team collaboration tools, we empower brands to stay consistent, save time, and reach the right audience.
          </p>
          <p className="text-gray-700">
            Whether you're a small business, growing agency, or established enterprise, our goal is to simplify your social media workflow and support your growth at every stage.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={teamImg}
            alt="About Us Illustration"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
