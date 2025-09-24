import type { MetricStatus } from "./MetricCard";

export type MetricKey = "title" | "description" | "h1";

export type MetricInput = {
  key: MetricKey;
  value: unknown;      // whatever you compute upstream (lengths, presence, etc.)
};

export function evaluateStatus(input: MetricInput): { status: MetricStatus; detail: string } {
  switch (input.key) {
    case "title": {
      // value: character count
      const len = Number(input.value || 0);
      if (len >= 50 && len <= 60) return { status: "good", detail: `Excellent (${len} chars)` };
      if (len >= 40 && len <= 70) return { status: "warn", detail: `Okay (${len} chars)` };
      return { status: "bad", detail: `Too Short/Long (${len} chars)` };
    }

    case "description": {
      const len = Number(input.value || 0);
      if (len >= 120 && len <= 160) return { status: "good", detail: `Perfect (${len} chars)` };
      if (len >= 90 && len <= 180) return { status: "warn", detail: `Needs tuning (${len} chars)` };
      return { status: "bad", detail: `Too Short/Long (${len} chars)` };
    }

    case "h1": {
      // value: boolean (present & single)
      const ok = Boolean(input.value);
      return ok
        ? { status: "good", detail: "Present & Optimized" }
        : { status: "bad", detail: "Missing or Multiple" };
    }

    default:
      return { status: "warn", detail: "Unscored" };
  }
}
