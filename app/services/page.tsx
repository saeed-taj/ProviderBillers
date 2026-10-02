import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  RotateCcw,
  ShieldAlert,
  FileCode2,
  Award,
  Users,
  ArrowRight,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import servicesData from "@/data/services.json";
import { TrustBadges } from "@/components/sections/TrustBadges";

export const metadata: Metadata = {
  title: "Comprehensive Medical Billing & RCM Services | Provider Billers",
  description:
    "Explore full-lifecycle US healthcare revenue cycle management services including end-to-end RCM, contingency aged AR recovery, denial management, credentialing, and certified coding.",
  openGraph: {
    title: "Comprehensive Medical Billing & RCM Services | Provider Billers",
    description:
      "Explore full-lifecycle US healthcare revenue cycle management services.",
    url: "https://www.providerbillers.com/services",
  },
  alternates: {
    canonical: "https://www.providerbillers.com/services",
  },
};

export default function ServicesIndexPage() {
  const iconMap: Record<string, React.ElementType> = {
    Activity,
    RotateCcw,
    ShieldAlert,
    FileCode2,
    Award,
    Users,
  };

  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-300">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Core Revenue Cycle Management Solutions</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Specialized RCM & Medical Billing Services
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Provider Billers provides specialized clinical coding, front-to-back revenue cycle management, and zero-risk aged AR recovery for independent medical practices and ambulatory surgery centers nationwide.
          </p>

          <div className="mt-8">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-sky-400 transition-colors"
            >
              <FileCheck2 className="h-4 w-4" />
              <span>Claim Free 10-Claim Denial Audit</span>
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services List */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <div
                  key={service.slug}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-900 group-hover:bg-sky-900 group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      {service.badge && (
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800 ring-1 ring-emerald-600/20">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-4 space-y-2">
                      {service.keyMetrics.map((m, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-slate-500">{m.label}</span>
                          <span className="font-bold text-slate-900">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-900 hover:text-sky-700"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
