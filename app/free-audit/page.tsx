import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Phone,
  Clock,
  ArrowRight,
  TrendingDown,
  FileSpreadsheet,
} from "lucide-react";
import { AuditForm } from "@/components/forms/AuditForm";
import { TrustBadges } from "@/components/sections/TrustBadges";

export const metadata: Metadata = {
  title: "Free 10-Claim Denial Audit ($0 Upfront) | Provider Billers",
  description:
    "Request your complimentary 10-claim medical billing denial audit. Our AAPC-certified auditors detect root-cause CPT/ICD-10 leakage, undercoding, and unappealed write-offs within 48 hours.",
  openGraph: {
    title: "Free 10-Claim Denial Audit | Provider Billers",
    description:
      "Pinpoint your practice's lost revenue in 48 hours with a zero-cost 10-claim audit.",
    url: "https://www.providerbillers.com/free-audit",
  },
  alternates: {
    canonical: "https://www.providerbillers.com/free-audit",
  },
};

interface Props {
  searchParams: Promise<{
    tier?: string;
    leakage?: string;
    monthlyCollections?: string;
  }>;
}

export default async function FreeAuditPage({ searchParams }: Props) {
  const params = await searchParams;
  const initialTier = (params.tier as any) || "$50k - $100k";

  return (
    <main className="min-h-screen">
      {/* Header Banner with Real Surgical Background */}
      <section className="relative overflow-hidden py-16 text-white sm:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/main.jpg"
            alt="Provider Billers Surgical Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-sky-950/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-300">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Zero-Risk B2B Healthcare Evaluation</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Free 10-Claim Denial & Coding Audit
          </h1>
          <p className="mt-4 text-base text-slate-200 sm:text-lg">
            Stop guessing why your claim denials are surging or why cash flow is lagging. Submit 10 recent sample remits or aging claims. Our senior AAPC-certified billing auditors will dissect them line-by-line within 48 hours.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              100% Free ($0 Cost)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Mutual HIPAA BAA Executed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              48-Hour SLA Report
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              No Software Migration
            </span>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Main Form & Process Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left: What We Audit & Why */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Forensic Medical Audit
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  What Our Certified Auditors Look For
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Insurers intentionally configure automated algorithms to deny claims on technicalities. Our 10-claim audit identifies systemic issues that, once fixed, elevate your entire practice collection rate.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <FileSpreadsheet className="h-4 w-4 text-sky-800" />
                    <span>CPT & Modifier Alignment</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    Verifying Modifier-25, -59, -XU/XS, -26/TC, and assistant surgeon codes against documentation to overturn bundling edits.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <TrendingDown className="h-4 w-4 text-rose-700" />
                    <span>Algorithmic Downcoding</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    Pinpointing where commercial payers unilaterally reduced Level 4/5 E/M visits or denied diagnostic imaging without justification.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Clock className="h-4 w-4 text-emerald-700" />
                    <span>Timely Filing Recapture</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    Identifying claims written off as &apos;timely filing expired&apos; where clearinghouse EDI 277 CA logs prove timely dispatch.
                  </p>
                </div>
              </div>

              {/* Real Doctor Consultation Image Card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="relative h-44 w-full">
                  <Image
                    src="/assets/images/second.webp"
                    alt="Clinical team reviewing audit results"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-sky-950">
                    AAPC Clinical Review Board
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    &ldquo;Our senior auditors dissect each claim with the same thoroughness as a surgical consult. You receive concrete, dollar-quantified findings.&rdquo;
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-6">
                <h3 className="text-sm font-bold text-sky-950">
                  Prefer to speak with an executive first?
                </h3>
                <p className="mt-1 text-xs text-sky-800">
                  Call our Richmond VA headquarters directly to discuss your practice’s specialty and billing challenges:
                </p>
                <a
                  href="tel:+12096716993"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-sky-950 hover:underline"
                >
                  <Phone className="h-4 w-4 text-sky-700" />
                  <span>(209) 671-6993</span>
                </a>
              </div>
            </div>

            {/* Right: The Zod-Backed Audit Form */}
            <div className="lg:col-span-7">
              <AuditForm
                initialMonthlyBilling={initialTier}
                title="Submit Practice Details for Audit"
                subtitle="Complete the form below. A senior medical billing director will contact you within 4 business hours to execute a mutual BAA and initiate the 10-claim audit."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
