"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, ShieldCheck, Loader2, AlertCircle, ArrowRight, Lock } from "lucide-react";
import { AuditRequestInput, AuditRequestSchema } from "@/lib/validators/audit-schema";

interface AuditFormProps {
  initialSpecialty?: string;
  initialMonthlyBilling?: "Under $50k" | "$50k - $100k" | "$100k - $250k" | "$250k+";
  initialPrimaryIssue?: "High Denial Rate" | "Uncollected Aging AR (>90 days)" | "Staffing / Understaffed" | "Credentialing Delays" | "Full Billing Transition";
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export function AuditForm({
  initialSpecialty = "",
  initialMonthlyBilling = "$50k - $100k",
  initialPrimaryIssue = "High Denial Rate",
  title = "Request Your Free 10-Claim Denial Audit",
  subtitle = "Zero upfront cost. Send us 10 redacted explanation-of-benefits (EOBs) or let us audit 10 aging claims inside your clearinghouse. Our AAPC-certified auditors pinpoint root-cause leakage within 48 hours.",
  compact = false,
}: AuditFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditRequestInput>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      practiceName: "",
      specialty: initialSpecialty,
      estimatedMonthlyBilling: initialMonthlyBilling,
      primaryIssue: initialPrimaryIssue,
      notes: "",
    },
  });

  const onSubmit = async (data: AuditRequestInput) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Validate client-side first
      const validated = AuditRequestSchema.parse(data);

      const response = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit audit request. Please try again.");
      }

      setSubmitSuccess(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please contact us directly at (209) 671-6993.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/90 p-8 text-center shadow-lg sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          Audit Request Confirmed
        </h3>
        <p className="mt-2 text-base text-slate-600">
          Thank you for trusting Provider Billers. A Senior Medical Billing Director and AAPC-Certified Auditor will review your practice profile and contact you within <strong>4 business hours</strong>.
        </p>

        <div className="mt-6 rounded-xl border border-emerald-200/80 bg-white p-6 text-left shadow-sm">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800">
            What Happens Next:
          </h4>
          <ol className="mt-3 space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                1
              </span>
              <span>
                <strong>Confidential BAA / NDA:</strong> We dispatch our standard HIPAA Business Associate Agreement for mutual electronic signature.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                2
              </span>
              <span>
                <strong>10-Claim Forensic Audit:</strong> You upload 10 sample denied or aged remits via our secure portal, or provide read-only clearinghouse access.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                3
              </span>
              <span>
                <strong>Actionable Recovery Report:</strong> We present a line-by-line breakdown detailing the exact CPT/ICD-10 root causes and recoverable cash.
              </span>
            </li>
          </ol>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="text-xs font-semibold text-sky-900 hover:underline"
          >
            Submit another inquiry
          </button>
          <span className="hidden text-slate-300 sm:inline">•</span>
          <a
            href="tel:+12096716993"
            className="text-xs font-semibold text-slate-700 hover:text-sky-900"
          >
            Need urgent assistance? Call (209) 671-6993
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
      {!compact && (
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-900">
            <ShieldCheck className="h-4 w-4 text-sky-700" />
            100% Risk-Free B2B Evaluation
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            {subtitle}
          </p>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Error</p>
            <p className="text-rose-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Dr. Sarah Jenkins or John Smith"
              {...register("fullName")}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
                errors.fullName ? "border-rose-400 bg-rose-50/40" : "border-slate-300 bg-white"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Practice Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              placeholder="director@clinicname.com"
              {...register("email")}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
                errors.email ? "border-rose-400 bg-rose-50/40" : "border-slate-300 bg-white"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Direct Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="(555) 000-0000"
              {...register("phone")}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
                errors.phone ? "border-rose-400 bg-rose-50/40" : "border-slate-300 bg-white"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Practice Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Practice / Clinic Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Richmond Foot & Ankle Clinic"
              {...register("practiceName")}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
                errors.practiceName ? "border-rose-400 bg-rose-50/40" : "border-slate-300 bg-white"
              }`}
            />
            {errors.practiceName && (
              <p className="mt-1 text-xs text-rose-600">{errors.practiceName.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {/* Specialty */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Medical Specialty <span className="text-rose-500">*</span>
            </label>
            <select
              {...register("specialty")}
              className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
                errors.specialty ? "border-rose-400 bg-rose-50/40" : "border-slate-300 bg-white"
              }`}
            >
              <option value="">Select Specialty</option>
              <option value="Podiatry">Podiatry & Foot Surgery</option>
              <option value="Cardiology">Cardiology & Vascular</option>
              <option value="Mental & Behavioral Health">Mental & Behavioral Health</option>
              <option value="Orthopedic Surgery">Orthopedic Surgery</option>
              <option value="Family Practice / Internal Medicine">Family Practice / Internal Medicine</option>
              <option value="Neurology">Neurology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Pain Management">Pain Management</option>
              <option value="Multi-Specialty / Other">Multi-Specialty / Other</option>
            </select>
            {errors.specialty && (
              <p className="mt-1 text-xs text-rose-600">{errors.specialty.message}</p>
            )}
          </div>

          {/* Monthly Collections Tier */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Monthly Collections <span className="text-rose-500">*</span>
            </label>
            <select
              {...register("estimatedMonthlyBilling")}
              className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
                errors.estimatedMonthlyBilling ? "border-rose-400 bg-rose-50/40" : "border-slate-300 bg-white"
              }`}
            >
              <option value="Under $50k">Under $50k / month</option>
              <option value="$50k - $100k">$50k - $100k / month</option>
              <option value="$100k - $250k">$100k - $250k / month</option>
              <option value="$250k+">$250k+ / month</option>
            </select>
            {errors.estimatedMonthlyBilling && (
              <p className="mt-1 text-xs text-rose-600">{errors.estimatedMonthlyBilling.message}</p>
            )}
          </div>

          {/* Primary Issue */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Primary Bottleneck <span className="text-rose-500">*</span>
            </label>
            <select
              {...register("primaryIssue")}
              className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 ${
                errors.primaryIssue ? "border-rose-400 bg-rose-50/40" : "border-slate-300 bg-white"
              }`}
            >
              <option value="High Denial Rate">High Denial Rate</option>
              <option value="Uncollected Aging AR (>90 days)">Uncollected Aging AR (&gt;90 days)</option>
              <option value="Staffing / Understaffed">Staffing / Understaffed</option>
              <option value="Credentialing Delays">Credentialing Delays</option>
              <option value="Full Billing Transition">Full Billing Transition</option>
            </select>
            {errors.primaryIssue && (
              <p className="mt-1 text-xs text-rose-600">{errors.primaryIssue.message}</p>
            )}
          </div>
        </div>

        {/* Notes (Optional) */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Current EHR / Clearinghouse or Specific Denial Concerns (Optional)
          </label>
          <textarea
            rows={compact ? 2 : 3}
            placeholder="e.g., We use AthenaHealth. Seeing recurring Modifier-25 rejections from UnitedHealthcare and have $140k in 90+ day AR."
            {...register("notes")}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          ></textarea>
        </div>

        {/* Submit Button & Security Note */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-900 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-sky-800 disabled:opacity-60 active:scale-[0.99]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Verifying Request & Preparing Audit Protocol...</span>
              </>
            ) : (
              <>
                <span>Submit 10-Claim Audit Request ($0 Upfront)</span>
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Lock className="h-3.5 w-3.5 text-slate-400" />
            <span>
              100% HIPAA Compliant. Protected by 256-bit TLS encryption. Mutual BAA executed before any PHI is inspected.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
