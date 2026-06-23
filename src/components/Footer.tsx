import Link from "next/link";
import { Wordmark } from "@/components/Logo";
import { Container } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { company, nav, products } from "@/lib/site";

function ContactRow({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-300">
      <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-deep-navy text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Wordmark variant="light" showTagline idPrefix="footer" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-300">
              {company.description}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky">
              <Icon name="mapPin" className="h-4 w-4" />
              {company.address.region}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Platforms
            </h3>
            <ul className="mt-4 space-y-3">
              {products.map((p) => (
                <li key={p.id}>
                  <FooterLink href={`/products#${p.id}`}>{p.name}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/solutions">All solutions</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3">
              <ContactRow icon="building">
                {company.address.line1}, {company.address.line2}
              </ContactRow>
              <ContactRow icon="phone">
                <a href={company.phoneHref} className="hover:text-white">
                  {company.phone}
                </a>
              </ContactRow>
              <ContactRow icon="mail">
                <a href={company.emailHref} className="hover:text-white">
                  {company.email}
                </a>
              </ContactRow>
              <ContactRow icon="globe">
                <a
                  href={company.websiteHref}
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.website}
                </a>
              </ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-2">
            <Icon name="mapPin" className="h-4 w-4 text-sky" />
            {company.footerMotto}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              © {year} {company.legalName}
            </span>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-300 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
