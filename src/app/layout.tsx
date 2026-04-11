import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vigilant Accounting Solutions | Top Accounting Service",
    template: "%s | Vigilant Accounting Solutions"
  },
  description: "Vigilant Accounting Solutions is a premier accounting service providing expert bookkeeping, corporate tax preparation, and CFO services for modern businesses.",
  keywords: ["Vigilant Accounting Solutions", "accounting service", "top accounting service", "bookkeeping", "tax preparation", "CFO services", "financial management", "accountant", "corporate tax"],
  openGraph: {
    title: "Vigilant Accounting Solutions | Top Accounting Service",
    description: "Vigilant Accounting Solutions is a premier accounting service providing expert bookkeeping, corporate tax preparation, and CFO services for modern businesses.",
    url: "https://vasbpo.net",
    siteName: "Vigilant Accounting Solutions",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://vasbpo.net",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Vigilant Accounting Solutions",
    "image": "https://vasbpo.net/icon.jpg",
    "@id": "https://vasbpo.net",
    "url": "https://vasbpo.net",
    "description": "Vigilant Accounting Solutions is a premier accounting service providing expert bookkeeping, corporate tax preparation, and CFO services for modern businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
