import ContactCompanySlider from '../components/modules/contact/contact-company-slider';
import ContactFormSection from '../components/modules/contact/contact-form-section';
import ContactGrowSection from '../components/modules/contact/contact-grow-section';
import ContactHero from '../components/modules/contact/contact-hero';
import Footer from '../components/ui-components/footer';
import Header from '../components/ui-components/header';

const Contact = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactFormSection />
      <ContactCompanySlider />
      <ContactGrowSection />
      <Footer />
    </>
  );
};

export default Contact;
