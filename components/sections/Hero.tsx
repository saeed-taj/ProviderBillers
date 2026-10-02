import React from "react";
import Link from "next/link";
import {
  FileCheck2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  DollarSign,
  Clock,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 py-16 text-white sm:py-24 lg:py-28">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_50%)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: B2B Executive Pitch */}
          <div className="lg:col-span-7">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Zero-Risk US Medical Billing & RCM Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-[1.15]">
              Stop Leaving <span className="text-sky-400 underline decoration-sky-500/40 underline-offset-8">8% to 15%</span> of Practice Cash Trapped in Payer Clearinghouses.
            </h1>

            {/* Subheadline with real executive value */}
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Engineered for US Medical Practice Managers, Clinic Directors, and Physicians. We handle full-lifecycle RCM, AAPC-certified CPT/ICD-10 coding, and contingency-based aged AR (&gt;90 days) recovery with <strong>$0 upfront fees</strong>.
            </p>

            {/* Risk-Free Value Hooks Grid */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 rounded-lg border border-slate-700/60 bg-slate-800/40 p-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>
                  <strong>Free 10-Claim Denial Audit</strong> (Pinpoint leakage in 48 hrs)
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-slate-700/60 bg-slate-800/40 p-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>
                  <strong>Aged AR Recovery (&gt;90d):</strong> 100% contingency basis
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-4 text-base font-bold text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-all active:scale-[0.99]"
              >
                <FileCheck2 className="h-5 w-5 text-slate-950" />
                <span>Claim Free 10-Claim Denial Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#ar-calculator"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/80 px-6 py-4 text-base font-semibold text-white hover:bg-slate-700 transition-colors"
              >
                <TrendingUp className="h-5 w-5 text-sky-400" />
                <span>Calculate Lost Revenue</span>
              </a>
            </div>

            {/* Direct hotline */}
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <PhoneCall className="h-4 w-4 text-sky-400" />
                Questions? Call our Richmond VA billing desk:
              </span>
              <a
                href="tel:+12026600030"
                className="font-bold text-white hover:text-sky-300 transition-colors"
              >
                (202) 660-0030
              </a>
            </div>
          </div>

          {/* Right Column: Verified Operating Metrics Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-800/70 p-6 sm:p-8 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Performance Benchmarks
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                  Live SLA Standards
                </span>
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex items-center justify-between rounded-xl bg-slate-900/60 p-4 border border-slate-700/50">
                  <div>
                    <span className="text-xs text-slate-400">First-Pass Clean Claim Rate</span>
                    <p className="text-2xl font-black text-white">98.4%</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-emerald-400">National Avg: ~85%</span>
                    <p className="text-xs text-slate-300">Clearinghouse verified</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900/60 p-4 border border-slate-700/50">
                  <div>
                    <span className="text-xs text-slate-400">Average Days in AR</span>
                    <p className="text-2xl font-black text-white">&lt;28 Days</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-emerald-400">Industry standard: 45-55d</span>
                    <p className="text-xs text-slate-300">Rapid payment posting</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900/60 p-4 border border-slate-700/50">
                  <div>
                    <span className="text-xs text-slate-400">Aged AR Recovery (&gt;90d)</span>
                    <p className="text-2xl font-black text-emerald-400">$0 Upfront</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-sky-300">Strictly Contingency</span>
                    <p className="text-xs text-slate-300">Zero practice risk</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900/60 p-4 border border-slate-700/50">
                  <div>
                    <span className="text-xs text-slate-400">Denial Appeal Turnaround</span>
                    <p className="text-2xl font-black text-white">48 Hours</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-emerald-400">AAPC Coder Review</span>
                    <p className="text-xs text-slate-300">Level 1 & 2 appeals</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 text-center">
                <Link
                  href="/specialties"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                >
                  <span>Explore specialized coding for your medical specialty</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
