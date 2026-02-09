import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NODE_ENV === 'production' ? '/ai-portal-landing' : '';

export const metadata: Metadata = {
  title: "AI Portal for Jira Service Management | Stop Losing $156K/Year on Bad Tickets",
  description: "AI-powered conversational interface for JSM portals. Users describe what they need in any language — AI creates perfect tickets. Reduce misrouting by 90%, eliminate portal abandonment, break language barriers.",
  keywords: "Jira Service Management, AI, chatbot, JSM portal, ITSM, ticket automation, multilingual support, voice input, Atlassian, Forge",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
  openGraph: {
    title: "AI Portal for Jira Service Management",
    description: "23% of tickets go to the wrong team. 52% of users give up on self-service. AI Portal fixes both. Calculate your ROI.",
    type: "website",
    images: [`${basePath}/ai-portal-logo-200.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
