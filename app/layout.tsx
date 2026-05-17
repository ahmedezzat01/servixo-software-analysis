import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Srvixo SA — System Analysis Project",
  description:
    "Service Marketplace System Analysis — A centralized platform connecting clients with skilled workers. System Analysis Project 2025-2026.",
  keywords: [
    "Srvixo",
    "Service Marketplace",
    "System Analysis",
    "Software Engineering",
    "Use Cases",
    "SDLC",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
