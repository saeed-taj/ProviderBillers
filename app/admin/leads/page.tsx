import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import {
  Users,
  Phone,
  Mail,
  Building,
  Calendar,
  AlertCircle,
  FileCheck2,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Audit Requests & Leads Inbox | Provider Billers",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

interface Submission {
  id: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  practiceName: string;
  specialty: string;
  estimatedMonthlyBilling: string;
  primaryIssue: string;
  notes?: string;
  status: string;
}

async function getSubmissions(): Promise<Submission[]> {
  try {
    const submissionsFilePath = path.join(process.cwd(), "data", "submissions.json");
    const fileContent = await fs.readFile(submissionsFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}

export default async function AdminLeadsPage() {
  const submissions = await getSubmissions();

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-900 hover:underline"
              >
                <ArrowLeft className="h-3 w-3" /> Back to Home
              </Link>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl flex items-center gap-3">
              <Users className="h-7 w-7 text-sky-900" />
              <span>Doctor Audit Requests & Lead Inbox</span>
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Live database of all practice leads who submitted the 10-Claim Audit request form.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              {submissions.length} Total Submission{submissions.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        {/* Lead Delivery Explanation Card */}
        <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50/80 p-5 text-sm text-sky-950">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-sky-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">How Lead Data is Received:</p>
              <ul className="mt-1.5 space-y-1 text-xs text-sky-900">
                <li>
                  • <strong>Email Delivery:</strong> Dispatched instantly to <code>support@providerbillers.com</code> (and an automatic confirmation sent to the doctor).
                </li>
                <li>
                  • <strong>Permanent Storage:</strong> Every lead is safely saved directly on the server in <code>data/submissions.json</code> so no lead is ever lost.
                </li>
                <li>
                  • <strong>Instant Dashboard:</strong> You can view all incoming leads right here on this page at any time.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leads Table or Empty State */}
        <div className="mt-8">
          {submissions.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-xs">
              <FileCheck2 className="mx-auto h-12 w-12 text-slate-400" />
              <h3 className="mt-3 text-lg font-bold text-slate-900">No Audit Requests Yet</h3>
              <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
                When a doctor or practice manager fills out the &ldquo;Submit Practice Details for Audit&rdquo; form on your site, it will immediately appear here and send an email alert to <code>support@providerbillers.com</code>.
              </p>
              <div className="mt-6">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-sky-800"
                >
                  Test Audit Form Now
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((lead) => {
                const dateStr = new Date(lead.submittedAt).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                });

                return (
                  <div
                    key={lead.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-sky-300 transition-colors"
                  >
                    <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-bold text-sky-900">
                          {lead.specialty}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-slate-400" />
                          {dateStr}
                        </span>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                        {lead.status}
                      </span>
                    </div>

                    <div className="p-6 grid gap-6 md:grid-cols-3">
                      {/* Doctor / Contact Info */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Contact Info
                        </span>
                        <h4 className="text-base font-bold text-slate-900">{lead.fullName}</h4>
                        <div className="space-y-1 text-xs text-slate-600">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5 text-sky-800" />
                            <a href={`mailto:${lead.email}`} className="text-sky-900 hover:underline">
                              {lead.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 text-emerald-700" />
                            <a href={`tel:${lead.phone}`} className="font-semibold text-slate-800 hover:underline">
                              {lead.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Practice Info */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Practice Profile
                        </span>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-slate-400" />
                          <h4 className="text-base font-bold text-slate-900">{lead.practiceName}</h4>
                        </div>
                        <div className="text-xs text-slate-600 space-y-1">
                          <p>
                            Monthly Billing: <strong className="text-slate-800">{lead.estimatedMonthlyBilling}</strong>
                          </p>
                          <p>
                            Primary Pain Point: <strong className="text-rose-700">{lead.primaryIssue}</strong>
                          </p>
                        </div>
                      </div>

                      {/* Notes / Action */}
                      <div className="space-y-2 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Notes / Context
                          </span>
                          <p className="text-xs text-slate-700 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100 mt-1">
                            {lead.notes || "No additional notes provided by prospect."}
                          </p>
                        </div>

                        <div className="pt-2 flex items-center gap-3">
                          <a
                            href={`tel:${lead.phone}`}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500"
                          >
                            <Phone className="h-3 w-3" /> Call Doctor
                          </a>
                          <a
                            href={`mailto:${lead.email}?subject=10-Claim%20Denial%20Audit%20-%20Provider%20Billers%20LLC`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                          >
                            <Mail className="h-3 w-3" /> Email BAA
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
