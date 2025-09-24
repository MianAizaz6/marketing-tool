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
import { ImprovmentSuggestionTextProps, metricsComparisonDataProps } from './utils/interfaces';
import {
  MousePointer,
  Users,
  ShoppingCart,
  Eye,
  Package,
  Handshake,
  Tag,
  UserCheck,
  BookOpen,
  CalendarDays,
  Megaphone,
  Briefcase,
  Smile,
  Zap,
  Sparkles,
} from 'lucide-react';

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
    link: '/',
  },
  {
    heading: 'Website Audit',
    activeIcon: auditActiveIcon,
    icon: auditIcon,
    link: 'website-audit',
  },
  {
    heading: 'Website Competitor Analysis',
    activeIcon: competitorIcon,
    icon: competitorIcon,
    link: 'competitor-analysis',
  },
  {
    heading: 'Ads Manager',
    activeIcon: adsIcon,
    icon: adsIcon,
    link: 'ads-manager',
  },
];

export const websiteModuleBtns = [
  {
    name: 'SEO',
    link: '/',
  },
  {
    name: 'Web Speed',
    link: '/speed-analysis',
  },
  {
    name: 'UIUX',
    link: '/ui-ux',
  },
  {
    name: 'Content Quality and relevance',
    link: '/content-quality',
  },
  {
    name: 'Mobile Useability',
    link: '/mobile-useability',
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

export const seoMetrics = [
  {
    heading: 'Keyword Rankings',
    metrics: '1.7k',
  },
  {
    heading: 'Domain Authority(DA)',
    metrics: '92',
  },
  {
    heading: 'Organic Search Traffic',
    metrics: '1.5k',
  },
  {
    heading: 'Linking Root Domains',
    metrics: '72.5k',
  },
];

export const pageSpeedMetrics = [
  {
    heading: 'Performance grade',
    metrics: '92',
  },
  {
    heading: 'Load Time',
    metrics: '12.5s',
  },
  {
    heading: 'Page Size',
    metrics: '1.5k',
  },
  {
    heading: 'Requests',
    metrics: '113',
  },
];

export const speedMetricsOptions = ['All', 'FCP', 'LCP', 'TBT', 'CLS'];
export const seoMetricsOptions = ['All', 'Issues', 'Improvements'];

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

export const mockConversation = [
  {
    role: 'user',
    content: 'What is the SEO score of my website?',
  },
  {
    role: 'assistant',
    content:
      'Your SEO score is 78. There are a few issues with meta tags and missing ALT attributes on images.',
  },
  {
    role: 'user',
    content: 'What can I fix first?',
  },
  {
    role: 'assistant',
    content:
      'Start by updating your meta title to include the focus keyword, and ensure all images have descriptive ALT tags.',
  },
];

export const businessCategories = [
  'E-commerce & Retail',
  'Technology & Software',
  'Healthcare & Medical',
  'Food & Beverage',
  'Real Estate',
  'Education & Training',
  'Professional Services',
  'Entertainment & Media',
  'Travel & Tourism',
  'Automotive',
  'Fashion & Beauty',
  'Sports & Fitness',
  'Finance & Banking',
  'Logistics & Transportation',
  'Nonprofit & NGO',
  'Agriculture',
  'Energy & Utilities',
  'Marketing & Advertising',
  'Hospitality & Events',
];

export const stepsHeadings = [
  'Tell us about your Business',
  'What are you promoting?',
  "What's your main goal?",
  'Who do you want to reach?',
  'Choose Your Ideal Customers',
  'How should your ad sound?',
  'How much do you want to spend, and for how long?',
  'Create your ad content',
  'Review & Publish',
];

export const promotionOptions = [
  {
    value: 'product',
    label: 'Product',
    icon: Package, // lucide-react
  },
  {
    value: 'service',
    label: 'Service',
    icon: Handshake,
  },
  {
    value: 'discount',
    label: 'Discount / Special Offer',
    icon: Tag,
  },
  {
    value: 'free_consultation',
    label: 'Free Consultation',
    icon: UserCheck,
  },
  {
    value: 'free_resource',
    label: 'Free Resource',
    icon: BookOpen,
  },
  {
    value: 'event',
    label: 'Event / Webinar',
    icon: CalendarDays,
  },
  {
    value: 'other',
    label: 'Other',
    icon: Megaphone,
  },
];

export const adObjectives = [
  {
    id: 1,
    title: 'Get More Website Visitors',
    description: 'Drive quality traffic to your website and increase page views',
    icon: MousePointer,
  },
  {
    id: 2,
    title: 'Generate Leads',
    description: 'Collect contact information from potential customers',
    icon: Users,
  },
  {
    id: 3,
    title: 'Increase Sales',
    description: 'Drive purchases and boost your revenue',
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: 'Brand Awareness',
    description: 'Increase visibility and recognition of your brand',
    icon: Eye,
  },
];

export const perosnaOptions = [
  {
    personaId: 'p1',
    name: 'Startup Founders',
    description: 'Entrepreneurs launching new businesses',
    ageRange: [25, 40],
    gender: 'any',
    location: 'United Kingdom',
    interests: ['Entrepreneurship', 'Startups', 'Business Coaching', 'Tech Tools'],
    reasoning: 'Likely to need professional websites to establish credibility.',
    selected: true,
  },
  {
    personaId: 'p2',
    name: 'Local Shop Owners',
    description: 'Owners of brick-and-mortar retail shops',
    ageRange: [30, 55],
    gender: 'any',
    location: 'London & Midlands',
    interests: ['Small Business', 'Retail Management', 'Local Advertising'],
    reasoning: 'They want affordable websites to attract local customers.',
    selected: false,
  },
  {
    personaId: 'p3',
    name: 'Freelancers & Consultants',
    description: 'Independent professionals offering services online',
    ageRange: [22, 45],
    gender: 'any',
    location: 'United Kingdom',
    interests: ['Personal Branding', 'Online Marketing', 'Networking', 'LinkedIn'],
    reasoning:
      'They need personal websites to showcase expertise, attract clients, and build credibility.',
    selected: false,
  },
];

export type AdVoice = 'professional' | 'casual' | 'bold' | 'inspiring' | 'custom';
export interface AdVoiceOptionsType {
  id: AdVoice;
  title: string;
  description: string;
  example: string;
  icon: React.ElementType;
}

export const AdVoiceOptions: AdVoiceOptionsType[] = [
  {
    id: 'professional',
    title: 'Professional',
    description: 'Formal, trustworthy, expert tone.',
    example: 'Enhance your business growth with a sleek, high-converting website.',
    icon: Briefcase,
  },
  {
    id: 'casual',
    title: 'Casual / Friendly',
    description: 'Approachable, conversational tone.',
    example: 'Ready to take your business online? Let’s build something awesome together!',
    icon: Smile,
  },
  {
    id: 'bold',
    title: 'Bold / Persuasive',
    description: 'High-energy, urgency-driven copy.',
    example: 'Don’t lose clients to outdated websites — upgrade today and watch your sales grow.',
    icon: Zap,
  },
  {
    id: 'inspiring',
    title: 'Inspiring / Visionary',
    description: 'Motivational, future-focused tone.',
    example:
      'Your business has unlimited potential — let’s create the digital presence it deserves.',
    icon: Sparkles,
  },
];

export type AIRecommendationType = {
  type: 'daily' | 'lifetime';
  budget: number;
  duration: number; // days
};

export const aiRecommendationData: AIRecommendationType = {
  type: 'daily',
  budget: 25,
  duration: 7,
};

export const callToActionOptions = [
  'Learn More',
  'Shop Now',
  'Get Started',
  'Sign Up',
  'Book Now',
  'Contact Us',
  'Get a Quote',
  'Order Now',
  'Request a Quote',
  'Subscribe Now',
  'Apply Now',
  'Download Now',
];

export const mockLoading = true;

export default staticData;
