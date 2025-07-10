export interface DashboardWorkspaceSwitcherProps {
  data: WorkspaceItem[];
}

export interface WorkspaceItem {
  id: string;
  workspaceName: string;
  websiteUrl: string;
}

export type Level = 'High' | 'Medium' | 'Low' | 'Failed' | 'Warnings' | 'Passed' | 'Warning';

export interface ImprovmentSuggestionCardProps {
  level: Level;
  numberOfImprovements: number;
  isActive: boolean;
  onClick?: () => void;
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

export interface SEOReport {
  id: number;
  url: string;
  metaTitle: string;
  metaDescription?: string; // optional until backend adds it
  canonicalTag: string;
  h1Tag: string[];
  headingStructure: string[];
  imageAltTags: {
    totalImages: number;
    imagesWithAlt: number;
    imagesMissingAlt: number;
  };
  wordCount: number;
  robotsTxtCheck: string;
  sitemapXmlCheck: string;
  indexabilityCheck: boolean;
  internalLinksCount: number;
  externalLinksCount: number;
  brokenLinks: string[];
  mobileFriendly: {
    mobileFriendly: boolean;
    issues: string[];
  };
  httpsCheck: boolean;
  urlStructure: boolean;
  priorities: {
    high: [string];
    low: [string];
    medium: [string];
    unknown: [string];
  };
  seoScore: number;
  isCompetitor: boolean;
  onboardProcessId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface seoOverviewSectionProps {
  seoScore: number;
  websiteUrl: string;
  date: string;
}

export interface MetaTestResult {
  label: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  text: string;
  length: number;
  tooltip: string;
}
