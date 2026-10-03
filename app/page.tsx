import React from "react";
import Link from "next/link";
import {
  FileCheck2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  RotateCcw,
  ShieldAlert,
  FileCode2,
  Award,
  Users,
  ChevronRight,
  Stethoscope,
  Phone,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { ArCalculator } from "@/components/sections/ArCalculator";
import { HumanTeamExperience } from "@/components/sections/HumanTeamExperience";
import { ValueProp } from "@/components/sections/ValueProp";
import { AuditForm } from "@/components/forms/AuditForm";
import servicesData from "@/data/services.json";
import specialtiesData from "@/data/specialties.json";

export default function HomePage() {
  const serviceIconMap: Record<string, React.ElementType> = {
    Activity,
    RotateCcw,
    ShieldAlert,
    FileCode2,
    Award,
    Users,
  };

  const faqs = [
    {
      q: "How does the Free 10-Claim Denial Audit work?",
      a: "You provide 10 sample denied or aged explanation-of-benefits (EOBs) or granting read-only access to a test batch inside your clearinghouse. Before any data is exchanged, we sign a mutual HIPAA Business Associate Agreement (BAA). Within 48 business hours, our AAPC-certified billing directors generate an audit report identifying exact CPT/ICD-10 root causes, missed modifiers, and actionable recovery steps—with zero obligation.",
    },
    {
      q: "How does your Contingency-Based Aged AR (>90 Days) recovery work?",
      a: "Our aged AR service requires $0 upfront. We work claims older than 90, 120, or 365 days that your internal team has written off or lacks the bandwidth to pursue. If we do not recover cash that is deposited into your bank account, you pay $0. You only pay a predetermined contingency percentage on recovered dollars.",
    },
    {
      q: "Do we have to change our current EHR or practice management software?",
      a: "No. We work directly inside your existing EHR—including Epic, AthenaHealth, eClinicalWorks, Kareo/Tebra, AdvancedMD, ModMed, and NextGen. You retain full data ownership, real-time visibility, and patient chart control.",
    },
    {
      q: "How do your coders ensure compliance against OIG and Medicare audits?",
      a: "Every member of our coding department is certified by AAPC (CPC, CPMA, specialty credentials) or AHIMA (CCS). We cross-reference charges against the latest CMS National Correct Coding Initiative (NCCI) edits, local coverage determinations (LCDs), and AMA CPT documentation guidelines before submission.",
    },
    {
      q: "What is your average timeline to begin billing for a new practice?",
      a: "Because we connect directly to your existing EHR without requiring a painful software migration, standard onboarding takes between 5 to 10 business days. For urgent aged AR recovery or denial triage, our team can begin forensic analysis within 48 hours of BAA execution.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* 1. Executive Hero Section */}
      <Hero />

      {/* 2. Trust Credentials & EHR Integration Row */}
      <TrustBadges />

      {/* 3. Who We Serve Across US Healthcare */}
      <WhoWeServe />

      {/* 4. Lost Revenue Estimator (Interactive ArCalculator) */}
      <section id="ar-calculator" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Interactive Financial Audit
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How Much Revenue Is Your Practice Leaving in Payer Clearinghouses?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Most independent US clinics lose 8% to 15% of gross collections to unworked rejections, timely filing lapses, and unappealed downcodes. Use our financial model below to project your practice’s recoverable cash.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <ArCalculator />
          </div>
        </div>
      </section>

      {/* 5. Human Healthcare Team & Interactive Card Flips */}
      <HumanTeamExperience />

      {/* 6. Value Proposition & Comparison Grid */}
      <ValueProp />

      {/* 5. Core RCM Services Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                Full-Lifecycle Revenue Cycle Services
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Comprehensive RCM Solutions for Healthcare Practices
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl">
                From front-office patient eligibility verification to aggressive aged AR recovery, our specialized teams operate as a seamless extension of your practice.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-900 hover:text-sky-700 shrink-0"
            >
              <span>Explore all 6 core services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => {
              const Icon = serviceIconMap[service.icon] || Activity;
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
                      <span>View Service Protocol</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Medical Specialties pSEO Showcase */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Specialized Medical Coding Precision
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Specialty-Specific Billing Protocols
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Generalist billing companies treat every claim identically, resulting in chronic Modifier-25 rejections, LCD denials, and lost revenue. We configure scrubbers specifically for each medical specialty.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialtiesData.map((spec) => (
              <Link
                key={spec.slug}
                href={`/specialties/${spec.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs hover:border-sky-300 hover:bg-white hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-sky-100/80 px-2.5 py-1 text-xs font-bold text-sky-900">
                      <Stethoscope className="h-3.5 w-3.5" />
                      <span>{spec.shortName}</span>
                    </div>
                    <span className="text-xs font-semibold text-rose-600">
                      Natl Denial: {spec.denialRateNational}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                    {spec.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {spec.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {spec.summary}
                  </p>

                  <div className="mt-4 rounded-xl bg-white p-3 border border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Common CPT Hotspots:
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {spec.keyCptCodes.map((c, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-700"
                        >
                          {c.code}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-3 border-t border-slate-200/70 text-xs font-bold text-sky-900 group-hover:text-sky-700">
                  <span>View Specialty Billing Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/specialties"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <span>Explore All Medical Specialties</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Dedicated Free 10-Claim Audit CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-sky-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Zero Risk • Mutual BAA Signed First
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to Uncover Where Your Revenue Is Leaking?
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Send us 10 redacted explanation of benefits (EOBs) or let us audit 10 aging claims inside your clearinghouse. We pinpoint the exact root cause of your denials within 48 business hours.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Line-by-Line CPT Forensic Report</h4>
                    <p className="text-xs text-slate-400">Detailed breakdown of modifier mismatches, missing clinical data, and medical necessity triggers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Recoverable Cash Quantification</h4>
                    <p className="text-xs text-slate-400">Concrete dollar amount of trapped revenue recoverable within standard payer appeal windows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">100% Free & No Long-Term Obligation</h4>
                    <p className="text-xs text-slate-400">Zero software switch. You review our findings and decide whether to partner.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sky-400" />
                  <div>
                    <span className="text-xs text-slate-400">Direct Physician Inquiry Line:</span>
                    <p className="text-base font-bold text-white">(209)-671-6993</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Clear Answers for Practice Leadership
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Transparent answers regarding our BAA compliance, EHR integration, and contingency models.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center rounded-2xl bg-sky-50 border border-sky-200 p-8">
            <h3 className="text-lg font-bold text-sky-950">
              Have a question specific to your practice’s payer mix or EHR?
            </h3>
            <p className="mt-2 text-sm text-sky-800">
              Our Richmond, VA revenue cycle directors are available to speak directly with clinic owners and practice managers.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+12096716993","
                className="inline-flex items-center gap-2 rounded-xl bg-sky-900 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-sky-800 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call (209)-671-6993 </span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-white px-6 py-3 text-sm font-bold text-sky-900 shadow-2xs hover:bg-sky-50 transition-colors"
              >
                <span>Send Us an Inquiry</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
