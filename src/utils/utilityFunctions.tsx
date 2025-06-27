import { Level } from '../static-data';

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
    case 'Passed':
      return 'bg-[#00C940]';
  }
};


import { jsPDF } from 'jspdf';
import rthinkLogo from '../assets/images/logo--ipsum-1.png'; // adjust as needed

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
      console.error("Failed to load logo", e);
    }

    doc.setFontSize(20).setFont("helvetica", "bold");
    doc.text("Performetrix", margin + logoWidth + 10, 15);

    doc.setFontSize(14).setFont("helvetica", "normal");
    doc.text("Smarter Website Insights for Faster Growth.", margin + logoWidth + 10, 22);

    doc.setDrawColor(200).setLineWidth(0.5);
    doc.line(margin, logoY + logoHeight + 5, doc.internal.pageSize.width - margin, logoY + logoHeight + 5);
  };

  const drawFooter = () => {
    const pageCount = doc.getNumberOfPages();
    doc.setFontSize(10).text(`Page ${currentPage} of ${pageCount}`, margin, pageHeight - 10);
  };

  const addText = (text: string, x: number, y: number, options: { fontSize?: number, fontWeight?: "bold" | "normal", maxWidth?: number } = {}) => {
    const { fontSize = 12, fontWeight = "normal", maxWidth = 180 } = options;
    doc.setFontSize(fontSize).setFont("helvetica", fontWeight);
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
        yOffset = addText(line.replace('## ', ''), margin, yOffset, { fontSize: 16, fontWeight: 'bold' });
      } else if (line.startsWith('### ')) {
        yOffset = addText(line.replace('### ', ''), margin, yOffset, { fontSize: 14, fontWeight: 'bold' });
      } else if (line.startsWith('**') && line.endsWith('**')) {
        yOffset = addText(line.replace(/\*\*/g, ''), margin, yOffset, { fontSize: 13, fontWeight: 'bold' });
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

export const getCurrentWorkspace = (): Record<string, any> | null => {
  const stored = localStorage.getItem('selectedWorkspace');
  if (stored) {
    try {
      return JSON.parse(stored);
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
    return domain
      .replace(/([a-z])([A-Z])/g, '$1 $2') // handle camelCase (if any)
      .replace(/[^a-zA-Z0-9]/g, ' ') // remove special characters
      .replace(/([a-z])([0-9])/gi, '$1 $2') // separate numbers
      .match(/[a-zA-Z][^A-Z ]*/g) || []; // naive split into words
  } catch {
    return [];
  }
};






