import React from 'react';
import { Globe, Zap, Share2, BarChart2 } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Globe className="w-5 h-5" />, title: "Automated Post Creation",
      desc: "Write an amazing description in this dedicated card section. Each word counts."
    },
    {
      icon: <Zap className="w-5 h-5" />, title: "SEO Optimization",
      desc: "Write an amazing description in this dedicated card section. Each word counts."
    },
    {
      icon: <Share2 className="w-5 h-5" />, title: "AI Writing for Ad’s",
      desc: "Write an amazing description in this dedicated card section. Each word counts."
    },
    {
      icon: <BarChart2 className="w-5 h-5" />, title: "Comparison Report",
      desc: "Write an amazing description in this dedicated card section. Each word counts."
    }
  ];

  const logos = ["Logospum Academy", "LogoIpsum", "LOGOIPSUM", "logo ipsum", "logoipsum"];
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
        <section className="text-center px-4 py-16 bg-gradient-to-b from-white to-[#FAFAFA]">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            BOOST <span role="img" aria-label="rocket">🚀</span> YOUR BRAND <br />
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
        <section className="px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            INTUITIVE <span className="text-[#FF4A4A]">AI TOOL</span> FOR GROWING YOUR <span className="text-[#FF4A4A] italic">BUSINESS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
            {["User Registration & Website Submission", "Website Audit & AI-Based Report", "Competitor Analysis & Benchmarking", "AI-Generated Social Media & Ad Content", "Continuous AI-Driven Marketing Optimization"].map((text, idx) => (
              <div key={idx} className="bg-white shadow p-5 rounded-lg border text-left">
                <div className="text-[#FF4A4A] font-bold text-xl mb-2">0{idx + 1}</div>
                <p className="text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-[#1D1D1F] text-white py-16 px-4">
          <h2 className="text-center text-2xl font-semibold mb-10">WHY CHOOSE OUR AI PRODUCT?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              {["INSTANT TREND DETECTION", "AUTOMATED CUSTOMER INTERACTION", "REAL-TIME PERFORMANCE TRACKING"].map((title, idx) => (
                <div key={idx} className="border-l-4 pl-4 border-[#FF4A4A]">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-300">AI-powered insights to help track trends, automate interactions, and measure results.</p>
                </div>
              ))}
            </div>
            <img src="https://via.placeholder.com/400x300" alt="AI Dashboard" className="w-full max-w-md mx-auto" loading="lazy" />
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-10 text-center md:text-left">
            SEAMLESS SOCIAL MEDIA MANAGEMENT FOR SMARTER GROWTH
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <article key={i} className="p-6 border rounded-lg text-left shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <div className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded">{f.icon}</div>
                  <strong>{f.title}</strong>
                </div>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Logo Grid */}
        <section className="bg-gray-50 py-10 px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo, i) => (
              <div key={i} className="text-gray-500 font-semibold text-sm">{logo}</div>
            ))}
          </div>
        </section>

        {/* Social Networks */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">ALL YOUR SOCIAL MEDIA NETWORKS IN ONE TAB</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {networks.map((name, i) => (
              <article key={i} className="bg-white p-6 rounded-lg shadow border text-left">
                <img src="https://via.placeholder.com/40" alt={`${name} icon`} className="w-10 h-10 mb-4" loading="lazy" />
                <h3 className="font-semibold text-lg mb-1">{name}</h3>
                <p className="text-sm text-gray-600">Get more engagement and build your {name} following.</p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0C0F1F] py-20 px-4 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            TRY OUR <span className="text-orange-500">AI SOFTWARE</span> FOR <span className="text-orange-500">FREE</span> AND SEE YOUR BUSINESS GROW!
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

      <footer className="bg-[#0C0F1F] py-12 px-6 text-gray-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-2">
            <img src="https://via.placeholder.com/100x40" alt="Logo" className="mb-4" />
            <p className="text-sm">
              AI-powered platform for social media automation, competitor benchmarking, and smart content strategies.
            </p>
          </div>
          {["Product", "Company", "Resources", "Social", "Legal"].map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold text-white mb-2">{section}</h4>
              <ul className="text-sm space-y-1">
                {['Overview', 'Features', 'Pricing', 'Support', 'Contact'].map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">
          © 2027 Untitled UI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
