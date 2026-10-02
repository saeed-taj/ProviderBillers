import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileCheck2 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-md">
        <span className="font-mono text-5xl font-black text-sky-900">404</span>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-2 text-sm text-slate-600">
          The requested page could not be located. You can navigate back to our homepage or request a complimentary audit.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-sky-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-sky-800 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/free-audit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <FileCheck2 className="h-4 w-4 text-emerald-600" />
            <span>Claim Free Audit</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
