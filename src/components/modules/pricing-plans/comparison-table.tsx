import { useState } from "react";
import { Check } from "lucide-react";
import { tickIcon } from "../../../static-img-url";

interface Feature {
  label: string;
  values: { [plan: string]: string | boolean };
}

interface Plan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: { monthly: 19, yearly: 15 },
  },
  {
    name: "Growth",
    price: { monthly: 49, yearly: 39 },
  },
  {
    name: "Business",
    price: { monthly: 99, yearly: 79 },
  },
];

const features: Feature[] = [
  { label: "Social Profiles", values: { Starter: "05", Growth: "25", Business: "50" } },
  { label: "Social Posts", values: { Starter: "05", Growth: "25", Business: "50" } },
  { label: "Scheduled Posts", values: { Starter: false, Growth: "25", Business: "50" } },
  { label: "Content Calendar", values: { Starter: "05", Growth: "25", Business: "50" } },
  { label: "Team Members", values: { Starter: "05", Growth: "25", Business: "50" } },
  { label: "Approval Workflows", values: { Starter: false, Growth: true, Business: true } },
  { label: "AI Caption Generator", values: { Starter: false, Growth: true, Business: true } },
  { label: "Hashtag Suggestions", values: { Starter: false, Growth: true, Business: true } },
  { label: "Analytics & Reporting", values: { Starter: false, Growth: true, Business: true } },
  { label: "Social Inbox", values: { Starter: false, Growth: true, Business: true } },
  { label: "Client Workspaces", values: { Starter: false, Growth: true, Business: true } },
  { label: "Custom Branding", values: { Starter: false, Growth: true, Business: true } },
  { label: "Mobile App Access", values: { Starter: false, Growth: true, Business: true } },
  { label: "Support", values: { Starter: true, Growth: true, Business: true } },
];

export default function PlanComparisonTable() {
  const [planType, setPlanType] = useState<"monthly" | "yearly">("monthly");
  const [activePlan, setActivePlan] = useState("Growth");
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">PLAN COMPARISON</h2>
      <p className="text-sm text-gray-600 mb-6">
        Select the plan that fits your workflow.<br className="block md:hidden" /> Compare features to find the right solution for your team
      </p>

      <div className="max-w-5xl mx-auto rounded-xl border border-gray-200 shadow-sm overflow-hidden text-left bg-white">
        <div className="px-6 py-4 border-b border-gray-200 text-xs font-semibold text-gray-900">
          FEATURES INCLUDED IN PLANS
        </div>


        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 border-t border-gray-200">
              <tr>
                <th className="px-6 py-3 font-semibold flex flex-col gap-3 text-gray-700 "> <p className="mb-0 leading-4.5 text-lg font-bold">PLANS</p>
                  <span className="text-[#FF4400] bg-[#F1F5F9] rounded-full w-fit px-3 py-1 text-xs">Save 25%</span>
                  <div className="inline-flex rounded-full border border-gray-200">
                    <button
                      onClick={() => setIsYearly(false)}
                      className={`px-4 py-2 cursor-pointer text-sm rounded-l-full ${!isYearly ? 'bg-black text-white' : 'text-gray-700'}`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setIsYearly(true)}
                      className={`px-4 py-2 cursor-pointer text-sm rounded-r-full ${isYearly ? 'bg-black text-white' : 'text-gray-700'}`}
                    >
                      Yearly
                    </button>
                  </div>
                </th>
                {plans.map((plan) => (
                  <th key={plan.name} className="px-6 py-3 ">
                    <div className="flex flex-col gap-3">
                      <div className="font-semibold text-gray-800 text-sm">{plan.name.toUpperCase()}</div>
                      <div className="text-[13px] text-gray-600">
                        ${plan.price[planType]}/month
                      </div>
                      <button
                        onClick={() => setActivePlan(plan.name)}
                        className={`w-fit cursor-pointer text-xs font-medium px-4 py-2 rounded-md border ${activePlan === plan.name
                          ? "bg-black text-white"
                          : "border-gray-300 text-gray-700"
                          }`}
                      >
                        Select Plan
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-sm">
              {features.map((feature) => (
                <tr
                  key={feature.label}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3 text-gray-700 font-medium w-[200px]">{feature.label}</td>
                  {plans.map((plan) => {
                    const value = feature.values[plan.name];
                    return (
                      <td
                        key={plan.name + feature.label}
                        className="px-6 py-3 text-gray-700"
                      >
                        {value === true ? (
                          <img src={tickIcon} alt="" className="w-5" />
                        ) : value === false ? (
                          "-"
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
