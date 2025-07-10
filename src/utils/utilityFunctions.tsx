export const getColor = (level: Level) => {
  switch (level) {
    case 'High':
      return 'bg-[#FF3B30]';
    case 'Medium':
      return 'bg-[#FFCC00]';
    case 'Low':
      return 'bg-[#00C940]';
    case 'Failed':
      return 'bg-[#FF3B30]';
    case 'Warnings':
      return 'bg-[#FFCC00]';
    case 'Warning':
      return 'bg-[#FFCC00]';
    case 'Passed':
      return 'bg-[#00C940]';
  }
};

export const getScoreColorMeta = (score: number) => {
  if (score >= 90) return { label: 'Excellent', color: '#00C940' };
  if (score >= 75) return { label: 'Good', color: '#FFCC00' };
  if (score >= 50) return { label: 'Average', color: '#FFA500' };
  return { label: 'Poor', color: '#FF3B30' };
};

export const getSeoMetricsArray = (
  seoData: SEOReport
): {
  label: string;
  value: number;
  status: 'Passed' | 'Warning' | 'Failed';
  message: string;
}[] => {
  const seoScore = seoData.seoScore;
  const wordCount = seoData.wordCount;
  const internalLinks = seoData.internalLinksCount;
  const externalLinks = seoData.externalLinksCount;
  const imagesWithAlt = seoData.imageAltTags?.imagesWithAlt ?? 0;
  const imagesMissingAlt = seoData.imageAltTags?.imagesMissingAlt ?? 0;

  return [
    {
      label: 'SEO Score',
      value: seoScore,
      status: seoScore >= 80 ? 'Passed' : seoScore >= 60 ? 'Warning' : 'Failed',
      message:
        seoScore >= 80
          ? 'Excellent SEO performance.'
          : seoScore >= 60
            ? 'Decent SEO score, but could be improved.'
            : 'Poor SEO performance. Needs improvement.',
    },
    {
      label: 'Word Count',
      value: wordCount,
      status: wordCount >= 500 ? 'Passed' : wordCount >= 300 ? 'Warning' : 'Failed',
      message:
        wordCount >= 500
          ? 'Ideal word count for SEO.'
          : wordCount >= 300
            ? 'Moderate content length. Consider adding more content.'
            : 'Content is too short for SEO effectiveness.',
    },
    {
      label: 'Internal Links',
      value: internalLinks,
      status: internalLinks >= 30 ? 'Passed' : internalLinks >= 15 ? 'Warning' : 'Failed',
      message:
        internalLinks >= 30
          ? 'Good number of internal links.'
          : internalLinks >= 15
            ? 'Add more internal links to improve crawlability.'
            : 'Too few internal links. Site may lack internal structure.',
    },
    {
      label: 'External Links',
      value: externalLinks,
      status:
        externalLinks >= 5 && externalLinks <= 20
          ? 'Passed'
          : externalLinks > 0
            ? 'Warning'
            : 'Failed',
      message:
        externalLinks >= 5 && externalLinks <= 20
          ? 'Balanced external linking.'
          : externalLinks > 0
            ? 'External links are present but could be optimized.'
            : 'No external links found. Consider adding relevant external sources.',
    },
    {
      label: 'Images With ALT',
      value: imagesWithAlt,
      status: imagesWithAlt > 0 ? 'Passed' : 'Failed',
      message:
        imagesWithAlt > 0
          ? 'Some images have ALT text.'
          : 'No images have ALT text. Add ALT attributes for accessibility and SEO.',
    },
    {
      label: 'Images Missing ALT',
      value: imagesMissingAlt,
      status: imagesMissingAlt === 0 ? 'Passed' : imagesMissingAlt < 5 ? 'Warning' : 'Failed',
      message:
        imagesMissingAlt === 0
          ? 'All images have ALT text.'
          : imagesMissingAlt < 5
            ? 'Some images are missing ALT text.'
            : 'Many images lack ALT text. This hurts accessibility and SEO.',
    },
  ];
};

