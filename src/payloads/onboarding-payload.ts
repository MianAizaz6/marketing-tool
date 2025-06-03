const onBoardingPayload = (formData: any) => {
  const { userId, websiteUrl, description, logo, goals, metrics, competitorWebsite } = formData;

  const fd = new FormData();

  fd.append('userId', userId);
  fd.append('websiteUrl', websiteUrl);
  fd.append('workspaceName', 'Untitled workspace');
  fd.append('businessDescription', description);
  fd.append('logoUrl', logo[0]);
  console.log('===logo', logo);

  // These must be stringified arrays
  fd.append('goals', JSON.stringify(goals));
  fd.append('metrics', JSON.stringify(metrics));

  // This must be a stringified array of objects
  fd.append('competitorWebsite', JSON.stringify(competitorWebsite));

  return fd;
};

export default onBoardingPayload;

// const onBoardingPayload = (formData: any) => {
//   return {
//     userId: formData.userId,
//     websiteUrl: formData.websiteUrl,
//     workspaceName: formData.workspaceName,
//     businessDescription: formData.description,
//     logoUrl: 'logo.com', // it's already a URL string
//     goals: formData.goals,
//     metrics: formData.metrics,
//     competitorWebsite: formData.competitorWebsite
//   };
// };

// export default onBoardingPayload;

