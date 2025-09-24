import React from "react";

export type MetricStatus = "good" | "warn" | "bad";

export type MetricCardProps = {
  title: string;                 // e.g., "Title", "Description", "H1"
  detail?: string;               // e.g., "Good (55 chars)"
  status: MetricStatus;          // decides color
  className?: string;
};

const statusStyles: Record<MetricStatus, { bg: string; ring: string; icon: string }> = {
  good: { bg: "bg-green-50", ring: "ring-green-200", icon: "text-green-600" },
  warn: { bg: "bg-yellow-50", ring: "ring-yellow-200", icon: "text-yellow-600" },
  bad: { bg: "bg-red-50", ring: "ring-red-200", icon: "text-red-600" },
};

export const MetricCard: React.FC<MetricCardProps> = ({ title, detail, status, className }) => {
  const s = statusStyles[status];
  return (
    <div className={`rounded-lg ring-1 ${s.ring} ${s.bg} p-4 ${className || ""}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="font-medium text-slate-900">{title}</div>
          {detail && <div className="text-sm text-slate-600 mt-1">{detail}</div>}
        </div>
        {/* status glyph (placeholder) */}
        <span className={`inline-block ${s.icon}`}>{
          status === "good" ? "✓" : status === "warn" ? "⚠︎" : "●"
        }</span>
      </div>
    </div>
  );
};
