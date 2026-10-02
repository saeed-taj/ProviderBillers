import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, ArrowRight, ShieldCheck, FileCheck2, AlertCircle } from "lucide-react";
import specialtiesData from "@/data/specialties.json";
import { TrustBadges } from "@/components/sections/TrustBadges";

export const metadata: Metadata = {
  title: "Medical Specialties Billing Directory | Provider Billers",
  description:
    "Explore specialized medical billing, CPT/ICD-10 coding, and denial management for US Podiatry, Cardiology, Mental Health, Orthopedics, Family Practice, and Neurology clinics.",
  openGraph: {
    title: "Medical Specialties Billing Directory | Provider Billers",
    description:
      "Explore specialized medical billing, CPT/ICD-10 coding, and denial management for US medical specialties.",
    url: "https://www.providerbillers.com/specialties",
  },
  alternates: {
    canonical: "https://www.providerbillers.com/specialties",
  },
};

export default function SpecialtiesIndexPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-300">
            <Stethoscope className="h-3.5 w-3.5 text-emerald-400" />
            <span>Specialty-Specific Billing Protocols</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Medical Specialties We Serve
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Generic billing agencies treat cardiology the same as podiatry or behavioral health—leading to catastrophic denial rates. Provider Billers deploys dedicated specialty teams with deep mastery of payer LCDs, NCCI edits, and CPT modifier conventions.
          </p>

          <div className="mt-8">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-sky-400 transition-colors"
            >
              <FileCheck2 className="h-4 w-4" />
              <span>Request Free 10-Claim Specialty Audit</span>
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Directory Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {specialtiesData.map((spec) => (
              <div
                key={spec.slug}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
                      {spec.shortName}
                    </span>
                    <span className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      Natl Denial: {spec.denialRateNational}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                    {spec.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {spec.tagline}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {spec.summary}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Primary CPT Hotspots:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {spec.keyCptCodes.map((codeObj, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700"
                        >
                          {codeObj.code}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    href={`/specialties/${spec.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-sky-900 hover:text-sky-700"
                  >
                    <span>View {spec.shortName} Billing Protocol</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
