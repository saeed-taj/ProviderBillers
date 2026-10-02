import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      {/* Risk-Free Offer Banner */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Zero Financial Risk Guarantee
            </span>
            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Stop Unnecessary Write-offs. Test Us with a 10-Claim Denial Audit.
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              No software switch. No disruption to your in-house staff. Just pure revenue discovery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg hover:bg-sky-400 transition-colors"
            >
              <span>Claim Free 10-Claim Audit</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+12026600030"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              <Phone className="h-4 w-4 text-sky-400" />
              <span>(202) 660-0030</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-48 brightness-0 invert">
                <Image
                  src="/logo.png"
                  alt="Provider Billers LLC"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Provider Billers LLC is a premier US healthcare revenue cycle management (RCM) and medical billing enterprise. We empower private practices, specialty surgical clinics, and healthcare networks to maximize cash collections, eliminate chronic claim denials, and liquidate aging AR with zero upfront risk.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-sky-400 mt-1 shrink-0" />
                <span className="text-slate-300">
                  8407 Mayland Dr, Richmond, VA 23294, United States
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="tel:+12026600030" className="text-slate-300 hover:text-white transition-colors">
                  (202) 660-0030
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="mailto:support@providerbillers.com" className="text-slate-300 hover:text-white transition-colors">
                  support@providerbillers.com
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>100% HIPAA Compliant • AAPC & AHIMA Certified Coders</span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              RCM Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services/revenue-cycle-management" className="hover:text-white transition-colors">
                  End-to-End RCM
                </Link>
              </li>
              <li>
                <Link href="/services/aged-ar-recovery" className="hover:text-white text-rose-400 transition-colors">
                  Aged AR Recovery (&gt;90d)
                </Link>
              </li>
              <li>
                <Link href="/services/denial-management" className="hover:text-white transition-colors">
                  Denial Management & Appeals
                </Link>
              </li>
              <li>
                <Link href="/services/medical-coding-auditing" className="hover:text-white transition-colors">
                  Certified Coding & Auditing
                </Link>
              </li>
              <li>
                <Link href="/services/provider-credentialing" className="hover:text-white transition-colors">
                  Provider Credentialing
                </Link>
              </li>
              <li>
                <Link href="/services/patient-intake-prior-authorization" className="hover:text-white transition-colors">
                  Prior Auth & Front Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Medical Specialties
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/specialties/podiatry" className="hover:text-white transition-colors">
                  Podiatry & Foot Surgery
                </Link>
              </li>
              <li>
                <Link href="/specialties/cardiology" className="hover:text-white transition-colors">
                  Cardiology & Vascular
                </Link>
              </li>
              <li>
                <Link href="/specialties/mental-health" className="hover:text-white transition-colors">
                  Mental & Behavioral Health
                </Link>
              </li>
              <li>
                <Link href="/specialties/orthopedics" className="hover:text-white transition-colors">
                  Orthopedic Surgery
                </Link>
              </li>
              <li>
                <Link href="/specialties/family-practice" className="hover:text-white transition-colors">
                  Family Practice & Internal Med
                </Link>
              </li>
              <li>
                <Link href="/specialties/neurology" className="hover:text-white transition-colors">
                  Neurology & EMG
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Practice Resources
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/free-audit" className="text-emerald-400 font-semibold hover:underline">
                  Free 10-Claim Denial Audit
                </Link>
              </li>
              <li>
                <Link href="/services/aged-ar-recovery" className="hover:text-white transition-colors">
                  Contingency Fee Model
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact RCM Support
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500 block pt-3">
                  Operating Hours:<br />
                  Monday – Friday<br />
                  8:00 AM – 6:00 PM EST
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} Provider Billers LLC. All rights reserved. Richmond, VA.
          </p>
          <div className="flex items-center gap-6">
            <span>HIPAA Compliant</span>
            <span>CMS-1500 / UB-04 Compliant</span>
            <span>AAPC Certified Coders</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
