
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Mimosa | Packages',
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <> {children}</>
}
