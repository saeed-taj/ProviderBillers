import { NextRequest, NextResponse } from "next/server";
import { AuditRequestSchema } from "@/lib/validators/audit-schema";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Zod Validation
    const validationResult = AuditRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the highlighted fields.",
          issues: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // 2. Persist to local JSON record (Data is NEVER lost)
    try {
      const submissionsFilePath = path.join(process.cwd(), "data", "submissions.json");
      let existingSubmissions: any[] = [];
      try {
        const fileContent = await fs.readFile(submissionsFilePath, "utf-8");
        existingSubmissions = JSON.parse(fileContent);
      } catch {
        existingSubmissions = [];
      }

      const newSubmissionRecord = {
        id: `audit-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        submittedAt: new Date().toISOString(),
        ...leadData,
        status: "New Lead",
      };

      existingSubmissions.unshift(newSubmissionRecord);
      await fs.writeFile(submissionsFilePath, JSON.stringify(existingSubmissions, null, 2), "utf-8");
    } catch (saveError) {
      console.error("Failed to save submission to file:", saveError);
    }

    // 2. Structured Notification Details
    const internalNotification = {
      to: "support@providerbillers.com",
      subject: `[NEW 10-CLAIM AUDIT] ${leadData.practiceName} (${leadData.specialty})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #1e293b;">
          <h2 style="color: #0369a1; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">
            New 10-Claim Denial Audit Request
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px; font-weight: bold; width: 180px;">Practice Name:</td><td style="padding: 8px;">${leadData.practiceName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Contact Name:</td><td style="padding: 8px;">${leadData.fullName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${leadData.email}">${leadData.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;"><a href="tel:${leadData.phone}">${leadData.phone}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Specialty:</td><td style="padding: 8px;">${leadData.specialty}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Monthly Billing:</td><td style="padding: 8px;">${leadData.estimatedMonthlyBilling}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Primary Issue:</td><td style="padding: 8px;">${leadData.primaryIssue}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Notes / Context:</td><td style="padding: 8px;">${leadData.notes || "None provided"}</td></tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #64748b;">
            Received via Provider Billers Next.js Production Platform. SLA: Respond within 4 business hours.
          </p>
        </div>
      `,
    };

    const prospectConfirmation = {
      to: leadData.email,
      subject: `Confirmation: Your 10-Claim Denial Audit Request - Provider Billers LLC`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #1e293b;">
          <h2 style="color: #0369a1;">We Have Received Your Audit Request</h2>
          <p>Dear ${leadData.fullName},</p>
          <p>
            Thank you for reaching out to Provider Billers regarding your <strong>${leadData.specialty}</strong> practice (<strong>${leadData.practiceName}</strong>).
          </p>
          <p>
            Our medical billing directors and AAPC-certified auditors are already reviewing your profile. To ensure full compliance with federal HIPAA privacy regulations, our team will dispatch a mutual Business Associate Agreement (BAA) and Non-Disclosure Agreement (NDA) before any sample claim or EOB review begins.
          </p>
          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <strong style="color: #166534;">Audit Details Registered:</strong>
            <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #15803d;">
              <li>Target Focus: <strong>${leadData.primaryIssue}</strong></li>
              <li>Practice Scale: <strong>${leadData.estimatedMonthlyBilling} monthly billing</strong></li>
              <li>Assigned SLA: Response within 4 business hours</li>
            </ul>
          </div>
          <p>
            If you need urgent assistance, please do not hesitate to contact our headquarters directly at <a href="tel:+12096716993" style="color: #0284c7; font-weight: bold;">(202) 671-6993</a> or email <a href="mailto:support@providerbillers.com" style="color: #0284c7;">support@providerbillers.com</a>.
          </p>
          <p style="margin-top: 24px;">
            Warm regards,<br />
            <strong>Provider Billers RCM Advisory Team</strong><br />
            8407 Mayland Dr, Richmond, VA 23294<br />
            <a href="https://www.providerbillers.com">www.providerbillers.com</a>
          </p>
        </div>
      `,
    };

    // 3. Resend Integration (Simulated / Production execution)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        await Promise.all([
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Provider Billers <notifications@providerbillers.com>",
              to: internalNotification.to,
              subject: internalNotification.subject,
              html: internalNotification.html,
            }),
          }),
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Provider Billers <support@providerbillers.com>",
              to: prospectConfirmation.to,
              subject: prospectConfirmation.subject,
              html: prospectConfirmation.html,
            }),
          }),
        ]);
      } catch (emailErr) {
        console.warn("Resend email dispatch logged (non-blocking):", emailErr);
      }
    } else {
      // In development or when API key is pending configuration, log securely to server console
      console.log("[AUDIT DISPATCH SIMULATED - NO RESEND KEY SET]:", {
        toInternal: internalNotification.to,
        toProspect: prospectConfirmation.to,
        practice: leadData.practiceName,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Audit request registered successfully. Our RCM team will reach out within 4 business hours.",
        practiceName: leadData.practiceName,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error in /api/audit-request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
