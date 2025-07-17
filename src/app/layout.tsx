import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FitZone Gym - Transform Your Body, Transform Your Life',
  description: 'Premium fitness center with state-of-the-art equipment, expert trainers, and a supportive community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}