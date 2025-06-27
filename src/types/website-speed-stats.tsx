export interface WebsiteSpeedStats {
  ownWebsiteStats: object;
  id: number;
  url: string;
  performanceScore: number
  accessibilityScore: number;
  bestPracticesScore: number;
  seoScore: number;
  pwaScore: number;
  firstContentfulPaint: string;
  largestContentfulPaint: string;
  speedIndex: string;
  totalBlockingTime: string;
  timeToInteractive: string;
  strategy: string;
  isCompetitor: boolean;
  report: string | null;
  priorities: {
    low: string[];
    medium: string[];
    high: string[];
    unknown: string[];
  } | null;
  onboardProcessId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
