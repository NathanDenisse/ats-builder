import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riiken — ATS pour les PME françaises",
  description:
    "Le premier ATS avec Indeed Apply intégré, conçu pour les PME françaises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
