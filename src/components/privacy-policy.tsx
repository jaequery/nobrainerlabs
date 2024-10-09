import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Our commitment to protecting your privacy and personal information.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Privacy Policy</Heading>
      <Lead className="mt-6 max-w-3xl">
        At Nobrainer Labs, we are committed to protecting your privacy and
        personal information. This policy outlines how we collect, use, and
        safeguard your data.
      </Lead>
    </Container>
  )
}

function PolicyContent() {
  return (
    <Container className="mt-16 mb-32">
      <div className="prose prose-gray max-w-none ">
        <Subheading>Information We Collect</Subheading>
        <p className="mb-12">
          We collect information you provide directly to us, such as when you
          create an account, request a consultation, or communicate with us.
          This may include your name, email address, and any other information
          you choose to provide.
        </p>

        <Subheading>How We Use Your Information</Subheading>
        <p className="mb-12">
          We use the information we collect to provide, maintain, and improve
          our services, to communicate with you, and to comply with legal
          obligations.
        </p>

        <Subheading>Data Security</Subheading>
        <p className="mb-12">
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized or unlawful
          processing, accidental loss, destruction, or damage.
        </p>

        <Subheading>Third-Party Services</Subheading>
        <p className="mb-12">
          We may use third-party services that collect, monitor and analyze this
          type of information in order to increase our Service&apos;s functionality.
          These third-party service providers have their own privacy policies
          addressing how they use such information.
        </p>

        <Subheading>Your Rights</Subheading>
        <p className="mb-12">
          You have the right to access, correct, or delete your personal
          information. You may also have the right to restrict or object to
          certain processing of your data.
        </p>

        <Subheading>Changes to This Policy</Subheading>
        <p className="mb-12">
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new privacy policy on this page.
        </p>

        <Subheading>Contact Us</Subheading>
        <p className="mb-12">
          If you have any questions about this Privacy Policy, please contact us
          at privacy@nobrainerlabs.com.
        </p>
      </div>
    </Container>
  )
}

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PolicyContent />
      <Footer />
    </main>
  )
}
