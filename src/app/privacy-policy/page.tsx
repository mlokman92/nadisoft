import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Section } from "@/components/ui";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nadisoft collects, uses, and protects personal information when you visit our website or contact us.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect information you voluntarily provide, such as your name, email address, phone number, company name, and any message you send to us. We may also collect limited technical information, including browser type, device information, and usage data, to help maintain and improve the site.",
  },
  {
    title: "How We Use Information",
    body: "We use the information we collect to respond to inquiries, provide our services, improve our website, maintain security, and comply with legal obligations.",
  },
  {
    title: "Sharing of Information",
    body: "We do not sell your personal information. We may share information with trusted service providers that help us operate our website and business, or when required by law.",
  },
  {
    title: "Data Retention",
    body: "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law or for legitimate business purposes.",
  },
  {
    title: "Cookies and Analytics",
    body: "Our website may use cookies or similar technologies to improve performance, understand site traffic, and enhance your experience. You can control cookies through your browser settings.",
  },
  {
    title: "Security",
    body: "We take reasonable administrative, technical, and organizational measures to protect personal information. However, no method of transmission or storage is completely secure.",
  },
  {
    title: "Your Rights",
    body: "Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal information. To make a request, please contact us using the details below.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This Privacy Policy explains how Nadisoft collects, uses, and protects personal information when you visit our website or contact us."
      />

      <Section tone="light">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((item, index) => (
              <section key={item.title}>
                <h2 className="font-display text-2xl font-semibold text-deep-navy">
                  {index + 1}. {item.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{item.body}</p>
              </section>
            ))}

            <section>
              <h2 className="font-display text-2xl font-semibold text-deep-navy">
                8. Contact Us
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a
                  href={company.emailHref}
                  className="font-medium text-nadi-blue hover:text-nadi-blue-strong hover:underline"
                >
                  {company.email}
                </a>{" "}
                or call{" "}
                <a
                  href={company.phoneHref}
                  className="font-medium text-nadi-blue hover:text-nadi-blue-strong hover:underline"
                >
                  {company.phone}
                </a>
                .
              </p>
            </section>

            <section className="rounded-2xl bg-surface p-6">
              <h2 className="font-display text-2xl font-semibold text-deep-navy">
                9. Changes to This Policy
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            <p className="text-sm text-muted">Effective date: April 7, 2026</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
