import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { SiteShell } from "@/components/SiteShell";
import { AnalyticsPlaceholders } from "@/components/AnalyticsPlaceholders";

export const metadata: Metadata = {
  title: "ZytmossAI | AI Automation Consulting & Custom Workflows",
  description:
    "We help SMEs, e‑commerce brands, agencies, and startups automate repetitive work with AI and reduce operational costs by up to 40%.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "ZytmossAI | AI Automation Consulting",
    description:
      "Custom AI automation, workflow optimization, and AI integrations that reduce manual work and unlock scalable growth.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AnalyticsPlaceholders />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

