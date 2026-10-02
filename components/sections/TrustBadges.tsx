import React from "react";
import { ShieldCheck, Award, Lock, FileCheck2, Cpu, CheckCircle } from "lucide-react";

export function TrustBadges() {
  const ehrPartners = [
    "AthenaHealth",
    "Epic Systems",
    "eClinicalWorks",
    "Kareo / Tebra",
    "AdvancedMD",
    "ModMed",
    "NextGen",
    "DrChrono",
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50/80 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Core Regulatory & Industry Credentials */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-900">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-900">100% HIPAA Compliant</span>
              <span className="text-[11px] text-slate-500">Mutual BAA Executed</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-900">AAPC & AHIMA Certified</span>
              <span className="text-[11px] text-slate-500">CPC, CPMA & CCS Coders</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-900">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-900">SOC-2 Type II Aligned</span>
              <span className="text-[11px] text-slate-500">Encrypted EDI Gateways</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-800">
              <FileCheck2 className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-900">CMS & OIG Standards</span>
              <span className="text-[11px] text-slate-500">CMS-1500 & UB-04 Audits</span>
            </div>
          </div>
        </div>

        {/* Seamless EHR Integration Row */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 shrink-0">
            <Cpu className="h-4 w-4 text-sky-800" />
            <span>Zero Migration Needed • Direct In-EHR Operations:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {ehrPartners.map((ehr) => (
              <span
                key={ehr}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:border-sky-300"
              >
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                {ehr}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
