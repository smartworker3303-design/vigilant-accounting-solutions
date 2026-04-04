import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vigilant Accounting Solutions",
  description: "Professional accounting services tailored to your business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
