import { useQuery } from '@tanstack/react-query';
import { getWebsiteSpeedReport } from '../../../../apis/website-audit';
import SpeedCompetitorSection from '../../../../components/dashboard/website-module/speed-analysis/speed-competitor-section';
import SpeedImprovmentsSection from '../../../../components/dashboard/website-module/speed-analysis/speed-improvments-section';
import SpeedMetricsSection from '../../../../components/dashboard/website-module/speed-analysis/speed-metrics-section';
import SpeedOverviewSection from '../../../../components/dashboard/website-module/speed-analysis/speed-overview-section';
import { useState } from 'react';
import { generatePDFfromReport } from '../../../../utils/utilityFunctions';
import Chatbot from '../../../../components/ui-components/chatbot';
import { useChatbot } from '../../../../hooks/useChatbot';

const CompetitorSpeedAnalysis = () => {
  const [strategy, setStrategy] = useState('desktop');

  const worksSpaceStoredInfo = localStorage.getItem('selectedWorkspace');
  const worksSpaceId = worksSpaceStoredInfo ? JSON.parse(worksSpaceStoredInfo).id : null;
  const [toggle, setToggle] = useState(false);

  console.log('===workspaceId', worksSpaceId);

  const websiteSpeedQuery = useQuery({
    queryKey: ['speed-analysis', worksSpaceId],
    queryFn: async () => {
      const data = await getWebsiteSpeedReport(`?onboardProcessId=${worksSpaceId}`);
      return data;
    },
  });

  const { messages, loading, sendMessage } = useChatbot(
    'page_speed',
    worksSpaceId,
    websiteSpeedQuery?.data?.items[0].desktop?.ownWebsiteStats?.id
  );

  if (websiteSpeedQuery.isLoading || !websiteSpeedQuery.data?.items?.length) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center space-y-4">
          <div className="animate-spin h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full mx-auto"></div>
          <h2 className="text-xl font-medium text-gray-700">
            Analyzing your website performance...
          </h2>
          <p className="text-sm text-gray-500">
            This may take up to a few minutes. Hang tight while we prepare your insights!
          </p>
        </div>
      </div>
    );
  }

  console.log('websiteSpeedQuery', websiteSpeedQuery.data);

  const changeDevice = (device: string) => {
    setStrategy(device);
  };

  const improvmentData =
    strategy === 'desktop'
      ? websiteSpeedQuery?.data?.items[0]?.desktop?.ownWebsiteStats?.priorities
      : websiteSpeedQuery?.data?.items[0]?.mobile?.ownWebsiteStats?.priorities;
  const websitePerformance =
    strategy === 'desktop'
      ? websiteSpeedQuery?.data?.items[0]?.desktop?.ownWebsiteStats?.performanceScore
      : websiteSpeedQuery?.data?.items[0]?.mobile?.ownWebsiteStats?.performanceScore;
  const compitatorPerformance =
    strategy === 'desktop'
      ? websiteSpeedQuery?.data?.items[0]?.desktop?.competitorWebsiteStats?.performanceScore
      : websiteSpeedQuery?.data?.items[0]?.mobile?.competitorWebsiteStats?.performanceScore;

  const speedData =
    strategy === 'desktop'
      ? websiteSpeedQuery?.data?.items[0].desktop
      : strategy === 'mobile'
        ? websiteSpeedQuery?.data?.items[0].mobile
        : undefined;

  const isReady = !!(worksSpaceId && speedData?.ownWebsiteStats?.id);

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex justify-end gap-4">
        <button
          onClick={() => changeDevice('desktop')}
          className={`${strategy === 'desktop' ? 'bg-black text-white' : 'bg-gray-100'} cursor-pointer  px-5 py-2 rounded-md`}
        >
          Desktop
        </button>
        <button
          onClick={() => changeDevice('mobile')}
          className={`${strategy === 'mobile' ? 'bg-black text-white' : 'bg-gray-100'} cursor-pointer  px-5 py-2 rounded-md`}
        >
          Mobile
        </button>

        <button
          onClick={() => generatePDFfromReport(speedData?.ownWebsiteStats?.report)}
          className={` bg-[#FF4400] text-white cursor-pointer  px-5 py-2 rounded-md`}
        >
          Download Report
        </button>
      </div>
      <SpeedOverviewSection speedData={speedData} />
      <SpeedMetricsSection speedData={speedData} />
      <SpeedImprovmentsSection suggestionData={improvmentData} />
      <SpeedCompetitorSection
        websitePerformance={websitePerformance}
        compitatorPerformance={compitatorPerformance}
        speedData={speedData}
      />
      <Chatbot
        title="SpeedBot"
        messages={messages}
        loading={loading}
        toggle={toggle}
        handleToggle={() => setToggle(!toggle)}
        onSendMessage={sendMessage}
        isReady={isReady}
      />
    </div>
  );
};

export default CompetitorSpeedAnalysis;
