# Provider Billers LLC - US Medical Billing & Revenue Cycle Management (RCM)

Enterprise-grade, SEO-optimized Next.js 15+ App Router application for **Provider Billers LLC** (`https://www.providerbillers.com`).

Headquartered in Richmond, VA, Provider Billers specializes in US Medical Billing, AAPC-certified CPT/ICD-10 coding, contingency-based aged AR (>90 days) recovery ($0 upfront), provider credentialing, and prior authorization management for private practices, healthcare clinics, and ambulatory surgery centers.

## Architecture & Features

- **Framework:** Next.js 15+ (App Router, React 19, React Server Components)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS + `lucide-react` icons
- **Form Validation:** React Hook Form + Zod (`lib/validators/audit-schema.ts`)
- **API Handler:** `/api/audit-request` with structured validation and Resend email notifications
- **Programmatic SEO (pSEO):** Dynamic routes under `/specialties/[slug]` driven by `data/specialties.json` (Podiatry, Cardiology, Mental Health, Orthopedics, Family Practice, Neurology)
- **Interactive Financial Tool:** Client-side Lost Revenue & Aged AR Leakage Estimator (`components/sections/ArCalculator.tsx`)
- **Structured Data:** Schema.org `ProfessionalService` JSON-LD in `app/layout.tsx`

## Core Risk-Free B2B Offers

1. **Free 10-Claim Denial Audit:** 48-hour SLA forensic analysis of 10 sample remits or aging claims ($0 cost, mutual HIPAA BAA signed first).
2. **Contingency Aged AR (>90 Days) Recovery:** $0 upfront fee; only pay when funds are collected and deposited into the practice's bank account.

## Headquarters Contact

- **Address:** 8407 Mayland Dr, Richmond, VA 23294, United States
- **Phone:** (202) 660-0030
- **Email:** support@providerbillers.com
