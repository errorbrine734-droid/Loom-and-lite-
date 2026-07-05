import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loom And Lite",
  description: "Where Imagination Meets Innovation."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
