import React from 'react';
import { Globe, Zap, Share2, BarChart2 } from 'lucide-react';
import { cover, logo1, logo2, logo3 } from '../static-img-url';
import FeaturesSection from '../components/modules/home/features-section';
import WhyChooseAI from '../components/modules/home/why-choose-us';
import AdditionalFeatures from '../components/modules/home/social-media';
import staticData from '../static-data';
import Footer from '../components/ui-components/footer';

const LandingPage = () => {


  const logos = [logo1, logo2, logo3, logo1, logo3];
  const networks = ["Facebook", "Instagram", "X (Twitter)", "Tiktok", "Messenger", "Whatsapp", "Telegram", "Youtube"];

  return (
    <div className="font-sans w-full text-[#1D1D1F]">
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-[#FF4A4A]">IPSUM</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          {["Features", "Pricing", "Integrations", "Our Tool", "Resources"].map((link, idx) => (
            <a key={idx} href="#" className="hover:underline">{link}</a>
          ))}
        </nav>
        <div className="flex gap-3">
          <button className="text-sm border px-4 py-2 rounded">Log in</button>
          <button className="text-sm bg-[#1D1D1F] text-white px-4 py-2 rounded">Try our product</button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="text-center px-4 py-20 bg-gradient-to-b from-white to-gray-100" // light gray fallback
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: 'auto',      // or 'contain' based on what you want
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#FAFAFA'    // fallback color for side gaps
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className='text-[#00C940]'>BOOST</span> <span role="img" aria-label="rocket">🚀</span> YOUR BRAND <br />
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">ALL YOUR SOCIAL MEDIA NETWORKS IN ONE TAB</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {staticData.socialNetworks.map((item, i) => (
              <article key={i} className="bg-white p-6 rounded-lg shadow text-left">
                <img src={item.icon} alt={`${item.name} icon`} className="w-10 h-10 mb-4" loading="lazy" />
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0C0F1F] py-20 px-4 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            TRY OUR <span className="text-orange-500">AI SOFTWARE</span> <br /> FOR <span className="text-orange-500">FREE</span> AND SEE YOUR BUSINESS GROW!
          </h2>
          <p className="max-w-xl mx-auto mb-6 text-sm md:text-base text-gray-300">
            Experience the power of automation, smart analytics, and AI-driven insights. Sign up for a free trial today!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#FA503E] text-white px-6 py-2 rounded shadow">Try our product</button>
            <button className="border border-white px-6 py-2 rounded">Learn more</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
