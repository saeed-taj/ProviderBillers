import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AuditForm } from "@/components/forms/AuditForm";
import { TrustBadges } from "@/components/sections/TrustBadges";

export const metadata: Metadata = {
  title: "Contact Provider Billers | US Medical Billing & RCM Agency",
  description:
    "Get in touch with Provider Billers LLC. Speak directly with our US healthcare revenue cycle directors. Headquarters located in Richmond, VA.",
  openGraph: {
    title: "Contact Provider Billers | US Medical Billing & RCM Agency",
    description:
      "Get in touch with Provider Billers LLC. Headquarters located in Richmond, VA.",
    url: "https://www.providerbillers.com/contact",
  },
  alternates: {
    canonical: "https://www.providerbillers.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Header with Surgical Background */}
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
            <MapPin className="h-3.5 w-3.5 text-emerald-400" />
            <span>Richmond, Virginia Headquarters</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Contact Provider Billers
          </h1>
          <p className="mt-4 text-base text-slate-200 sm:text-lg">
            Have questions regarding your practice’s denial rate, aged AR ledger, or clearinghouse connectivity? Connect directly with our executive RCM advisory team.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Contact Details & Form */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Direct Practice Support
                </span>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  We Are Ready to Help Your Practice
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Unlike large software conglomerates that put clinics through multi-tiered phone trees, Provider Billers assigns dedicated senior billing directors who understand your specialty.
                </p>
              </div>

              {/* Real Human Team Photo Card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="relative h-44 w-full">
                  <Image
                    src="/assets/images/who_we_are.webp"
                    alt="Provider Billers Clinical Team in Richmond VA"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-sky-950">
                    Your Dedicated Richmond VA RCM Team
                  </span>
                </div>
              </div>

              {/* Direct Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-900">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Headquarters</h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      8407 Mayland Dr<br />
                      Richmond, VA 23294<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Direct Telephone</h3>
                    <a
                      href="tel:+12026716993"
                      className="mt-1 block text-sm font-semibold text-sky-900 hover:underline"
                    >
                      (202) 671-6993
                    </a>
                    <span className="text-[11px] text-slate-500">Toll-free nationwide</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-900">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Electronic Mail</h3>
                    <a
                      href="mailto:support@providerbillers.com"
                      className="mt-1 block text-sm font-semibold text-sky-900 hover:underline"
                    >
                      support@providerbillers.com
                    </a>
                    <span className="text-[11px] text-slate-500">Inquiries answered within 4 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Operational Hours</h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      Monday through Friday<br />
                      8:00 AM – 6:00 PM Eastern Standard Time
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance Note */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 flex items-center gap-3 text-xs text-emerald-800">
                <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />
                <span>All client communications and data handling are strictly HIPAA-compliant.</span>
              </div>
            </div>

            {/* Right Column: Embedded Audit / Inquiry Form */}
            <div className="lg:col-span-7">
              <AuditForm
                title="Send a Message or Request an Audit"
                subtitle="Fill out your practice information below. Our executive team will contact you promptly."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
