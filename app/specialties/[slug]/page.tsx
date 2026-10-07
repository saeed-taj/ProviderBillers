import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  CheckCircle2,
  Stethoscope,
  ArrowRight,
  FileCheck2,
  TrendingDown,
  Clock,
  Phone,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import specialtiesData from "@/data/specialties.json";
import { AuditForm } from "@/components/forms/AuditForm";
import { TrustBadges } from "@/components/sections/TrustBadges";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return specialtiesData.map((spec) => ({
    slug: spec.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const specialty = specialtiesData.find((s) => s.slug === slug);

  if (!specialty) {
    return {
      title: "Specialty Not Found | Provider Billers",
    };
  }

  return {
    title: `${specialty.name} Medical Billing & Coding Services`,
    description: `Expert ${specialty.name} revenue cycle management, CPT/ICD-10 coding, and denial appeals. Reduce national denial rates (${specialty.denialRateNational}) to <2%.`,
    keywords: [
      `${specialty.name} billing services`,
      `${specialty.shortName} CPT coding`,
      `${specialty.shortName} denial management`,
      `${specialty.shortName} aged AR recovery`,
      "Provider Billers RCM",
    ],
    openGraph: {
      title: `${specialty.name} Medical Billing & Coding Services | Provider Billers`,
      description: specialty.summary,
      url: `https://www.providerbillers.com/specialties/${specialty.slug}`,
      siteName: "Provider Billers LLC",
      type: "article",
    },
    alternates: {
      canonical: `https://www.providerbillers.com/specialties/${specialty.slug}`,
    },
  };
}

export default async function SpecialtyDetailPage({ params }: Props) {
  const { slug } = await params;
  const specialty = specialtiesData.find((s) => s.slug === slug);

  if (!specialty) {
    notFound();
  }

  // Schema.org MedicalBusiness / Service JSON-LD
  const specialtyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${specialty.name} Medical Billing & Coding`,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Provider Billers LLC",
      "telephone": "+1-209-671-6993",
      "url": "https://www.providerbillers.com",
    },
    "description": specialty.summary,
    "areaServed": "US",
  };

  return (
    <main className="min-h-screen">
      <script
        id={`specialty-schema-${specialty.slug}`}
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/specialties" className="hover:text-white">Specialties</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-sky-400 font-semibold">{specialty.shortName}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-300">
                <Stethoscope className="h-3.5 w-3.5 text-emerald-400" />
                <span>Specialty-Engineered RCM Protocol</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {specialty.name} Billing & Revenue Cycle Management
              </h1>
              <p className="mt-2 text-lg font-medium text-sky-300">
                {specialty.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {specialty.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#specialty-audit"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-sky-400 transition-colors"
                >
                  <FileCheck2 className="h-4 w-4" />
                  <span>Request Free 10-Claim {specialty.shortName} Audit</span>
                </a>
                <a
                  href="tel:+1209671-6993"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  <span>(209) 671-6993</span>
                </a>
              </div>
            </div>

            {/* Performance Snapshot Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 backdrop-blur-sm shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {specialty.shortName} Benchmarks
                </span>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl bg-slate-900/60 p-4 border border-slate-700/50">
                    <span className="text-xs text-slate-400">National Specialty Denial Rate</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-2xl font-black text-rose-400">
                        {specialty.denialRateNational}
                      </span>
                      <span className="text-[11px] text-slate-400">High Risk Category</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-900/60 p-4 border border-slate-700/50">
                    <span className="text-xs text-slate-400">Provider Billers Target Clean Rate</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-2xl font-black text-emerald-400">
                        98.5%+
                      </span>
                      <span className="text-[11px] text-slate-400">First-Pass Adjudication</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-900/60 p-4 border border-slate-700/50">
                    <span className="text-xs text-slate-400">Target Days in AR</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-2xl font-black text-sky-300">
                        {specialty.avgDaysInArTarget}
                      </span>
                      <span className="text-[11px] text-slate-400">Accelerated Cash Flow</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-700 text-center text-xs text-slate-400">
                  Zero migration required • Operates directly in your EHR
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Specialty Denial Hotspots Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Root-Cause Revenue Leakage
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Where {specialty.name} Practices Lose Revenue
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Commercial and government payers rely on specialty-specific algorithmic scrubbers to reject claims. These are the most common denial vectors our audit teams identify and resolve:
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {specialty.denialHotspots.map((hotspot, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-xl border border-rose-100 bg-rose-50/40 p-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-200 text-rose-800 font-bold text-xs mt-0.5">
                  !
                </div>
                <p className="text-sm font-medium leading-relaxed text-slate-800">
                  {hotspot}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPT Codes & Compliance Cheat Sheet */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Clinical Coding Precision
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Key CPT Codes & Compliance Guardrails
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Our AAPC-certified coders enforce stringent documentation and modifier scrubbing for high-volume {specialty.shortName} procedures:
            </p>
          </div>

          <div className="space-y-6">
            {specialty.keyCptCodes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-sky-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-sky-900 px-3 py-1 font-mono text-sm font-bold text-white">
                      CPT {item.code}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.description}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-rose-50/70 p-4 border border-rose-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                      Payer Denial Trap:
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.denialTrap}
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-50/70 p-4 border border-emerald-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Provider Billers Compliance Fix:
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.complianceFix}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Modifier Rules */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Billing Modifiers
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Essential Modifiers for {specialty.shortName}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Payers automatically deny unbundled claims when modifiers lack supporting clinical evidence. Our scrubbers verify every modifier before dispatch.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {specialty.modifiers.map((mod, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-5"
              >
                <span className="inline-block font-mono text-sm font-bold text-sky-900 bg-sky-100 px-2.5 py-1 rounded-md">
                  {mod.code}
                </span>
                <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {mod.rule}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Our {specialty.shortName} Revenue Recovery Strategy
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              {specialty.recoveryStrategy}
            </p>
          </div>
        </div>
      </section>

      {/* Specialty FAQs */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {specialty.shortName} Billing FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {specialty.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <h3 className="font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Audit Section Pre-filled */}
      <section id="specialty-audit" className="py-20 bg-slate-900 text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Zero Cost • 10-Claim Specialty Audit
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Get a Complimentary 10-Claim Audit for Your {specialty.shortName} Practice
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed sm:text-base">
                Discover exactly how much revenue your practice is writing off due to payer downcoding, missing modifiers, or unappealed claim denials. We return your actionable audit report within 48 hours.
              </p>

              <div className="rounded-xl bg-slate-800/80 p-5 border border-slate-700 text-xs space-y-2 text-slate-300">
                <p className="font-semibold text-white">What we evaluate on your 10 sample claims:</p>
                <p>• CPT code unbundling and NCCI edit adherence</p>
                <p>• Specialty modifier validation (-25, -59, -QW, -26/TC)</p>
                <p>• Payer medical necessity LCD/NCD compliance</p>
                <p>• Timely filing recapture opportunities</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AuditForm
                initialSpecialty={specialty.name}
                title={`Request Your Free 10-Claim ${specialty.shortName} Audit`}
                subtitle="Zero upfront cost. We sign a HIPAA BAA before examining any documentation."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
