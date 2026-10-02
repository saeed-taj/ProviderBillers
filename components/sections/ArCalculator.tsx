"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { DollarSign, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface ArCalculatorProps {
  onSelectAudit?: (data: { monthlyBilling: string; leakage: number }) => void;
  className?: string;
}

export function ArCalculator({ onSelectAudit, className = "" }: ArCalculatorProps) {
  const [monthlyCollections, setMonthlyCollections] = useState<number>(120000);
  const [denialRate, setDenialRate] = useState<number>(8.5);
  const [agedArDays, setAgedArDays] = useState<number>(45);

  const monthlyCollectionsId = useId();
  const denialRateId = useId();
  const agedArDaysId = useId();

  // Calculations
  const annualGrossBilling = monthlyCollections * 12;
  const annualRevenueLeaked = Math.round(annualGrossBilling * (denialRate / 100));
  // Conservative estimate: 75% of denied / aged claims are recoverable by AAPC certified RCM scrubbers
  const recoverableRevenue = Math.round(annualRevenueLeaked * 0.76);
  const monthlyCashInjection = Math.round(recoverableRevenue / 12);

  const billingTier =
    monthlyCollections < 50000
      ? "Under $50k"
      : monthlyCollections <= 100000
      ? "$50k - $100k"
      : monthlyCollections <= 250000
      ? "$100k - $250k"
      : "$250k+";

  const handleCtaClick = () => {
    if (onSelectAudit) {
      onSelectAudit({
        monthlyBilling: billingTier,
        leakage: annualRevenueLeaked,
      });
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ${className}`}>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 px-6 py-8 text-white sm:px-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 ring-1 ring-inset ring-sky-400/30">
          <TrendingUp className="h-3.5 w-3.5" />
          Interactive RCM Financial Model
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Lost Revenue & Aged AR Leakage Estimator
        </h3>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">
          Adjust your practice metrics to model how much cash is trapped in payer clearinghouses, unappealed write-offs, and aging AR buckets.
        </p>
      </div>

      <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-12">
        {/* Sliders Column */}
        <div className="space-y-6 lg:col-span-7">
          {/* Monthly Collections Slider */}
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
            <div className="flex items-center justify-between">
              <label htmlFor={monthlyCollectionsId} className="text-sm font-semibold text-slate-800">
                Average Monthly Practice Collections
              </label>
              <span className="font-mono text-lg font-bold text-sky-950">
                {formatCurrency(monthlyCollections)}
                <span className="text-xs font-normal text-slate-500">/mo</span>
              </span>
            </div>
            <input
              id={monthlyCollectionsId}
              type="range"
              min={20000}
              max={500000}
              step={5000}
              value={monthlyCollections}
              onChange={(e) => setMonthlyCollections(Number(e.target.value))}
              aria-label="Average Monthly Practice Collections"
              className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-700"
            />
            <div className="mt-2 flex justify-between text-xs font-medium text-slate-500">
              <span>$20k</span>
              <span>$150k</span>
              <span>$300k</span>
              <span>$500k+</span>
            </div>
          </div>

          {/* Denial / Uncollected Rate Slider */}
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
            <div className="flex items-center justify-between">
              <label htmlFor={denialRateId} className="text-sm font-semibold text-slate-800">
                Estimated Denial / Uncollected Rate
              </label>
              <span className="font-mono text-lg font-bold text-rose-700">
                {denialRate.toFixed(1)}%
                <span className="ml-1 text-xs font-normal text-slate-500">
                  (US Avg: 11-15%)
                </span>
              </span>
            </div>
            <input
              id={denialRateId}
              type="range"
              min={3}
              max={15}
              step={0.5}
              value={denialRate}
              onChange={(e) => setDenialRate(Number(e.target.value))}
              aria-label="Estimated Denial or Uncollected Rate"
              className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-rose-600"
            />
            <div className="mt-2 flex justify-between text-xs font-medium text-slate-500">
              <span>3% (Top 5% Clinics)</span>
              <span>8.5% (Median)</span>
              <span>15% (Critical Leakage)</span>
            </div>
          </div>

          {/* Average Days in AR Slider */}
          <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
            <div className="flex items-center justify-between">
              <label htmlFor={agedArDaysId} className="text-sm font-semibold text-slate-800">
                Current Average Days in AR
              </label>
              <span className="font-mono text-lg font-bold text-slate-900">
                {agedArDays} Days
              </span>
            </div>
            <input
              id={agedArDaysId}
              type="range"
              min={25}
              max={75}
              step={1}
              value={agedArDays}
              onChange={(e) => setAgedArDays(Number(e.target.value))}
              aria-label="Current Average Days in AR"
              className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-slate-800"
            />
            <div className="mt-2 flex justify-between text-xs font-medium text-slate-500">
              <span>25 Days (Provider Billers Standard)</span>
              <span>45 Days (Average)</span>
              <span>75+ Days (Severe Lag)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>
              All calculations benchmarked against 2024 MGMA Cost and Revenue Cycle Standards for independent US medical practices.
            </span>
          </div>
        </div>

        {/* Results Card Column */}
        <div className="flex flex-col justify-between rounded-xl bg-gradient-to-b from-sky-50/90 to-slate-100/90 p-6 lg:col-span-5">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
              <AlertTriangle className="h-4 w-4" />
              Annual Financial Impact
            </div>

            {/* Annual Leakage */}
            <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200/80">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Estimated Annual Lost Revenue
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-3xl font-extrabold text-rose-700">
                  {formatCurrency(annualRevenueLeaked)}
                </span>
                <span className="text-xs font-medium text-slate-600">/year</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Languishing in unworked clearinghouse rejections, unappealed downcodes, and timely filing write-offs.
              </p>
            </div>

            {/* Recoverable Amount */}
            <div className="rounded-lg border-2 border-emerald-500/30 bg-emerald-50/70 p-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                Recoverable via Provider Billers
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-3xl font-extrabold text-emerald-700">
                  {formatCurrency(recoverableRevenue)}
                </span>
                <span className="text-xs font-semibold text-emerald-800">/year</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>+{formatCurrency(monthlyCashInjection)} /mo immediate cash injection</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Contingency aged AR fee:</span>
                <strong className="text-slate-800">$0 Upfront (100% Contingency)</strong>
              </div>
              <div className="flex justify-between">
                <span>10-Claim Denial Audit:</span>
                <strong className="text-emerald-700">100% Free ($0 Cost)</strong>
              </div>
            </div>
          </div>

          {/* CTA Action */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            {onSelectAudit ? (
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sky-800 active:scale-[0.99]"
              >
                <span>Recover My {formatCurrency(recoverableRevenue)}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <Link
                href={`/free-audit?monthlyCollections=${monthlyCollections}&leakage=${annualRevenueLeaked}&tier=${encodeURIComponent(
                  billingTier
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sky-800 active:scale-[0.99]"
              >
                <span>Claim Free 10-Claim Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            <p className="mt-2 text-center text-[11px] text-slate-500">
              No software migration required. Non-disclosure HIPAA agreement signed prior to audit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
