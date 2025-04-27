import React from 'react';
import { customerIcon, innovationIcon, simplicityIcon, trustIcon } from '../../../static-img-url';

const features = [
  {
    title: 'SIMPLICITY',
    description:
      'We believe great software should make life easier — not more complicated. Every feature is designed to simplify your workflow and save you time.',
    icon: simplicityIcon,
  },
  {
    title: 'INNOVATION',
    description:
      'We embrace technology and creativity to deliver tools that are smart, modern, and ahead of the curve.',
    icon: innovationIcon,
  },
  {
    title: 'CUSTOMER-CENTRIC',
    description:
      'Our users are at the heart of everything we do. We listen, learn, and build with your needs in mind — always striving to exceed expectations.',
    icon: customerIcon,
  },
  {
    title: 'TRUST & TRANSPARENCY',
    description:
      'We believe in honest communication, secure technology, and building long-term relationships grounded in trust.',
    icon: trustIcon,
  },
];

const WhatWeStandFor: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
        WHAT WE <span className="text-orange-500">STAND</span> FOR
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
          >
            <img src={feature.icon} alt="" className='h-8 mb-4' />
            <h3 className="text-sm text-left font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-left text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeStandFor;
