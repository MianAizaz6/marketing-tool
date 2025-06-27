
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import OptimizationCard from './optimization-card';

interface RankingKeywordData {
  keyword: string;
  value: number;
}

const rankingKeywords: RankingKeywordData[] = [
  { keyword: 'Instagram ad', value: 1 },
  { keyword: 'linkedin versus facebook for marketing', value: 1 },
  { keyword: 'website audit', value: 1 },
  { keyword: 'social media automation software', value: 1 },
  { keyword: 'instagram versus facebook', value: 1 },
  { keyword: 'instagram versus facebook for marketing', value: 1 },
  { keyword: 'ad posting', value: 1 },
];

interface KeywordData {
  keyword: string;
  value: number;
}

const keywords: KeywordData[] = [
  { keyword: 'ai social media manager', value: 54 },
  { keyword: 'ai social media', value: 43 },
  { keyword: 'social media scheduling tool', value: 36 },
  { keyword: 'social media marketing ai', value: 21 },
  { keyword: 'social media automation software', value: 28 },
  { keyword: 'automation', value: 15 },
  { keyword: 'website audit', value: 19 },
];

const KeyWordsOptimization = () => {
  return (
    <DashboardCard className="flex flex-col gap-[16px]" border={true}>
      <DashboardHeading heading="Keywords Optimization" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <OptimizationCard tableHeadings={['Keyword', 'Visiblity']} listData={keywords} heading={"Keywords by Estimated Clicks"} subHead={"Estimated clicks for top keywords, based on volume and CTR."} />
        <OptimizationCard tableHeadings={['Keyword', 'Rank']} listData={rankingKeywords} heading={"Top Ranking Keywords "} subHead={"Your top keywords sorted by ranking position."} />
      </div>
    </DashboardCard>
  );
};

export default KeyWordsOptimization;
