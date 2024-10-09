import TermsOfService from '@/components/terms-of-service'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'We&apos;re on a mission to transform product development by building highly functional MVPs at a fraction of the cost and time.',
}

export default function TermsOfServicePage() {
  return (
    <main className="overflow-hidden">
      <TermsOfService />
    </main>
  )
}
