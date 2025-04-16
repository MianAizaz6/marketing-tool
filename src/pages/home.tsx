import { cover, logo1, logo2, logo3 } from '../static-img-url';
import FeaturesSection from '../components/modules/home/features-section';
import WhyChooseAI from '../components/modules/home/why-choose-us';
import AdditionalFeatures from '../components/modules/home/social-media';
import staticData from '../static-data';
import Footer from '../components/ui-components/footer';
import Header from '../components/ui-components/header';
import CTASection from '../components/modules/home/cta-section';


const LandingPage = () => {

  const logos = [logo1, logo2, logo3, logo1, logo3];

  return (
    <div className="font-sans w-full text-[#1D1D1F]">
      <Header />

      <main>
        {/* Hero */}
        <section
          className="text-center px-4 py-20 bg-gradient-to-b from-white to-gray-100" // light gray fallback
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: 'auto', // or 'contain' based on what you want
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#FAFAFA', // fallback color for side gaps
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-[#00C940]">BOOST</span>{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>{' '}
            YOUR BRAND <br />
            WITH SMARTER <br />
            SOCIAL MEDIA MANAGEMENT
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Streamline your social media strategy with powerful automation and AI-driven insights.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button className="bg-[#1D1D1F] text-white px-6 py-2 rounded">Try our product</button>
            <button className="border border-[#1D1D1F] px-6 py-2 rounded">Learn more</button>
          </div>
        </section>

        {/* Intuitive Tool */}
        <FeaturesSection />

        {/* Why Choose */}
        <WhyChooseAI />

        {/* Additional Features */}
        <AdditionalFeatures />

        {/* Logo Grid */}
        <section className="bg-gray-50 py-8 px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo, i) => (
              <div key={i} className="text-gray-500 font-semibold text-sm">
                <img src={logo} alt="" />
              </div>
            ))}
          </div>
        </section>

        {/* Social Networks */}
        <section className="py-16 px-4 text-center bg-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            ALL YOUR SOCIAL MEDIA NETWORKS IN ONE TAB
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {staticData.socialNetworks.map((item, i) => (
              <article key={i} className="bg-white p-6 rounded-lg shadow text-left">
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-10 h-10 mb-4"
                  loading="lazy"
                />
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
