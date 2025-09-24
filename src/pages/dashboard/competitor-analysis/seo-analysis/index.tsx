
import { useQuery } from '@tanstack/react-query';
import { SEOReport } from '../../../../utils/interfaces';
import Chatbot from '../../../../components/ui-components/chatbot';
import React, { useState } from 'react';
import { useChatbot } from '../../../../hooks/useChatbot';
import { getCompetitorSeoReport } from '../../../../apis/competitor-analysis';
import SeoScoreCard from '../../../../components/dashboard/website-module/seo-analysis/comp-seo-card';
import DashboardHeading from '../../../../components/ui-components/dashboard/dashboard-heading';
import { CompareSection } from '../../../../components/dashboard/website-module/seo-analysis/competitor/compare-section';
import { Tabs } from '../../../../components/dashboard/website-module/seo-analysis/competitor/seo-tabs';


const docIcon = "📄";
const contentIcon = "📝";
const techIcon = "⚙️";
const perfIcon = "📈";

const CompetitorSeoAnalysis = () => {
  const worksSpaceStoredInfo = localStorage.getItem('selectedWorkspace');
  const worksSpaceId = worksSpaceStoredInfo ? JSON.parse(worksSpaceStoredInfo).id : null;
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("meta");

  const websiteSeoQuery = useQuery<SEOReport>({
    queryKey: ['seo-analysis', worksSpaceId],
    queryFn: async () => {
      const data = await getCompetitorSeoReport(`?onboardProcessId=${worksSpaceId}`);
      return data;
    },
  });

  const { messages, loading, sendMessage } = useChatbot(
    'seo',
    worksSpaceId,
    websiteSeoQuery?.data?.id
  );

  if (websiteSeoQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center space-y-4">
          <div className="animate-spin h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full mx-auto"></div>
          <h2 className="text-xl font-medium text-gray-700">
            Analyzing your competitor website SEO performance...
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

  const seoData = websiteSeoQuery.data?.competitorAnalysis;
  console.log('websiteSeoQuery1111', seoData);
  const isReady = !!(worksSpaceId && seoData?.id);

  console.log('====1233344000', websiteSeoQuery?.data);

  const Sparkle = () => <span className="inline-block">✨</span>;
  const Trophy = () => <span className="inline-block">🏆</span>;
  const Bolt = () => <span className="inline-block">⚡</span>;





  const tabs = [
    { key: "meta", label: "Meta Tags & Structure", icon: <span>{docIcon}</span> },
    { key: "content", label: "Content Quality", icon: <span>{contentIcon}</span> },
    { key: "technical", label: "Technical SEO", icon: <span>{techIcon}</span> },
    { key: "performance", label: "Performance", icon: <span>{perfIcon}</span> },
  ];

  // Example numbers:
  const yourSite = {
    titleLen: 55,
    descLen: 180,
    h1Ok: true,
  };

  const competitor = {
    titleLen: 52,
    descLen: 155,
    h1Ok: true,
  };



  return (
    <div className="flex flex-col gap-[20px]">
      <DashboardHeading heading="Competitor SEO report for" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 bg-slate-50">
        <SeoScoreCard
          title={websiteSeoQuery?.data?.ownWebsite}
          subtitle="Your Website"
          score={seoData?.seoScore?.ownWebsiteData}
          leftIcon={<Sparkle />}
          rightIcon={<Trophy className="opacity-60" />}
        />

        <SeoScoreCard
          title={websiteSeoQuery?.data?.competitorWebsite}
          subtitle="Competitor"
          score={seoData?.seoScore?.competitorWebsiteData}
          leftIcon={<Bolt />}
          rightIcon={<Trophy />}
        />
      </div>


      <Tabs tabs={tabs} active={active} onChange={setActive} />

      {active === "meta" && (
        <CompareSection
          left={{
            title: "Your Website",
            leftBadge: <span className="text-orange-500">✨</span>,
            items: [
              { label: "Title", key: "title", value: yourSite.titleLen },
              { label: "Description", key: "description", value: yourSite.descLen },
              { label: "H1", key: "h1", value: yourSite.h1Ok },
            ],
          }}
          right={{
            title: "Competitor",
            leftBadge: <span className="text-blue-500">⚡</span>,
            items: [
              { label: "Title", key: "title", value: competitor.titleLen },
              { label: "Description", key: "description", value: competitor.descLen },
              { label: "H1", key: "h1", value: competitor.h1Ok },
            ],
          }}
        />
      )}


      {active === "content" && (
        <div className="rounded-2xl bg-white ring-1 ring-black/5 p-6 text-slate-600">
          {/* content quality comparison goes here */}
          Coming soon…
        </div>
      )}

      {active === "technical" && (
        <div className="rounded-2xl bg-white ring-1 ring-black/5 p-6 text-slate-600">
          {/* technical SEO comparison */}
          Coming soon…
        </div>
      )}

      {active === "performance" && (
        <div className="rounded-2xl bg-white ring-1 ring-black/5 p-6 text-slate-600">
          {/* performance comparison */}
          Coming soon…
        </div>
      )}







      {/* 
      <SeoMetricsSection seoData={seoData} perspective="ownWebsiteData" />
      <SeoMetricsSection seoData={seoData} perspective="competitorWebsiteData" /> */}



      <Chatbot
        title="SEOGenie"
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

export default CompetitorSeoAnalysis;
