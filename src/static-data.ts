import {
  adsIcon,
  auditActiveIcon,
  auditIcon,
  callIcon,
  competitorIcon,
  dashboardActiveIcon,
  dashboardIcon,
  emailIcon,
  facebook,
  insta,
  messenger,
  saleIcon,
  sliderLogo1,
  sliderLogo2,
  sliderLogo3,
  sliderLogo4,
  sliderLogo5,
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
  id: number;
  label: string;
  link: string;
}

export interface contactLinks {
  icon: string;
  label: string;
  link: string;
}

export type IconBoxProps = {
  icon: string;
  heading: string;
  paragraph: string;
  callToAction: string;
};

export type menuItems = {
  icon: string;
  activeIcon: string;
  heading: string;
};

export const contactUsData = [
  {
    icon: emailIcon,
    heading: 'Email',
    paragraph: 'Our friendly team is here to help.',
    callToAction: 'support@untitledmass.com',
  },
  {
    icon: callIcon,
    heading: 'Phone',
    paragraph: 'Mon-Fri from 8am to 5pm.',
    callToAction: '+1 (555) 000-0000',
  },
  {
    icon: saleIcon,
    heading: 'Sales',
    paragraph: 'Questions or queries? Get in touch!',
    callToAction: 'support@untitledmass.com',
  },
];

export const logosArray = [
  sliderLogo1,
  sliderLogo2,
  sliderLogo3,
  sliderLogo4,
  sliderLogo5,
  sliderLogo1,
  sliderLogo2,
  sliderLogo3,
  sliderLogo4,
  sliderLogo5,
];

export const dashboardMenuItems = [
  {
    heading: 'Dashboard',
    activeIcon: dashboardActiveIcon,
    icon: dashboardIcon,
  },
  {
    heading: 'Website Audit',
    activeIcon: auditActiveIcon,
    icon: auditIcon,
  },
  {
    heading: 'Website Competitor Analysis',
    activeIcon: competitorIcon,
    icon: competitorIcon,
  },
  {
    heading: 'Ad Campaigns Audit',
    activeIcon: adsIcon,
    icon: adsIcon,
  },
  {
    heading: 'Ads Competitor Analysis',
    activeIcon: competitorIcon,
    icon: competitorIcon,
  },
  {
    heading: 'Website Recommendations',
    activeIcon: auditActiveIcon,
    icon: auditIcon,
  },
  {
    heading: 'Ads Recommendations',
    activeIcon: auditActiveIcon,
    icon: auditIcon,
  },
];

export const websiteModuleBtns = [
  {
    name: 'SEO',
    link: '/',
  },
  {
    name: 'Web Speed',
    link: '/',
  },
  {
    name: 'Mobile Useability',
    link: '/',
  },
  {
    name: 'Content Quality and relevance',
    link: '/',
  },
  {
    name: 'Backlinks and domain authority',
    link: '/',
  },
];

export const speedMetrics = [
  {
    heading: 'First Contentful Paint',
    metrics: '1.0 s',
  },
  {
    heading: 'Largest Contentful Paint',
    metrics: '1.4 s',
  },
  {
    heading: 'Total Blocking Time',
    metrics: '30 MS',
  },
  {
    heading: 'Cumulative Layout Shift',
    metrics: '0.005',
  },
  {
    heading: 'Speed Index',
    metrics: '1.4 S',
  },
];

export type Level = 'High' | 'Medium' | 'Low';

export const speedMetricsOptions = ['All', 'FCP', 'LCP', 'TBT', 'CLS'];

export interface ImprovmentSuggestionCardProps {
  level: Level;
  numberOfImprovements: number;
}

export interface ImprovmentSuggestionTextProps {
  level: Level;
  improvmentText: string;
}

export type metricsComparisonDataProps = {
  metric: 'FCP' | 'LCP' | 'TBT' | 'CLS'; // strictly typed
  unit: 's' | 'MS' | ''; // limited to known units
  you: number;
  competitor: number;
};

export const metricsComparisonData: metricsComparisonDataProps[] = [
  { metric: 'CLS', you: 0.007, competitor: 0.005, unit: '' },
  { metric: 'FCP', you: 1.5, competitor: 1.0, unit: 's' },
  { metric: 'LCP', you: 2.4, competitor: 1.4, unit: 's' },
  { metric: 'TBT', you: 30, competitor: 14, unit: 'MS' },
];

export const improvementsSuggestionTextData: ImprovmentSuggestionTextProps[] = [
  {
    improvmentText:
      'Consider using structured data in your webpage as it can help search engines gain a better understanding of your content.',
    level: 'High',
  },
  {
    improvmentText:
      'It is recommended to avoid URL parameters and to use hyphens to separate words in the URL structure, rather than underscores.',
    level: 'Medium',
  },
  {
    improvmentText:
      'To improve the website experience for your visitors, it is recommended to eliminate any render-blocking resources on this webpage.',
    level: 'High',
  },
  {
    improvmentText: 'Is it accessible',
    level: 'Low',
  },
];

export const improvementsSuggestionsData: ImprovmentSuggestionCardProps[] = [
  { numberOfImprovements: 3, level: 'High' },
  { numberOfImprovements: 6, level: 'Medium' },
  { numberOfImprovements: 9, level: 'Low' },
];

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
    { id: 5, label: 'Resources', link: '/payment' },
    { id: 5, label: 'About', link: '/about-us' },
    { id: 5, label: 'Contact', link: '/contact-us' },
  ],
};

export default staticData;
