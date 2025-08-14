// import KeyWordsOptimization from '../../../components/dashboard/website-module/seo-analysis/keywords-optimization';
// import MobileFriendliness from '../../../components/dashboard/website-module/seo-analysis/mobile-friendliness';
import { useQuery } from '@tanstack/react-query';


import { getMobileUsabilityReport } from '../../../apis/website-audit';
import { SEOReport } from '../../../utils/interfaces';
import MobileUsabilitySection from '../../../components/dashboard/website-module/mobile-usability/mobile-usablity-section';


const MobileUsability = () => {
  const worksSpaceStoredInfo = localStorage.getItem('selectedWorkspace');
  const worksSpaceId = worksSpaceStoredInfo ? JSON.parse(worksSpaceStoredInfo).id : null;


  const mobileUsabilityQuery = useQuery<SEOReport>({
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
            Analyzing your website performance...
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
      <MobileUsabilitySection data={mobileUsabilityQuery?.data} />
    </div>
  );
};

export default MobileUsability;
