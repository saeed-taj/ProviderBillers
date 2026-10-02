import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  RotateCcw,
  Users2,
  FileCheck2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export function ValueProp() {
  const comparison = [
    {
      metric: "Denial Resolution Model",
      providerBillers: "Daily CARC/RARC triage by AAPC coders; 48-hr SLA",
      inHouse: "Often ignored due to time crunch; only simple claims reworked",
      offshoreGeneric: "Bulk automated resubmission without clinical appeal letters",
    },
    {
      metric: "Aged AR (>90 Days) Stance",
      providerBillers: "100% Contingency basis ($0 upfront, we only win when you collect)",
      inHouse: "Deprioritized as staff focus on current week charges",
      offshoreGeneric: "Hourly billing regardless of whether money is recovered",
    },
    {
      metric: "Coder Certification",
      providerBillers: "AAPC / AHIMA certified CPC, CPMA & specialty coders",
      inHouse: "Rarely certified; billing taught informally by past staff",
      offshoreGeneric: "Non-certified data entry clerks using generic software",
    },
    {
      metric: "EHR Data Ownership",
      providerBillers: "100% inside your EHR. Zero third-party proprietary lock-in",
      inHouse: "Inside your EHR",
      offshoreGeneric: "Forces migration to proprietary foreign platforms",
    },
    {
      metric: "Initial Engagement Risk",
      providerBillers: "Free 10-Claim Denial Audit before any contract commitment",
      inHouse: "Fixed salary, taxes, benefits, and paid PTO overhead",
      offshoreGeneric: "Long-term lock-in contracts with hidden onboarding fees",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
            Why US Healthcare Practices Partner With Us
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built Strictly for High-Complexity Medical Billing & Revenue Recovery
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We are not a generic tech vendor or IT outsourcer. Provider Billers is a dedicated US Revenue Cycle Management agency focused on clinical coding accuracy, aggressive appeals, and zero-risk aging AR liquidation.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs hover:border-sky-300 transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-800">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Stop Algorithmic Downcoding
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Commercial payers deploy automated AI algorithms to downcode level 4/5 E/M visits and reject Modifier-25 claims. Our certified auditors enforce AMA CPT rules to safeguard your earned fees.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs hover:border-sky-300 transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
              <RotateCcw className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Liquidate Old AR (&gt;90 Days)
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Our aged AR liquidation team operates on a 100% contingency model. Zero upfront retainer. If we do not recover money from your aging AR ledger, you pay nothing.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs hover:border-sky-300 transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-900">
              <Users2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              End Staffing Turnover Chaos
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Never let in-house biller resignations disrupt cash flow or cause timely filing deadlines to lapse. You gain an entire department of credentialed specialists for less than the cost of one full-time salary.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs hover:border-sky-300 transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-900">
              <FileCheck2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Test Before You Commit
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Submit 10 rejected or aged claims for our Free 10-Claim Denial Audit. We provide a comprehensive forensic report identifying CPT/ICD-10 breakdown and actionable revenue steps in 48 hours.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
          <div className="bg-slate-900 px-6 py-4 text-white sm:px-8">
            <h3 className="text-lg font-bold">
              Operational Comparison: Provider Billers vs. Conventional Alternatives
            </h3>
            <p className="text-xs text-slate-300">
              Evaluating true cost, clinical coding depth, and collection outcomes.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Evaluation Criteria</th>
                  <th className="py-4 px-6 bg-sky-50 text-sky-950 font-extrabold border-x border-sky-200">
                    Provider Billers LLC
                  </th>
                  <th className="py-4 px-6">In-House Staff Only</th>
                  <th className="py-4 px-6">Generic Offshore BPO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {row.metric}
                    </td>
                    <td className="py-4 px-6 bg-sky-50/70 border-x border-sky-200 font-medium text-slate-900">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.providerBillers}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.inHouse}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.offshoreGeneric}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <span className="text-xs text-slate-600">
              Ready to see real clinical recovery numbers for your practice?
            </span>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-sky-800 transition-colors"
            >
              <span>Get Your 10-Claim Denial Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
