import { z } from "zod";

export const AuditRequestSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Must be a valid business email address"),
  phone: z.string().min(10, "Valid US phone number required"),
  practiceName: z.string().min(2, "Practice or clinic name required"),
  specialty: z.string().min(1, "Please select your medical specialty"),
  estimatedMonthlyBilling: z.enum([
    "Under $50k",
    "$50k - $100k",
    "$100k - $250k",
    "$250k+",
  ]),
  primaryIssue: z.enum([
    "High Denial Rate",
    "Uncollected Aging AR (>90 days)",
    "Staffing / Understaffed",
    "Credentialing Delays",
    "Full Billing Transition",
  ]),
  notes: z.string().optional(),
});

export type AuditRequestInput = z.infer<typeof AuditRequestSchema>;
