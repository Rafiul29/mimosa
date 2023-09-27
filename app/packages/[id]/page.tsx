import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamoura | package details',
};

export default function PackageDatailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
