import { footerFB, footerInsta, footerTiktok, footerX, footerYT } from '../../static-img-url';
// import { FaTiktok } from 'react-icons/fa';
// import { RxCross2 } from 'react-icons/rx';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
    },
    {
      title: 'Company',
      links: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
    },
    {
      title: 'Social',
      links: ['Twitter', 'LinkedIn', 'Facebook', 'Tiktok', 'Youtube'],
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
    },
  ];

  const socialIcons = [footerFB, footerInsta, footerX, footerTiktok, footerYT];

  return (
    <footer className="bg-[#121212] text-gray-400 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-[#FF4A4A] text-2xl font-bold mb-4">IPSUM</h2>
          <p className="text-sm leading-relaxed">
            AI-powered platform that allows businesses to analyze and improve their websites,
            compare with competitors, and automate social media marketing using AI-generated content
            and ad strategies.
          </p>
        </div>

        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-white font-medium mb-2">{section.title}</h4>
            <ul className="space-y-1 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  {link === 'Solutions' ? (
                    <span className="flex items-center gap-2">
                      {link}
                      <span className="bg-white text-black text-[10px] px-2 py-[1px] rounded-full font-semibold">
                        New
                      </span>
                    </span>
                  ) : (
                    link
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-gray-700  text-sm text-gray-500">
        <div className=" max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2077 Untitled UI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialIcons.map((item, i) => (
              <span key={i} className="hover:text-white cursor-pointer">
                <img src={item} alt="" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
