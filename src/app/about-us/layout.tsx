import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Vigilant Accounting Solutions, our mission, and our commitment to elevating modern businesses.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    url: '/about-us',
  }
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
