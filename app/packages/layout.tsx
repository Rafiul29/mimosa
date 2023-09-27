import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | packages',
};

export default function PackageDatailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
