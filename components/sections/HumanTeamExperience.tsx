"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  RotateCw,
  PhoneCall,
  Award,
} from "lucide-react";

export function HumanTeamExperience() {
  // Flip card states
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const cards = [
    {
      id: 1,
      image: "/assets/images/aboutus1.webp",
      badge: "Physician Advocacy",
      title: "Senior AAPC Coder & Doctor Defense",
      subtitle: "Click or tap card to flip for protocol",
      frontSnippet:
        "Every claim is inspected by certified medical coders who understand physician documentation, not opaque automated scrapers.",
      backTitle: "AAPC Certified Defense Protocol",
      backPoints: [
        "CPC & CPMA credentialed coders review clinical charts",
        "Modifier-25 & unbundling audits prevent clawbacks",
        "Direct peer-to-peer prep for physician insurance hearings",
        "48-hour SLA on high-dollar claim appeals",
      ],
      ctaText: "Request Physician Audit",
      ctaLink: "/free-audit",
    },
    {
      id: 2,
      image: "/assets/images/equal_size2.webp",
      badge: "Clinical Precision",
      title: "Radiology, Surgery & Complex Coding",
      subtitle: "Click or tap card to flip for protocol",
      frontSnippet:
        "Doctors reviewing complex imaging and operative notes to capture legitimate CPT codes without triggering payer audits.",
      backTitle: "Surgical & Diagnostic Coding Protocol",
      backPoints: [
        "Operative note analysis for missed billable CPT codes",
        "NCCI edit scrubbing prior to clearinghouse submission",
        "26/TC component split billing verification",
        "99.1% verified coding accuracy across all specialties",
      ],
      ctaText: "Explore Coding Audits",
      ctaLink: "/services/medical-coding-auditing",
    },
    {
      id: 3,
      image: "/assets/images/second.webp",
      badge: "Zero-Risk Recovery",
      title: "Aged AR Liquidation (&gt;90 Days)",
      subtitle: "Click or tap card to flip for protocol",
      frontSnippet:
        "Our forensic recovery directors investigate stale claims older than 90, 120, or 365 days on a strict 100% contingency basis.",
      backTitle: "Contingency AR Liquidation Protocol",
      backPoints: [
        "$0 Upfront cost — we only get paid when you collect",
        "Clearinghouse proof-of-timely-filing retrieval",
        "Direct payer claims supervisor escalations",
        "Historical 81% timely-filing denial overturn rate",
      ],
      ctaText: "Recover Old AR",
      ctaLink: "/services/aged-ar-recovery",
    },
    {
      id: 4,
      image: "/assets/images/who_we_are.webp",
      badge: "Direct Partnership",
      title: "Your Richmond VA In-House Extension",
      subtitle: "Click or tap card to flip for protocol",
      frontSnippet:
        "Meet the dedicated billing team standing behind your practice. Real people who answer the phone when your clinic calls.",
      backTitle: "Practice Integration Protocol",
      backPoints: [
        "Direct phone line to your assigned billing supervisor",
        "100% inside your existing EHR (Epic, Athena, Kareo, etc.)",
        "Mutual HIPAA BAA executed before any PHI access",
        "Zero employee turnover disruption to your cash flow",
      ],
      ctaText: "Speak With Our Team",
      ctaLink: "/contact",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-3.5 py-1 text-xs font-semibold text-sky-900 shadow-2xs">
            <Award className="h-4 w-4 text-emerald-600" />
            <span>Human Healthcare Expertise • Certified Billing Specialists</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Real Healthcare Professionals, Not an AI Black Box
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Healthcare revenue cycle management cannot be left to automated scrapers that blindly resubmit bad claims. Our seasoned medical billing directors and AAPC-certified coders work inside your EHR to protect every rightful dollar.
          </p>
          <p className="mt-1 text-xs font-semibold text-sky-800">
            (Tap or hover on any card below to flip and inspect our operational protocol)
          </p>
        </div>

        {/* 4 Interactive Flip Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => {
            const isFlipped = !!flippedCards[idx];

            return (
              <div
                key={card.id}
                className="group h-[440px] [perspective:1000px] cursor-pointer"
                onClick={() => toggleFlip(idx)}
              >
                <div
                  className={`relative h-full w-full rounded-2xl shadow-md transition-all duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(8deg)]"
                  }`}
                >
                  {/* CARD FRONT: Photo + Humanized Intro */}
                  <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white [backface-visibility:hidden] flex flex-col justify-between">
                    <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-sky-950 shadow-xs">
                          {card.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                          <RotateCw className="h-3 w-3 text-sky-400" />
                          <span>Flip</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600">
                          {card.frontSnippet}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-900">
                        <span>View Protocol</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* CARD BACK: Detailed Humanized Clinical Protocols */}
                  <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl border border-sky-300 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="flex items-center justify-between border-b border-sky-800 pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                          {card.badge}
                        </span>
                        <RotateCw className="h-3.5 w-3.5 text-sky-400" />
                      </div>

                      <h4 className="mt-3 text-sm font-bold text-white">
                        {card.backTitle}
                      </h4>

                      <ul className="mt-3 space-y-2 text-xs text-slate-300">
                        {card.backPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <Link
                        href={card.ctaLink}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-sky-400 transition-colors"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Doctor Advocacy Quote Banner with Real Physician Photo */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="relative h-44 w-44 mx-auto rounded-2xl overflow-hidden md:col-span-3 border-2 border-sky-100 shadow-xs">
              <Image
                src="/assets/images/aboutus1.webp"
                alt="Provider Billers Chief Medical Auditor"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="md:col-span-9 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 ring-1 ring-emerald-600/20">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Physician-Centric Standard of Care</span>
              </div>
              <blockquote className="text-base sm:text-lg font-medium italic text-slate-800 leading-relaxed">
                &ldquo;Physicians train for a decade to care for patients, not to fight insurance clearinghouses over technicalities or suffer arbitrary payer downcoding. We built Provider Billers so doctors can practice medicine with absolute financial security.&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
                <div>
                  <span className="block text-sm font-bold text-slate-900">
                    Provider Billers Clinical RCM Advisory Board
                  </span>
                  <span className="text-xs text-slate-500">
                    AAPC Certified Professional Medical Auditors (CPMA) & Coding Leaders
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+12026716993"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-900 hover:text-sky-700"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-sky-700" />
                    <span>Direct Desk: (202) 671-6993</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
