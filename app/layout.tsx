import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Quiz Navigator",
  description: "Jump to any question instantly and reveal answers with flair.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid-backdrop" aria-hidden />
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
