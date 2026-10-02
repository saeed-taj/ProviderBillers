"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  FileCheck2,
  RotateCcw,
  Activity,
  Award,
  Users,
  FileCode2,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setSpecialtiesOpen(false);
  }, [pathname]);

  const services = [
    {
      title: "End-to-End RCM",
      href: "/services/revenue-cycle-management",
      desc: "Full cycle billing, charge capture & payment posting",
      icon: Activity,
    },
    {
      title: "Aged AR Recovery (>90 Days)",
      href: "/services/aged-ar-recovery",
      desc: "Contingency liquidation with $0 upfront cost",
      icon: RotateCcw,
      badge: "Zero Risk",
    },
    {
      title: "Denial Management & Appeals",
      href: "/services/denial-management",
      desc: "Root-cause CARC/RARC dispute resolution",
      icon: ShieldCheck,
    },
    {
      title: "AAPC Certified Coding & Audits",
      href: "/services/medical-coding-auditing",
      desc: "CPT, ICD-10 & modifier compliance audits",
      icon: FileCode2,
    },
    {
      title: "Provider Credentialing",
      href: "/services/provider-credentialing",
      desc: "Commercial & Medicare PECOS payer enrollment",
      icon: Award,
    },
    {
      title: "Prior Auth & Front Office",
      href: "/services/patient-intake-prior-authorization",
      desc: "Insurance eligibility & pre-certifications",
      icon: Users,
    },
  ];

  const specialties = [
    { title: "Podiatry & Foot Surgery", href: "/specialties/podiatry" },
    { title: "Cardiology & Vascular", href: "/specialties/cardiology" },
    { title: "Mental & Behavioral Health", href: "/specialties/mental-health" },
    { title: "Orthopedic Surgery", href: "/specialties/orthopedics" },
    { title: "Family Practice & Internal Med", href: "/specialties/family-practice" },
    { title: "Neurology", href: "/specialties/neurology" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Notification Bar */}
      <div className="border-b border-sky-950/20 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>HIPAA Compliant & SOC-2 Audited Workflows</span>
            </span>
            <span className="hidden text-slate-400 md:inline">|</span>
            <span className="hidden text-slate-300 md:inline">
              HQ: Richmond, Virginia • Nationwide Coverage
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-300">
              Speak with a Senior RCM Director:
            </span>
            <a
              href="tel:+12026600030"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-sky-300 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-sky-400" />
              <span>(202) 660-0030</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ${scrolled ? "py-3" : "py-4"}`}>
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-44">
            <Image
              src="/logo.png"
              alt="Provider Billers LLC"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              pathname === "/" ? "text-sky-900 bg-sky-50" : "text-slate-700 hover:text-sky-900 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                pathname.startsWith("/services") ? "text-sky-900 bg-sky-50" : "text-slate-700 hover:text-sky-900 hover:bg-slate-50"
              }`}
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-96 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2">
                <div className="grid gap-1">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-sky-50/80"
                      >
                        <div className="mt-0.5 rounded-lg bg-sky-100 p-2 text-sky-900 group-hover:bg-sky-900 group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-slate-900 group-hover:text-sky-900">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-2 border-t border-slate-100 pt-2 text-center">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-900 hover:underline"
                  >
                    <span>View all services overview</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Specialties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSpecialtiesOpen(true)}
            onMouseLeave={() => setSpecialtiesOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                pathname.startsWith("/specialties") ? "text-sky-900 bg-sky-50" : "text-slate-700 hover:text-sky-900 hover:bg-slate-50"
              }`}
            >
              <span>Specialties</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {specialtiesOpen && (
              <div className="absolute left-0 top-full mt-1 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2">
                <div className="space-y-1">
                  {specialties.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-2 border-t border-slate-100 pt-2 text-center">
                  <Link
                    href="/specialties"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-900 hover:underline"
                  >
                    <span>Explore all medical specialties</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/services/aged-ar-recovery"
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-50 hover:text-rose-800 transition-colors"
          >
            Aged AR Recovery
          </Link>

          <Link
            href="/contact"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              pathname === "/contact" ? "text-sky-900 bg-sky-50" : "text-slate-700 hover:text-sky-900 hover:bg-slate-50"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-sky-800 transition-all active:scale-[0.98]"
          >
            <FileCheck2 className="h-4 w-4" />
            <span>Free 10-Claim Audit</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 shadow-xl">
          <div className="space-y-1">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50"
            >
              Home
            </Link>

            <div className="py-2">
              <span className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Services
              </span>
              <div className="mt-1 space-y-1">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-2">
              <span className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Specialties
              </span>
              <div className="mt-1 space-y-1">
                {specialties.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-50"
            >
              Contact Us
            </Link>

            <div className="pt-4">
              <Link
                href="/free-audit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-900 px-4 py-3 text-center text-sm font-bold text-white shadow"
              >
                <FileCheck2 className="h-4 w-4" />
                <span>Request Free 10-Claim Denial Audit</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
