
import AboutUsSection from '../components/modules/about-us/about-section';
import WhatWeStandFor from '../components/modules/about-us/features';
import VisionMissionSection from '../components/modules/about-us/mission';
import TrialCTA from '../components/modules/about-us/trail-cta';
import ContactCompanySlider from '../components/modules/contact/contact-company-slider';
import Footer from '../components/ui-components/footer';
import Header from '../components/ui-components/header';

const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutUsSection />
      <WhatWeStandFor />
      <ContactCompanySlider />
      <VisionMissionSection />
      <TrialCTA />
      <Footer />
    </>
  );
};

export default AboutUs;
