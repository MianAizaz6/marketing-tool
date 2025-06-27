// import KeyWordsOptimization from '../../../components/dashboard/website-module/seo-analysis/keywords-optimization';
// import MobileFriendliness from '../../../components/dashboard/website-module/seo-analysis/mobile-friendliness';
import SeoCommonIssues from '../../../components/dashboard/website-module/seo-analysis/seo-issues';
import SeoMetricsSection from '../../../components/dashboard/website-module/seo-analysis/seo-metrics-section';
import SeoOverviewSection from '../../../components/dashboard/website-module/seo-analysis/seo-overview-section';
import SpeedCompetitorSection from '../../../components/dashboard/website-module/speed-analysis/speed-competitor-section';
import SpeedImprovmentsSection from '../../../components/dashboard/website-module/speed-analysis/speed-improvments-section';
import { improvementsSuggestionTextData, seoMetricsOptions, seoimprovementsData } from '../../../static-data';


const SpeedAnalysis = () => {
  return (
    <>
      <SeoOverviewSection />
      <SeoMetricsSection />
      <SeoCommonIssues />
      <SpeedImprovmentsSection improvementsSuggestionsData={seoimprovementsData} speedMetricsOptions={seoMetricsOptions} improvementsSuggestionTextData={improvementsSuggestionTextData} />
      {/* <KeyWordsOptimization /> */}
      {/* <MobileFriendliness /> */}
      <SpeedCompetitorSection />
    </>

  );
};

export default SpeedAnalysis;
