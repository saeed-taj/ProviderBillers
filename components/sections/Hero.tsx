import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileCheck2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
} from "lucide-react";

export function Hero() {

  
  return (
    <section className="relative overflow-hidden py-16 text-white sm:py-24 lg:py-28 min-h-[640px] flex items-center">
      {/* Background Image: Real Surgical Team in Operating Theater */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/main.webp"
          alt="Provider Billers surgical and medical team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Humanized Deep Navy & Slate Clinical Overlay for 100% Text Legibility */}
        
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: B2B Executive Pitch */}
          <div className="lg:col-span-7">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-sky-200 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Dedicated US Healthcare Billing & RCM Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-[1.15] drop-shadow-sm">
              Stop Leaving <span className="text-sky-400 underline decoration-sky-400/40 underline-offset-8">8% to 15%</span> of Practice Cash Trapped in Payer Clearinghouses.
            </h1>

            {/* Subheadline with real executive value */}
            <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg drop-shadow-xs">
              Engineered for US Medical Practice Managers, Clinic Directors, and Physicians. We handle full-lifecycle RCM, AAPC-certified CPT/ICD-10 coding, and contingency-based aged AR (&gt;90 days) recovery with <strong>$0 upfront fees</strong>.
            </p>

            {/* Risk-Free Value Hooks Grid */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/70 p-3.5 text-sm backdrop-blur-md">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>
                  <strong>Free 10-Claim Denial Audit</strong> (Pinpoint leakage in 48 hrs)
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/70 p-3.5 text-sm backdrop-blur-md">
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-4 text-base font-bold text-slate-950 shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition-all active:scale-[0.99]"
              >
                <FileCheck2 className="h-5 w-5 text-slate-950" />
                <span>Claim Free 10-Claim Denial Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#ar-calculator"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-6 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <TrendingUp className="h-5 w-5 text-sky-300" />
                <span>Calculate Lost Revenue</span>
              </a>
            </div>

            {/* Direct hotline */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="h-4 w-4 text-sky-400" />
                Questions? Call our Richmond VA billing desk:
              </span>
              <a
                href="tel:+12096600030"
                className="font-bold text-white hover:text-sky-300 transition-colors underline decoration-sky-400/40"
              >
                (209) 671-6993
              </a>
            </div>
          </div>

          {/* Right Column: Verified Operating Metrics Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/15 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Performance Benchmarks
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                  Live SLA Standards
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-slate-950/60 p-4 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-400">First-Pass Clean Claim Rate</span>
                    <p className="text-2xl font-black text-white">98.4%</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-emerald-400">National Avg: ~85%</span>
                    <p className="text-xs text-slate-300">Clearinghouse verified</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-950/60 p-4 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-400">Average Days in AR</span>
                    <p className="text-2xl font-black text-white">&lt;28 Days</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-emerald-400">Industry standard: 45-55d</span>
                    <p className="text-xs text-slate-300">Rapid payment posting</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-950/60 p-4 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-400">Aged AR Recovery (&gt;90d)</span>
                    <p className="text-2xl font-black text-emerald-400">$0 Upfront</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-sky-300">Strictly Contingency</span>
                    <p className="text-xs text-slate-300">Zero practice risk</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-950/60 p-4 border border-white/10">
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

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <Link
                  href="/specialties"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white transition-colors"
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
