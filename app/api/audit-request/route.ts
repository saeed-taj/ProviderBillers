import { NextRequest, NextResponse } from "next/server";
import { AuditRequestSchema } from "@/lib/validators/audit-schema";
import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 2. Local Fallback Persistence (Works in local dev / server environments)
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
      // Non-blocking in serverless/Vercel environments (where filesystem is read-only)
      console.warn("Local storage write skipped or unavailable in serverless execution.");
    }

    // 3. Prepare Email Content
    const internalEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #1e293b;">
        <h2 style="color: #0369a1; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">
           NEW 10-CLAIM DENIAL AUDIT REQUEST
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px; font-weight: bold; width: 180px;">Practice Name:</td><td style="padding: 8px;">${leadData.practiceName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Contact Name:</td><td style="padding: 8px;">${leadData.fullName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${leadData.email}">${leadData.email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;"><a href="tel:${leadData.phone}">${leadData.phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Specialty:</td><td style="padding: 8px;">${leadData.specialty}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Monthly Billing:</td><td style="padding: 8px;">${leadData.estimatedMonthlyBilling}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Primary Issue:</td><td style="padding: 8px;">${leadData.primaryIssue}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Notes:</td><td style="padding: 8px;">${leadData.notes || "None provided"}</td></tr>
        </table>
      </div>
    `;

    const prospectEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #1e293b;">
        <h2 style="color: #0369a1;">We Have Received Your Audit Request</h2>
        <p>Dear ${leadData.fullName},</p>
        <p>Thank you for reaching out to Provider Billers regarding your <strong>${leadData.specialty}</strong> practice (<strong>${leadData.practiceName}</strong>).</p>
        <p>Our medical billing directors and certified auditors are currently reviewing your request. To maintain full compliance with HIPAA regulations, our team will send over a mutual Business Associate Agreement (BAA) and NDA before reviewing any claims data.</p>
        <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <strong style="color: #166534;">Audit Details Registered:</strong>
          <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #15803d;">
            <li>Target Focus: <strong>${leadData.primaryIssue}</strong></li>
            <li>Practice Scale: <strong>${leadData.estimatedMonthlyBilling} monthly billing</strong></li>
            <li>Response SLA: Within 4 business hours</li>
          </ul>
        </div>
        <p>Warm regards,<br /><strong>Provider Billers RCM Advisory Team</strong><br />8407 Mayland Dr, Richmond, VA 23294</p>
      </div>
    `;

    // 4. Dispatch via Resend SDK
    if (process.env.RESEND_API_KEY) {
      const [internalRes, prospectRes] = await Promise.all([
        resend.emails.send({
          from: "Provider Billers Audit <notifications@providerbillers.com>",
          to: ["support@providerbillers.com"],
          subject: `[NEW AUDIT REQUEST] ${leadData.practiceName} (${leadData.specialty})`,
          html: internalEmailHtml,
        }),
        resend.emails.send({
          from: "Provider Billers <support@providerbillers.com>",
          to: [leadData.email],
          subject: `Audit Request Confirmation - Provider Billers LLC`,
          html: prospectEmailHtml,
        }),
      ]);

      if (internalRes.error) {
        console.error("Resend Internal Email Error:", internalRes.error);
      }
      if (prospectRes.error) {
        console.error("Resend Prospect Email Error:", prospectRes.error);
      }
    } else {
      console.log("[SIMULATION MODE - NO RESEND API KEY SET]:", leadData);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Audit request registered successfully.",
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