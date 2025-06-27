import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardCircularGraph from '../../../ui-components/dashboard/dashboard-circular-graph';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardSubHeading from '../../../ui-components/dashboard/dashboard-subheading';
import DashboardWebsiteScoreIndicator from '../dashboard-website-score-indicator';
import { WebsiteSpeedStats } from '../../../../types/website-speed-stats';



type Props = {
  speedData: WebsiteSpeedStats;
};

const SpeedOverviewSection: React.FC<Props> = ({ speedData }) => {

  const { performanceScore, accessibilityScore, bestPracticesScore, seoScore  } = (speedData?.ownWebsiteStats ?? {}) as Partial<WebsiteSpeedStats>;

  console.log('===sssss', speedData);
  return (
    <div className="flex gap-[16px]">
      <DashboardCard className="min-w-[260px] min-h-[210px]" border={true}>
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <DashboardCircularGraph
            heading={`${performanceScore}/100`}
            percentage={performanceScore ?? 0}
            color="#00C940"
            size={'126px'}
            headingStyles="text-[24px] leading-[38px] font-[600] text-[#0F172A]"
          />
          <DashboardHeading heading="Website Performance" />
        </div>
      </DashboardCard>
      <DashboardCard className="w-full flex flex-col gap-[12px]">
        <DashboardHeading heading="Website Overview" />
        <div className="flex gap-[16px]">
          <DashboardCard className="min-h-[114px] grow flex flex-col justify-between" border>
            <DashboardSubHeading subheading="Performance" />
            <DashboardCircularGraph
              containerstyles="self-end"
              color="#FFCC00"
              heading={`${performanceScore ?? 0}%`}
              percentage={performanceScore ?? 0}
              size="48px"
              headingStyles="text-[14px] leading-[20px] font-medium text-[#181D27]"
            />
          </DashboardCard>
          <DashboardCard className="min-h-[114px] grow flex flex-col justify-between" border>
            <DashboardSubHeading subheading="Accessibility" />
            <DashboardCircularGraph
              containerstyles="self-end"
              heading={`${accessibilityScore ?? 0}%`}
              color="#FFCC00"
              percentage={accessibilityScore ?? 0}
              size="48px"
              headingStyles="text-[14px] leading-[20px] font-medium text-[#181D27]"
            />
          </DashboardCard>
          <DashboardCard className="min-h-[114px] grow flex flex-col justify-between" border>
            <DashboardSubHeading subheading="Best practices" />
            <DashboardCircularGraph
              containerstyles="self-end"
              color="#34C759"
              heading={`${bestPracticesScore ?? 0}%`}
              percentage={bestPracticesScore ?? 0}
              size="48px"
              headingStyles="text-[14px] leading-[20px] font-medium text-[#181D27]"
            />
          </DashboardCard>
          <DashboardCard className="min-h-[114px] grow flex flex-col justify-between" border>
            <DashboardSubHeading subheading="SEO" />
            <DashboardCircularGraph
              containerstyles="self-end"
              color="#FF3B30"
              heading={`${seoScore ?? 0}%`}
              percentage={seoScore ?? 0}
              size="48px"
              headingStyles="text-[14px] leading-[20px] font-medium text-[#181D27]"
            />
          </DashboardCard>
        </div>
        <div className="self-end">
          <DashboardWebsiteScoreIndicator />
        </div>
      </DashboardCard>
    </div>
  );
};

export default SpeedOverviewSection;
