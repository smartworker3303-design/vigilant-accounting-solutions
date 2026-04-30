import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://vasbpo.net'),
  title: {
    default: "Vigilant Accounting Solutions | Top Accounting Service",
    template: "%s | Vigilant Accounting Solutions"
  },
  description: "Vigilant Accounting Solutions is a premier accounting service providing expert bookkeeping, corporate tax preparation, and CFO services for modern businesses.",
  keywords: ["Vigilant Accounting Solutions", "Vigilant Accounting", "Vigilant Accounts", "Vigilant", "Vigilant Accounting Services", "top accounting service", "bookkeeping", "tax preparation", "CFO services", "financial management", "accountant", "corporate tax"],
  openGraph: {
    title: "Vigilant Accounting Solutions | Top Accounting Service",
    description: "Vigilant Accounting Solutions is a premier accounting service providing expert bookkeeping, corporate tax preparation, and CFO services for modern businesses.",
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
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-icon.png',
    },
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
    "alternateName": ["Vigilant Accounting", "Vigilant Accounting Services", "Vigilant Accounts", "Vigilant"],
    "image": "https://vasbpo.net/icon.png",
    "logo": "https://vasbpo.net/icon.png",
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
