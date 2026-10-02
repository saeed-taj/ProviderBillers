import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export function WhoWeServe() {
  const practiceTypes = [
    {
      title: "Independent Physicians",
      description: "Solo & small partner practices needing maximized cash flow without the high overhead of in-house billing salaries.",
      icon: "/assets/images/physician1.png",
      tag: "Private Practice",
      highlight: "Eliminates staffing turnover",
    },
    {
      title: "Specialty Surgical Clinics",
      description: "High-dollar operative cases, 90-day global surgery periods, assistant surgeon modifiers, and implant reconciliation.",
      icon: "/assets/images/surgoen_color.png",
      tag: "Surgical Groups",
      highlight: "Global period audit defense",
    },
    {
      title: "Hospitals & Health Systems",
      description: "Complex split professional/technical billing (26/TC), facility credentialing, and multi-facility clearinghouse batching.",
      icon: "/assets/images/hospitals.png",
      tag: "Health Systems",
      highlight: "UB-04 & CMS-1500 coordination",
    },
    {
      title: "Ambulatory Surgery Centers",
      description: "ASC facility fees, Medicare pass-through biologics, pre-certifications, and specialized surgical tray reimbursement.",
      icon: "/assets/images/hospital-bed.png",
      tag: "ASC Facilities",
      highlight: "High-dollar claim recovery",
    },
    {
      title: "Urgent Care & Emergency",
      description: "Rapid high-volume eligibility verification, STAT appeals, in-office lab billing (Modifier-QW), and patient copay posting.",
      icon: "/assets/images/ambulance.png",
      tag: "Walk-in & STAT",
      highlight: "Real-time eligibility verification",
    },
    {
      title: "Multi-Specialty Networks",
      description: "Centralized RCM for combined cardiology, podiatry, orthopedics, and internal medicine under unified tax IDs.",
      icon: "/assets/images/logo1.png",
      tag: "Group Practice",
      highlight: "Consolidated financial reporting",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
            Tailored Practice Solutions
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Who We Serve Across the US Healthcare System
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Whether you operate an independent private clinic or oversee a multi-specialty surgical center, our billing workflows match your clinical scale.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceTypes.map((type, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-sky-300 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="relative h-14 w-14 rounded-2xl bg-sky-50/80 p-2.5 flex items-center justify-center border border-sky-100 group-hover:bg-sky-100 transition-colors">
                    <Image
                      src={type.icon}
                      alt={type.title}
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                    {type.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {type.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {type.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50/70 px-3 py-1.5 rounded-lg border border-emerald-100">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>{type.highlight}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-900 hover:text-sky-700"
                >
                  <span>Request Practice Audit</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
