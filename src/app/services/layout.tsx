import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Accounting & Corporate Services",
  description: "Explore our full suite of professional services including accounting, payroll management, tax reporting, virtual monitoring, and complete fraud protection.",
  keywords: ["Accounting Services", "Payroll Management", "Tax Management", "Vendor Management", "Fraud Protection", "Vigilant Accounting Solutions Services", "Corporate Services"],
  alternates: {
    canonical: "https://vasbpo.net/services",
  },
  openGraph: {
    title: "Professional Accounting & Corporate Services | Vigilant Accounting Solutions",
    description: "Explore our full suite of professional services including accounting, payroll management, tax reporting, virtual monitoring, and complete fraud protection.",
    url: "https://vasbpo.net/services",
    type: "website",
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
