// import KeyWordsOptimization from '../../../components/dashboard/website-module/seo-analysis/keywords-optimization';
// import MobileFriendliness from '../../../components/dashboard/website-module/seo-analysis/mobile-friendliness';
import { useQuery } from '@tanstack/react-query';
import SeoCommonIssues from '../../../components/dashboard/website-module/seo-analysis/seo-issues';
import SeoMetricsSection from '../../../components/dashboard/website-module/seo-analysis/seo-metrics-section';
import SeoOverviewSection from '../../../components/dashboard/website-module/seo-analysis/seo-overview-section';
// import SpeedCompetitorSection from '../../../components/dashboard/website-module/speed-analysis/speed-competitor-section';
// import SpeedImprovmentsSection from '../../../components/dashboard/website-module/speed-analysis/speed-improvments-section';
// import {
//   improvementsSuggestionTextData,
//   seoMetricsOptions,
//   seoimprovementsData,
// } from '../../../static-data';
import { getWebsiteSeoReport } from '../../../apis/website-audit';
import { SEOReport } from '../../../utils/interfaces';
import SpeedImprovementsSection from '../../../components/dashboard/website-module/speed-analysis/speed-improvments-section';

const SeoAnalysis = () => {
  const worksSpaceStoredInfo = localStorage.getItem('selectedWorkspace');
  const worksSpaceId = worksSpaceStoredInfo ? JSON.parse(worksSpaceStoredInfo).id : null;

  const websiteSeoQuery = useQuery<SEOReport>({
    queryKey: ['seo-analysis'],
    queryFn: async () => {
      const data = await getWebsiteSeoReport(`?onboardProcessId=${worksSpaceId}`);
      return data;
    },
  });

  if (websiteSeoQuery.isLoading) {
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

  if (websiteSeoQuery.isError || !websiteSeoQuery?.data) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center space-y-3">
          <h2 className="text-xl font-semibold text-red-500">Something went wrong!</h2>
          <p className="text-gray-600">We couldn’t load the SEO report right now.</p>
          <button
            className="px-4 py-2 bg-orange-500 cursor-pointer text-white rounded-md hover:bg-orange-600 transition"
            onClick={() => websiteSeoQuery.refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const seoData = websiteSeoQuery.data;
  console.log('websiteSeoQuery', seoData);

  return (
    <div className="flex flex-col gap-[20px]">
      <SeoOverviewSection
        date={seoData.createdAt}
        seoScore={seoData.seoScore}
        websiteUrl={seoData.url}
        key={seoData.id}
      />
      <SeoMetricsSection seoData={seoData} />
      <SeoCommonIssues seoData={seoData} />
      <SpeedImprovementsSection suggestionData={seoData.priorities} />
      {/* <SpeedImprovmentsSection
        improvementsSuggestionsData={seoimprovementsData}
        speedMetricsOptions={seoMetricsOptions}
        improvementsSuggestionTextData={improvementsSuggestionTextData}
      />
      {/* <KeyWordsOptimization /> */}
      {/* <MobileFriendliness /> */}
      {/* <SpeedCompetitorSection /> */}
    </div>
  );
};

export default SeoAnalysis;
