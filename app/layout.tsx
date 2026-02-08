import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Portal for Jira Service Management | Stop Losing $156K/Year on Bad Tickets",
  description: "AI-powered conversational interface for JSM portals. Users describe what they need in any language — AI creates perfect tickets. Reduce misrouting by 90%, eliminate portal abandonment, break language barriers.",
  keywords: "Jira Service Management, AI, chatbot, JSM portal, ITSM, ticket automation, multilingual support, voice input, Atlassian, Forge",
  openGraph: {
    title: "AI Portal — Your JSM Portal Costs More Than You Think",
    description: "23% of tickets go to the wrong team. 52% of users give up on self-service. AI Portal fixes both. Calculate your ROI.",
    type: "website",
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