export const getSeoMetaTestResults = (seoData: SEOReport): MetaTestResult[] => {
  const results: MetaTestResult[] = [];

  // Meta Title
  const metaTitle = seoData.metaTitle ?? '';
  results.push({
    label: 'Meta Title',
    status: metaTitle.length > 0 ? 'pass' : 'fail',
    message: metaTitle.length > 0 ? 'Meta title is present.' : 'Meta title is missing.',
    text: metaTitle,
    length: metaTitle.length,
    tooltip:
      'Meta titles are crucial for search rankings and user click-through rates. Aim for under 60 characters with primary keywords.',
  });

  // Meta Description
  const metaDescription = seoData.metaDescription ?? '';
  const isMetaDescMissing = metaDescription.toLowerCase().includes('missing');
  results.push({
    label: 'Meta Description',
    status: !isMetaDescMissing && metaDescription.length > 0 ? 'pass' : 'fail',
    message: !isMetaDescMissing ? 'Meta description is present.' : 'Meta description is missing.',
    text: metaDescription,
    length: isMetaDescMissing ? 0 : metaDescription.length,
    tooltip:
      'Meta descriptions help improve visibility in search results and influence click rates. Should be under 160 characters.',
  });

  // Canonical Tag
  const canonicalTag = seoData.canonicalTag ?? '';
  results.push({
    label: 'Canonical Tag',
    status: canonicalTag.length > 0 ? 'pass' : 'fail',
    message: canonicalTag.length > 0 ? 'Canonical tag is present.' : 'Canonical tag is missing.',
    text: canonicalTag,
    length: canonicalTag.length,
    tooltip:
      'Canonical tags prevent duplicate content issues by signaling the preferred version of a page to search engines.',
  });

  // Robots.txt
  results.push({
    label: 'robots.txt',
    status: seoData.robotsTxtCheck ? 'pass' : 'fail',
    message: seoData.robotsTxtCheck ? 'robots.txt is found.' : 'robots.txt is missing.',
    text: seoData.robotsTxtCheck ? 'Found' : 'Not Found',
    length: 0,
    tooltip:
      'A robots.txt file guides search engine crawlers on which pages to index or ignore. Essential for crawl control.',
  });

  // Sitemap.xml
  results.push({
    label: 'sitemap.xml',
    status: seoData.sitemapXmlCheck ? 'pass' : 'fail',
    message: seoData.sitemapXmlCheck ? 'sitemap.xml is found.' : 'sitemap.xml is missing.',
    text: seoData.sitemapXmlCheck ? 'Found' : 'Not Found',
    length: 0,
    tooltip: 'Sitemaps help search engines discover and index your site’s pages more effectively.',
  });

  // HTTPS Check
  results.push({
    label: 'SSL Check',
    status: seoData.httpsCheck ? 'pass' : 'fail',
    message: seoData.httpsCheck
      ? 'Website is secured with SSL.'
      : 'Website is not secured with SSL.',
    text: seoData.httpsCheck ? 'SSL Enabled (HTTPS)' : 'No SSL (HTTP only)',
    length: 0,
    tooltip:
      'SSL certificates ensure secure data transmission and build trust. HTTPS is also a Google ranking factor.',
  });

  // Indexability Check
  results.push({
    label: 'Indexability',
    status: seoData.indexabilityCheck ? 'pass' : 'fail',
    message: seoData.indexabilityCheck
      ? 'Website is indexable by search engines.'
      : 'Website is not indexable. Search engines may ignore it.',
    text: seoData.indexabilityCheck ? 'Indexable' : 'Not Indexable',
    length: 0,
    tooltip:
      'Pages that are not indexable won’t show up in search results. Ensure proper meta tags and robots directives.',
  });

  // URL Structure
  results.push({
    label: 'URL Structure',
    status: seoData.urlStructure ? 'pass' : 'fail',
    message: seoData.urlStructure
      ? 'URLs are clean and SEO-friendly.'
      : 'URLs may contain unnecessary parameters or poor structure.',
    text: seoData.urlStructure ? 'Clean URLs' : 'Poor URL structure',
    length: 0,
    tooltip:
      'Use readable, short URLs with keywords. Avoid special characters and long query strings.',
  });

  // H1 Tags
  const h1Tags = seoData.h1Tag ?? [];
  const hasOneH1 = h1Tags.length === 1;
  const hasNoH1 = h1Tags.length === 0;
  results.push({
    label: 'H1 Tags',
    status: hasOneH1 ? 'pass' : 'fail',
    message: hasNoH1
      ? 'No H1 tag found. Every page should have one main H1.'
      : hasOneH1
        ? 'One H1 tag found, which is ideal.'
        : `Found ${h1Tags.length} H1 tags. Consider using only one main H1.`,
    text: h1Tags.join(' - '),
    length: h1Tags.length,
    tooltip: 'Each page should have a single H1 tag that clearly describes the main content.',
  });

  // Heading Structure
  const headingStructureIssues = seoData.headingStructure ?? [];
  results.push({
    label: 'Heading Structure',
    status: headingStructureIssues.length === 0 ? 'pass' : 'fail',
    message:
      headingStructureIssues.length === 0
        ? 'Heading structure is valid.'
        : 'Heading structure issues detected.',
    text: headingStructureIssues.join('\n'),
    length: headingStructureIssues.length,
    tooltip:
      'Headings should follow logical hierarchy (H1 > H2 > H3). Disordered headings confuse both users and search engines.',
  });

  // Sort: Fail first, then pass
  return results.sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === 'fail' ? -1 : 1;
  });
};

