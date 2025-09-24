import React from "react";
import { evaluateStatus, type MetricKey } from "./status-rules";
import { MetricCard } from "./metric-card";

type SideData = {
  title: string;        // e.g., "Your Website"
  items: {
    label: string;      // "Title", "Description", "H1"
    key: MetricKey;
    value: unknown;     // number or boolean etc.
  }[];
  leftBadge?: React.ReactNode;   // optional icon
};

type CompareSectionProps = {
  left: SideData;
  right: SideData;
  className?: string;
};

export const CompareSection: React.FC<CompareSectionProps> = ({ left, right, className }) => {
  return (
    <div className={`rounded-2xl bg-white ring-1 ring-black/5 p-4 ${className || ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            {left.leftBadge}
            <div className="font-semibold text-slate-900">{left.title}</div>
          </div>
          {left.items.map((it, idx) => {
            const { status, detail } = evaluateStatus({ key: it.key, value: it.value });
            return (
              <MetricCard key={`${it.key}-${idx}`} title={it.label} detail={detail} status={status} />
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            {right.leftBadge}
            <div className="font-semibold text-slate-900">{right.title}</div>
          </div>
          {right.items.map((it, idx) => {
            const { status, detail } = evaluateStatus({ key: it.key, value: it.value });
            return (
              <MetricCard key={`${it.key}-${idx}`} title={it.label} detail={detail} status={status} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
