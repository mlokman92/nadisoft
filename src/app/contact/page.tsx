import type { Metadata } from "next";
import {
  Button,
  Card,
  Container,
  Eyebrow,
  IconBadge,
  Section,
} from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";
import { company, johorAdvantage } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.legalName} in ${company.address.region}. Call ${company.phone} or email ${company.email} to modernize your operations.`,
};

type ContactMethod = {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactMethods: ContactMethod[] = [
  {
    icon: "building",
    label: "Headquarters",
    value: `${company.address.line1}, ${company.address.line2}`,
  },
  {
    icon: "phone",
    label: "Phone",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: "mail",
    label: "Email",
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: "globe",
    label: "Website",
    value: company.website,
    href: company.websiteHref,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build what's next."
        description="Tell us about your organization and the operations you want to modernize. We'll get back to you shortly."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* LEFT — contact methods */}
            <div>
              <h2 className="font-display text-3xl font-semibold text-deep-navy sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Reach the Nadisoft team directly, or send a message and
                we&apos;ll respond shortly.
              </p>

              <ul className="mt-10 space-y-6">
                {contactMethods.map((method) => (
                  <li key={method.label} className="flex items-start gap-4">
                    <IconBadge name={method.icon} tone="soft" />
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-steel-gray">
                        {method.label}
                      </div>
                      {method.href ? (
                        <a
                          href={method.href}
                          {...(method.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="mt-1 inline-block break-words font-medium text-deep-navy transition hover:text-nadi-blue"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="mt-1 break-words font-medium text-deep-navy">
                          {method.value}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Johor / JS-SEZ panel */}
              <div className="mt-10 rounded-2xl border border-border bg-surface p-7">
                <div className="mb-3">
                  <Eyebrow>Proudly rooted in Johor</Eyebrow>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  {johorAdvantage.intro} From the Johor-Singapore Special
                  Economic Zone, we partner with organizations ready to
                  modernize.
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-deep-navy">
                  <Icon name="mapPin" className="h-4 w-4 text-nadi-blue" />
                  {company.address.region}
                </p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div>
              <Card>
                <h2 className="font-display text-xl font-semibold text-deep-navy">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Fields marked required help us route your enquiry to the right
                  team.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Closing navy strip */}
      <Section tone="navy" className="py-16 sm:py-20">
        <OrbitBackdrop className="text-sky/70" />
        <Container className="relative">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-display text-xl font-semibold text-white sm:text-2xl">
              {company.footerMotto}
            </p>
            <Button href={company.emailHref} variant="light" size="lg" icon>
              Email us directly
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
