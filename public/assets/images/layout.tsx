import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.providerbillers.com"),
  title: {
    default: "Provider Billers | US Medical Billing, RCM & Aged AR Recovery",
    template: "%s | Provider Billers",
  },
  description:
    "Specialized US medical billing, CPT/ICD-10 coding, credentialing, and zero-risk aging AR recovery for private healthcare practices.",
  keywords: [
    "Medical Billing Services",
    "Revenue Cycle Management",
    "RCM Agency",
    "Aged AR Recovery",
    "Denial Management",
    "AAPC Certified Medical Coding",
    "Provider Credentialing",
    "Podiatry Billing",
    "Cardiology Billing",
    "Mental Health Billing",
    "Orthopedic Billing",
    "Richmond VA Medical Billing",
  ],
  authors: [{ name: "Provider Billers LLC" }],
  creator: "Provider Billers LLC",
  publisher: "Provider Billers LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.providerbillers.com",
    siteName: "Provider Billers LLC",
    title: "Provider Billers | US Medical Billing, RCM & Aged AR Recovery",
    description:
      "Specialized US medical billing, CPT/ICD-10 coding, credentialing, and zero-risk aging AR recovery for private healthcare practices.",
    images: [
      {
        url: "https://www.providerbillers.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Provider Billers - US Medical Billing & RCM Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Provider Billers | US Medical Billing, RCM & Aged AR Recovery",
    description:
      "Specialized US medical billing, CPT/ICD-10 coding, credentialing, and zero-risk aging AR recovery for private healthcare practices.",
    images: ["https://www.providerbillers.com/og-image.png"],
  },
   icons: {
    // 1. Standard browser tab icons (browser downloads the one it needs)
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }, // Universal fallback
    ],
    // 2. Apple iOS Home Screen icon
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // 3. Connects the manifest file containing your 192px and 512px icons
  manifest: '/site.webmanifest', // or '/manifest.json' depending on your filename

};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Provider Billers LLC",
  "url": "https://www.providerbillers.com",
  "logo": "https://www.providerbillers.com",
  "image": "https://www.providerbillers.com/og-image.png",
  "telephone": "+1 (209) 671-6993",
  "email": "support@providerbillers.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8407 Mayland Dr",
    "addressLocality": "Richmond",
    "addressRegion": "VA",
    "postalCode": "23294",
    "addressCountry": "US"
  },
  "areaServed": "US",
  "priceRange": "$$",
  "description": "Specialized US medical billing, CPT/ICD-10 coding, credentialing, and zero-risk aging AR recovery for private healthcare practices."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
        <script
          id="schema-org-jsonld"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
