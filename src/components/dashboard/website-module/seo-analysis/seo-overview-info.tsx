import React from 'react';
import { seoImg } from '../../../../static-img-url';
import { seoOverviewSectionProps } from '../../../../utils/interfaces';
import { getScoreColorMeta } from '../../../../utils/utilityFunctions';

// Define the props interface for the component

const SeoOverviewInfo: React.FC<seoOverviewSectionProps> = ({ websiteUrl, date, seoScore }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <div className="font-sans antialiased bg-gray-50 ">
      <div
        className="
        bg-white 
        rounded-lg p-4
        flex flex-col md:flex-row
        items-center md:items-start w-full
        space-y-6 md:space-y-0 md:space-x-2
        
      "
      >
        {/* Left Section: Illustration */}
        <div className="flex-shrink-0 w-full md:w-1/4 flex justify-center items-center">
          <img src={seoImg} alt="" />
        </div>

        {/* Right Section: Report Details */}
        <div className="flex-grow w-full md:w-3/4 text-center md:text-left">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-[18px] font-semibold text-gray-900  mb-0">Audit report for</h2>
              <p className="text-[12px] text-gray-600 mb-1">
                Reported created on: <span className="font-medium">{formattedDate}</span>
              </p>
            </div>
            <span
              className="text-white h-fit leading-normal py-[4px] px-[10px] rounded-[20px]"
              style={{ backgroundColor: getScoreColorMeta(seoScore).color }}
            >
              {getScoreColorMeta(seoScore).label} Score
            </span>
          </div>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 text-[18px] font-semibold break-words mb-2 inline-block"
          >
            {websiteUrl}
          </a>

          <p className="text-gray-700 text-[14px] leading-[22px] mb-2">
            This website received an{' '}
            <span className="font-semibold text-gray-900 ">SEO score of {seoScore} out of 100</span>
            , which is {`${seoScore > 75 ? 'higher than' : 'lower than'}`} the average score of 75.
            Our analysis has identified {'14'} important issues that can be addressed to further
            enhance your website's performance and improve its search engine visibility.
          </p>

          <h3 className="text-[14px] font-semibold text-gray-900 mb-3">Improvements and issues</h3>

          <div className="flex flex-wrap justify-center md:justify-start md:gap-20">
            {/* Failed */}
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-red-500 rounded-md p-[14px] flex items-center justify-center text-white text-xs font-bold">
                {'14'}
              </span>
              <span className="text-black  text-sm sm:text-base">Failed</span>
            </div>

            {/* Warnings */}
            <div className="flex items-center space-x-2 ">
              <span className="w-5 h-5 bg-yellow-500 flex p-[14px] rounded-md items-center justify-center text-white text-xs font-bold">
                {'13'}
              </span>
              <span className="text-black text-sm sm:text-base">Warnings</span>
            </div>

            {/* Passed */}
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-green-500 rounded-md p-[14px] flex items-center justify-center text-white text-xs font-bold">
                {'56'}
              </span>
              <span className="text-black text-sm sm:text-base">Passed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoOverviewInfo;
