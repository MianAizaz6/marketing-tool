
import { useEffect, useState } from 'react'
import ContentRelevenceSection from '../../../components/dashboard/website-module/content-relevence/content-relevence-section'
import CustomModel from '../../../components/ui-components/custom-model'
import KeywordInput from '../../../components/dashboard/website-module/content-relevence/keywords-input-section';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { handleApiError } from '../../../utils/handleApiError';
import { contentRelevenceDetails, getContentRelevenceReport } from '../../../apis/website-audit';
import SpeedImprovementsSection from '../../../components/dashboard/website-module/speed-analysis/speed-improvments-section';
import { generatePDFfromReport } from '../../../utils/utilityFunctions';
import DashboardHeading from '../../../components/ui-components/dashboard/dashboard-heading';

const ContentRelevence = () => {
  const [tagsModal, setTagsModal] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const [contentRelevenceStats, setContentRelevenceStats] = useState(null)

  const predefinedKeywords = [
    'SEO',
    'Content Optimization',
    'Internal Linking',
    'Readability',
    'Alt Text',
    'Keyword Match',
  ];

  const workSpace = localStorage.getItem('selectedWorkspace');
  const workspaceData = workSpace ? JSON.parse(workSpace) : null;


  const contentRelevenceQuery = useQuery({
    queryKey: ['content-relevence', workspaceData?.id],
    queryFn: async () => {
      const data = await getContentRelevenceReport(`?onboardProcessId=${workspaceData?.id}`);
      return data;
    },
  });


  const contentRelevenceMutation = useMutation({
    mutationFn: contentRelevenceDetails,
    onSuccess: () => {
      toast.success('Content Relevence data fetched!');
      setTagsModal(false);
    },
    onError: (error) => {
      handleApiError(error);
      setTagsModal(false);
    },
  });


  useEffect(() => {
    if (contentRelevenceMutation.isSuccess) {
      setContentRelevenceStats(contentRelevenceMutation.data);
    } else if (contentRelevenceQuery.isSuccess) {
      setContentRelevenceStats(contentRelevenceQuery.data);
    }
  }, [
    contentRelevenceMutation.isSuccess,
    contentRelevenceMutation.data,
    contentRelevenceQuery.isSuccess,
    contentRelevenceQuery.data
  ])

  console.log('------0000', contentRelevenceQuery?.isSuccess);

  const addKeyword = (keyword: string) => {
    const trimmed = keyword.trim();
    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords((prev) => [...prev, trimmed]);
    }
    setInput('');
  };

  const removeKeyword = (keyword: string) => {
    setKeywords((prev) => prev.filter((k) => k !== keyword));
  };

  const togglePredefined = (keyword: string) => {
    if (keywords.includes(keyword)) {
      removeKeyword(keyword);
    } else {
      addKeyword(keyword);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addKeyword(input);
    }
  };

  const handleSubmit = () => {
    contentRelevenceMutation.mutate({
      keywords: keywords,
      websiteUrl: workspaceData.websiteUrl,
      onboardProcessId: workspaceData.id
    });
  };

  const toggleTagsModal = () => {
    setTagsModal(!tagsModal);
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <DashboardHeading heading="Content Relevance Metrics" />
        <div className='flex justify-end gap-5'>
          {contentRelevenceStats?.report && contentRelevenceStats?.report !== '' ? (<button
            onClick={() => generatePDFfromReport(contentRelevenceStats?.report)}
            className={` bg-[#FF4400] text-white cursor-pointer  px-5 py-2 rounded-md`}
          >
            Download Report
          </button>) : undefined}

          <button
            onClick={() => toggleTagsModal()}
            className={` bg-[#FF4400] text-white cursor-pointer  px-5 py-2 rounded-md`}
          >
            Add Keywords for content
          </button>
        </div>
      </div>

      <ContentRelevenceSection data={contentRelevenceStats} />
      
      <SpeedImprovementsSection suggestionData={contentRelevenceStats?.priorities} />


      <CustomModel heading={''} open={tagsModal} header={false} toggle={toggleTagsModal} height={'h-[400px]'} width={'w-[500px]'}>
        <KeywordInput
          keywords={keywords}
          input={input}
          setInput={setInput}
          onAddKeyword={addKeyword}
          onRemoveKeyword={removeKeyword}
          onTogglePredefined={togglePredefined}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          predefinedKeywords={predefinedKeywords}
        />

      </CustomModel>
    </div>

  )
}

export default ContentRelevence
