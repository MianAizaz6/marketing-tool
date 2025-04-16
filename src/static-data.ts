import {
  facebook,
  insta,
  messenger,
  telegram,
  tiktok,
  twitter,
  whatsap,
  youtube,
} from './static-img-url';

// types/staticData.ts
export interface Feature {
  id: number;
  heading: string;
  content: string;
}

export interface SocialNetwork {
  id: number;
  name: string;
  description: string;
  icon: string; // or maybe `ReactNode` or `StaticImageData` depending on how icons are handled
}

export interface navItems {
  id: number,
  label: string,
  link: string,
}

const staticData = {
  featuresData: [
    {
      id: 1,
      heading: 'User Registration & Website Submission',
      content:
        'Users create an account and enter their website URL into the system. The AI system fetches website data via APIs, crawling the site for analysis.',
    },
    {
      id: 2,
      heading: 'Website Audit & AI-Based Report',
      content:
        'Users create an account and enter their website URL into the system. The AI system fetches website data via APIs, crawling the site for analysis.',
    },
    {
      id: 3,
      heading: 'Competitor Analysis & Benchmarking',
      content:
        'Users create an account and enter their website URL into the system. The AI system fetches website data via APIs, crawling the site for analysis.',
    },
    {
      id: 4,
      heading: 'AI-Generated Social Media & Ad Content',
      content:
        'Users create an account and enter their website URL into the system. The AI system fetches website data via APIs, crawling the site for analysis.',
    },
    {
      id: 5,
      heading: 'Continuous AI-Driven Marketing Optimization',
      content:
        'Users create an account and enter their website URL into the system. The AI system fetches website data via APIs, crawling the site for analysis.',
    },
  ],

  socialNetworks: [
    {
      id: 1,
      name: 'Facebook',
      description: 'Get more engagement and build your Facebook following.',
      icon: facebook, // Replace with actual icon paths
    },
    {
      id: 2,
      name: 'Instagram',
      description: 'Get more engagement and build your Instagram following.',
      icon: insta,
    },
    {
      id: 3,
      name: 'X (Twitter)',
      description: 'Get more engagement and build your X(Twitter) following.',
      icon: twitter,
    },
    {
      id: 4,
      name: 'Tiktok',
      description: 'Get more engagement and build your Tiktok following.',
      icon: tiktok,
    },
    {
      id: 5,
      name: 'Messenger',
      description: 'Get more engagement and build your following.',
      icon: messenger,
    },
    {
      id: 6,
      name: 'Whatsapp',
      description: 'Get more engagement and build your following.',
      icon: whatsap,
    },
    {
      id: 7,
      name: 'Telegram',
      description: 'Get more engagement and build your telegram following.',
      icon: telegram,
    },
    {
      id: 8,
      name: 'Youtube',
      description: 'Get more engagement and build your youtube following.',
      icon: youtube,
    },
  ],

  navItems: [
    { id: 1, label: 'Features', link: '/' },
    { id: 2, label: 'Pricing', link: '/pricing' },
    { id: 3, label: 'Integrations', link: '/integrations' },
    { id: 4, label: 'Our Tools', link: '/our-tools' },
    { id: 5, label: 'Resources', link: '/resources' },
  ]
};

export default staticData;
