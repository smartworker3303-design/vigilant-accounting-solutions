import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to Vigilant Accounting Solutions for expert financial strategy and consultation.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: '/contact',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