import { jsPDF } from 'jspdf';
import rthinkLogo from '../assets/images/logo--ipsum-1.png'; // adjust as needed
import { Level, MetaTestResult, SEOReport, WorkspaceItem } from './interfaces';

export const generatePDFfromReport = (report: string) => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const margin = 15;
  const headerHeight = 30;
  const sectionSpacing = 3;
  let yOffset = margin + headerHeight;
  let currentPage = 1;

  const drawHeader = () => {
    const logoWidth = 55;
    const logoHeight = 14;
    const logoY = 10;

    try {
      doc.addImage(rthinkLogo, 'PNG', margin, logoY, logoWidth, logoHeight);
    } catch (e) {
      console.error('Failed to load logo', e);
    }

    doc.setFontSize(20).setFont('helvetica', 'bold');
    doc.text('Performetrix', margin + logoWidth + 10, 15);

    doc.setFontSize(14).setFont('helvetica', 'normal');
    doc.text('Smarter Website Insights for Faster Growth.', margin + logoWidth + 10, 22);

    doc.setDrawColor(200).setLineWidth(0.5);
    doc.line(
      margin,
      logoY + logoHeight + 5,
      doc.internal.pageSize.width - margin,
      logoY + logoHeight + 5
    );
  };

  const drawFooter = () => {
    const pageCount = doc.getNumberOfPages();
    doc.setFontSize(10).text(`Page ${currentPage} of ${pageCount}`, margin, pageHeight - 10);
  };

  const addText = (
    text: string,
    x: number,
    y: number,
    options: { fontSize?: number; fontWeight?: 'bold' | 'normal'; maxWidth?: number } = {}
  ) => {
    const { fontSize = 12, fontWeight = 'normal', maxWidth = 180 } = options;
    doc.setFontSize(fontSize).setFont('helvetica', fontWeight);
    const lines = doc.splitTextToSize(text, maxWidth);
    const blockHeight = lines.length * (fontSize * 0.5);

    if (y + blockHeight > pageHeight - margin) {
      drawFooter();
      doc.addPage();
      currentPage++;
      drawHeader();
      y = margin + headerHeight;
    }

    doc.text(lines, x, y);
    return y + blockHeight + sectionSpacing;
  };

  const parseAndRenderReport = (raw: string) => {
    const lines = raw.split('\n');
    for (const line of lines) {
      if (line.startsWith('## ')) {
        yOffset = addText(line.replace('## ', ''), margin, yOffset, {
          fontSize: 16,
          fontWeight: 'bold',
        });
      } else if (line.startsWith('### ')) {
        yOffset = addText(line.replace('### ', ''), margin, yOffset, {
          fontSize: 14,
          fontWeight: 'bold',
        });
      } else if (line.startsWith('**') && line.endsWith('**')) {
        yOffset = addText(line.replace(/\*\*/g, ''), margin, yOffset, {
          fontSize: 13,
          fontWeight: 'bold',
        });
      } else if (line.startsWith('* ')) {
        yOffset = addText(`• ${line.slice(2)}`, margin + 5, yOffset, { fontSize: 12 });
      } else if (line.trim() === '---') {
        doc.setDrawColor(180);
        doc.line(margin, yOffset, doc.internal.pageSize.width - margin, yOffset);
        yOffset += 5;
      } else if (line.trim()) {
        yOffset = addText(line.trim(), margin, yOffset, { fontSize: 12 });
      } else {
        yOffset += 4; // Add vertical space for empty lines
      }
    }
  };

  // Execution flow
  drawHeader();
  parseAndRenderReport(report);
  drawFooter();

  try {
    const pdfBlob = doc.output('blob');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(pdfBlob);
    link.download = 'performance_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (e) {
    console.error('Error generating PDF:', e);
  }
};

export const getCurrentWorkspace = (): WorkspaceItem | null => {
  const stored = localStorage.getItem('selectedWorkspace');
  if (stored) {
    try {
      return JSON.parse(stored) as WorkspaceItem;
    } catch {
      return null;
    }
  }
  return null;
};

export const extractWordsFromURL = (url: string): string[] => {
  try {
    const { hostname } = new URL(url);
    const domain = hostname.split('.')[0]; // remove TLD
    return (
      domain
        .replace(/([a-z])([A-Z])/g, '$1 $2') // handle camelCase (if any)
        .replace(/[^a-zA-Z0-9]/g, ' ') // remove special characters
        .replace(/([a-z])([0-9])/gi, '$1 $2') // separate numbers
        .match(/[a-zA-Z][^A-Z ]*/g) || []
    ); // naive split into words
  } catch {
    return [];
  }
};
