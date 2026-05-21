import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Srvixo SA — Software Analysis and Design Project",
  description:
    "Service Marketplace Software Analysis and Design — A centralized platform connecting clients with skilled workers. Software Analysis and Design Project 2025-2026.",
  keywords: [
    "Srvixo",
    "Service Marketplace",
    "Software Analysis and Design",
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
