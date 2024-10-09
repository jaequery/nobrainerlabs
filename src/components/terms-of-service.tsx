import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Our terms and conditions for using Nobrainer Labs services.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Terms of Service</Heading>
      <Lead className="mt-6 max-w-3xl">
        Welcome to Nobrainer Labs. These Terms of Service govern your use of our
        website and services. By accessing or using our services, you agree to
        be bound by these terms.
      </Lead>
    </Container>
  )
}

function TermsOfServiceContent() {
  return (
    <Container className="mb-32 mt-16">
      <div className="prose prose-gray max-w-none">
        <Subheading>Acceptance of Terms</Subheading>
        <p className="mb-12">
          By accessing or using our services, you agree to be bound by these
          Terms of Service and all applicable laws and regulations. If you do
          not agree with any part of these terms, you may not use our services.
        </p>

        <Subheading>Use of Services</Subheading>
        <p className="mb-12">
          You agree to use our services only for lawful purposes and in
          accordance with these Terms of Service. You are prohibited from
          violating or attempting to violate the security of the website.
        </p>

        <Subheading>Intellectual Property</Subheading>
        <p className="mb-12">
          The content, features, and functionality of our website are owned by
          Nobrainer Labs and are protected by international copyright,
          trademark, patent, trade secret, and other intellectual property laws.
        </p>

        <Subheading>User Accounts</Subheading>
        <p className="mb-12">
          When you create an account with us, you must provide accurate and
          complete information. You are solely responsible for the activity that
          occurs on your account.
        </p>

        <Subheading>Limitation of Liability</Subheading>
        <p className="mb-12">
          Nobrainer Labs shall not be liable for any indirect, incidental,
          special, consequential or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible
          losses.
        </p>

        <Subheading>Changes to Terms</Subheading>
        <p className="mb-12">
          We reserve the right to modify or replace these Terms of Service at
          any time. It is your responsibility to check these Terms periodically
          for changes.
        </p>

        <Subheading>Contact Us</Subheading>
        <p className="mb-12">
          If you have any questions about these Terms of Service, please contact
          us at legal@nobrainerlabs.com.
        </p>
      </div>
    </Container>
  )
}

export default function TermsOfService() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <TermsOfServiceContent />
      <Footer />
    </main>
  )
}
