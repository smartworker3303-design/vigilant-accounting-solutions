import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter", // Variable matches standard globals for simplicity, but using montserrat
});

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
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
