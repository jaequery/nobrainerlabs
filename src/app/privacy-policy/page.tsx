import PrivacyPolicy from '@/components/privacy-policy'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'We&apos;re on a mission to transform product development by building highly functional MVPs at a fraction of the cost and time.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden">
      <PrivacyPolicy />
    </main>
  )
}
