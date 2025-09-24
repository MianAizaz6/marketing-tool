import React from "react";

export type TabKey = string;

type TabsProps = {
  tabs: { key: TabKey; label: string; icon?: React.ReactNode }[];
  active: TabKey;
  onChange: (key: TabKey) => void;
  className?: string;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, active, onChange, className }) => {
  return (
    <div className={`flex items-center gap-2 p-1 rounded-lg bg-slate-100 ${className || ""}`}>
      {tabs.map(t => {
        const isActive = t.key === active;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition
              ${isActive ? "bg-white shadow text-slate-900" : "text-slate-600 hover:text-slate-900"}`}
          >
            {t.icon ? <span className="opacity-75">{t.icon}</span> : null}
            {t.label}
          </button>
        );
      })}
    </div>
  );
};
