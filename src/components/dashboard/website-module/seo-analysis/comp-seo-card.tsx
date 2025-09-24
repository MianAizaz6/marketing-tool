// components/SeoScoreCard.tsx
import React from "react";

type SeoScoreCardProps = {
  title: string;           // e.g. "YourSite.com"
  subtitle: string;        // e.g. "Your Website"
  score: number;           // 0..100
  leftIcon?: React.ReactNode;   // e.g. <img src={...} className="h-5 w-5" />
  rightIcon?: React.ReactNode;  // e.g. <img src={...} className="h-5 w-5" />
  className?: string;
};

function clampScore(n: number) {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, Math.round(n)));
}

function getColorClasses(score: number) {
  // >90 green, >75 blue, >50 yellow, else red
  if (score > 90) return { bar: "bg-green-500", text: "text-green-600" };
  if (score > 75) return { bar: "bg-blue-500", text: "text-blue-600" };
  if (score > 50) return { bar: "bg-yellow-500", text: "text-yellow-600" };
  return { bar: "bg-red-500", text: "text-red-600" };
}

const SeoScoreCard: React.FC<SeoScoreCardProps> = ({
  title,
  subtitle,
  score,
  leftIcon,
  rightIcon,
  className = "",
}) => {
  const s = clampScore(score);
  const colors = getColorClasses(s);

  return (
    <div
      className={
        "rounded-xl bg-white shadow-sm ring-1 ring-black/5 p-5 flex flex-col gap-4 " +
        className
      }
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          {leftIcon ? <span className="mt-0.5">{leftIcon}</span> : null}
          <div>
            <div className="font-semibold text-gray-900 leading-5">{title}</div>
            <div className="text-sm text-gray-500">{subtitle}</div>
          </div>
        </div>
        {rightIcon ? <span>{rightIcon}</span> : null}
      </div>

      {/* Metric label + numeric score */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">SEO Score</span>
        <span className={`text-lg font-semibold ${colors.text}`}>{s}/100</span>
      </div>

      {/* Progress bar */}
      <div
        className="h-2 w-full rounded-full bg-gray-200/80"
        role="progressbar"
        aria-valuenow={s}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="SEO score"
      >
        <div
          className={`h-2 rounded-full ${colors.bar} transition-[width] duration-500`}
          style={{ width: `${s}%` }}
        />
      </div>
    </div>
  );
};

export default SeoScoreCard;
