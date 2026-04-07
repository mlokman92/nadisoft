export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="mb-10 border-b border-gray-light pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ocean">
            Legal
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ocean-dark sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base leading-7 text-gray">
            This Privacy Policy explains how Nadisoft collects, uses, and protects
            personal information when you visit our website or contact us.
          </p>
        </div>

        <div className="space-y-8 text-base leading-7 text-gray">
          <section>
            <h2 className="text-xl font-semibold text-ocean-dark">1. Information We Collect</h2>
            <p className="mt-3">
              We may collect information you voluntarily provide, such as your name,
              email address, phone number, company name, and any message you send to us.
              We may also collect limited technical information, including browser type,
              device information, and usage data, to help maintain and improve the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean-dark">2. How We Use Information</h2>
            <p className="mt-3">
              We use the information we collect to respond to inquiries, provide our
              services, improve our website, maintain security, and comply with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean-dark">3. Sharing of Information</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share information with
              trusted service providers that help us operate our website and business,
              or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean-dark">4. Data Retention</h2>
            <p className="mt-3">
              We retain personal information only for as long as necessary to fulfill
              the purposes described in this policy, unless a longer retention period is
              required by law or for legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean-dark">5. Cookies and Analytics</h2>
            <p className="mt-3">
              Our website may use cookies or similar technologies to improve performance,
              understand site traffic, and enhance your experience. You can control
              cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean-dark">6. Security</h2>
            <p className="mt-3">
              We take reasonable administrative, technical, and organizational measures
              to protect personal information. However, no method of transmission or
              storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean-dark">7. Your Rights</h2>
            <p className="mt-3">
              Depending on your location, you may have rights to access, correct, delete,
              or restrict the use of your personal information. To make a request, please
              contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ocean-dark">8. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a className="text-ocean hover:underline" href="mailto:nash@nadisoft.my">
                nash@nadisoft.my
              </a>{' '}
              or call{' '}
              <a className="text-ocean hover:underline" href="tel:+60174768369">
                +60174768369
              </a>
              .
            </p>
          </section>

          <section className="rounded-2xl bg-gray-light/60 p-6">
            <h2 className="text-xl font-semibold text-ocean-dark">9. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with an updated effective date.
            </p>
          </section>

          <p className="pt-2 text-sm text-gray">
            Effective date: April 7, 2026
          </p>
        </div>
      </section>
    </main>
  );
}
