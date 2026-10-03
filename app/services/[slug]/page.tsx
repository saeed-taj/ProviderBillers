import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  RotateCcw,
  ShieldAlert,
  FileCode2,
  Award,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  Phone,
} from "lucide-react";
import servicesData from "@/data/services.json";
import { AuditForm } from "@/components/forms/AuditForm";
import { TrustBadges } from "@/components/sections/TrustBadges";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Provider Billers",
    };
  }

  return {
    title: `${service.title} | Provider Billers`,
    description: service.summary,
    keywords: [
      service.title,
      `${service.shortTitle} healthcare`,
      "medical billing services",
      "revenue cycle management",
      "Provider Billers",
    ],
    openGraph: {
      title: `${service.title} | Provider Billers`,
      description: service.summary,
      url: `https://www.providerbillers.com/services/${service.slug}`,
      siteName: "Provider Billers LLC",
      type: "website",
    },
    alternates: {
      canonical: `https://www.providerbillers.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ElementType> = {
    Activity,
    RotateCcw,
    ShieldAlert,
    FileCode2,
    Award,
    Users,
  };

  const Icon = iconMap[service.icon] || Activity;

  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-sky-400 font-semibold">{service.shortTitle}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-300">
                <Icon className="h-3.5 w-3.5 text-emerald-400" />
                <span>{service.badge || "Specialized RCM Service"}</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-2 text-lg font-medium text-sky-300">
                {service.heroHeadline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {service.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#service-audit"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-sky-400 transition-colors"
                >
                  <FileCheck2 className="h-4 w-4" />
                  <span>Request Free 10-Claim Denial Audit</span>
                </a>
                <a
                  href="tel:+12026716993"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  <span>(202) 671-6993</span>
                </a>
              </div>
            </div>

            {/* Metrics Snapshot */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 backdrop-blur-sm shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Performance Commitments
                </span>
                <div className="mt-4 space-y-4">
                  {service.keyMetrics.map((metric, i) => (
                    <div key={i} className="rounded-xl bg-slate-900/60 p-4 border border-slate-700/50">
                      <span className="text-xs text-slate-400">{metric.label}</span>
                      <p className="text-2xl font-black text-emerald-400">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Pain Points Solved */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Problems We Eliminate
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Common Practice Bottlenecks Solved
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.painPoints.map((pain, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-slate-50/50 p-5"
              >
                <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {pain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables List */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Scope of Work
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Key Deliverables & Standard Operating Procedures
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Workflow */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Systematic Execution
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Our 4-Step Operational Workflow
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs"
              >
                <span className="font-mono text-3xl font-black text-sky-900/30">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
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

      {/* Audit Form Section */}
      <section id="service-audit" className="py-20 bg-slate-900 text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Zero Risk • Mutual BAA Signed First
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to Upgrade Your Practice’s {service.shortTitle}?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed sm:text-base">
                Take the risk-free first step with our Free 10-Claim Denial Audit. We pinpoint the exact leaks in your current billing workflow within 48 business hours.
              </p>
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sky-400" />
                  <div>
                    <span className="text-xs text-slate-400">Speak directly with an RCM Director:</span>
                    <p className="text-base font-bold text-white">(202) 671-6993</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AuditForm
                title={`Request Your Free 10-Claim Audit for ${service.shortTitle}`}
                subtitle="Zero upfront cost. We sign a HIPAA BAA before examining any documentation."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
