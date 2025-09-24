// import KeyWordsOptimization from '../../../components/dashboard/website-module/seo-analysis/keywords-optimization';
// import MobileFriendliness from '../../../components/dashboard/website-module/seo-analysis/mobile-friendliness';
import { useQuery } from '@tanstack/react-query';


import { getMobileUsabilityReport } from '../../../apis/website-audit';
import { MobileUsabilityReport } from '../../../utils/interfaces';
import MobileUsabilitySection from '../../../components/dashboard/website-module/mobile-usability/mobile-usablity-section';
import MoibileUsabilityPrioties from '../../../components/dashboard/website-module/speed-analysis/speed-improvments-section';
import { generatePDFfromReport } from '../../../utils/utilityFunctions';
import SeoOverviewSection from '../../../components/dashboard/website-module/seo-analysis/seo-overview-section';
import DashboardHeading from '../../../components/ui-components/dashboard/dashboard-heading';


const MobileUsability = () => {
  const worksSpaceStoredInfo = localStorage.getItem('selectedWorkspace');
  const worksSpaceId = worksSpaceStoredInfo ? JSON.parse(worksSpaceStoredInfo).id : null;


  const mobileUsabilityQuery = useQuery<MobileUsabilityReport>({
    queryKey: ['mobile-usability', worksSpaceId],
    queryFn: async () => {
      const data = await getMobileUsabilityReport(`?onboardProcessId=${worksSpaceId}`);
      return data;
    },
  });

  if (mobileUsabilityQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center space-y-4">
          <div className="animate-spin h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full mx-auto"></div>
          <h2 className="text-xl font-medium text-gray-700">
            Analyzing your website mobile usability performance...
          </h2>
          <p className="text-sm text-gray-500">
            This may take up to a minutes. Hang tight while we prepare your insights!
          </p>
        </div>
      </div>
    );
  }

  if (mobileUsabilityQuery.isError || !mobileUsabilityQuery?.data) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center space-y-3">
          <h2 className="text-xl font-semibold text-red-500">Something went wrong!</h2>
          <p className="text-gray-600">We couldn’t load the SEO report right now.</p>
          <button
            className="px-4 py-2 bg-orange-500 cursor-pointer text-white rounded-md hover:bg-orange-600 transition"
            onClick={() => mobileUsabilityQuery.refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <div className='flex justify-between items-center gap-5'>

        <DashboardHeading heading="Mobile Usability Metrics" />

        {mobileUsabilityQuery?.data?.report && mobileUsabilityQuery?.data.report !== '' ? (<button
          onClick={() => generatePDFfromReport(mobileUsabilityQuery?.data.report)}
          className={` bg-[#FF4400] text-white cursor-pointer  px-5 py-2 rounded-md`}
        >
          Download Report
        </button>) : undefined}
      </div>

      <SeoOverviewSection
        date={mobileUsabilityQuery?.data?.createdAt}
        seoScore={mobileUsabilityQuery?.data?.score}
        websiteUrl={'www.google.com'}
        key={mobileUsabilityQuery?.data?.id}
        priorityNumber={{
          high: mobileUsabilityQuery?.data?.priorities?.high?.length,
          medium: mobileUsabilityQuery?.data?.priorities?.medium?.length,
          low: mobileUsabilityQuery?.data?.priorities?.low?.length,
        }}
        type="Mobile Usability"
      />

      <MobileUsabilitySection data={mobileUsabilityQuery?.data} />

      <MoibileUsabilityPrioties suggestionData={mobileUsabilityQuery?.data?.priorities} />
    </div>
  );
};

export default MobileUsability;
