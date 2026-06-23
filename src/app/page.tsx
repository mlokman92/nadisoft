import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  SectionHeading,
  Button,
  Card,
  IconBadge,
  FeatureCard,
  CheckList,
} from "@/components/ui";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";
import { CTA } from "@/components/CTA";
import { PartnerLogos } from "@/components/PartnerLogos";
import {
  company,
  visionMission,
  capabilities,
  pillars,
  pillarsClosing,
  products,
  digitalAcceleration,
} from "@/lib/site";

export const metadata: Metadata = {
  title: company.headline,
  description: company.description,
};

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-deep-navy text-white">
        <OrbitBackdrop className="text-sky/70" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Container className="relative py-24 sm:py-32">
          <div className="max-w-3xl">
            <Eyebrow onDark>
              Nadisoft Tech PLT · Corporate Profile 2026–2030
            </Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Technology Forward.
              <br />
              <span className="text-gradient">Nation Ready.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {company.oneLiner} {company.description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/solutions" variant="light" size="lg" icon>
                Explore our solutions
              </Button>
              <Button href="/contact" variant="outlineLight" size="lg">
                Talk to us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Trusted by ──────────────────────────────────────────── */}
      <PartnerLogos />

      {/* ── 2. Positioning ──────────────────────────────────────── */}
      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow={visionMission.partnerLabel}
              title={visionMission.manifesto}
            />
            <div className="flex items-center">
              <p className="text-lg leading-relaxed text-muted">
                {visionMission.closingBody}
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <FeatureCard
                key={capability.title}
                icon={capability.icon}
                title={capability.title}
                body={capability.body}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 3. Pillars ──────────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What we build"
            title="The Three Core Business Pillars"
            description={pillarsClosing}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.id} hover className="flex flex-col">
                <IconBadge name={pillar.icon} />
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-nadi-blue">
                  Pillar {pillar.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-deep-navy">
                  {pillar.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pillar.tagline}
                </p>
                <div className="mt-6 pt-2">
                  <Button
                    href={`/solutions#${pillar.id}`}
                    variant="outline"
                    size="sm"
                    icon
                  >
                    Learn more
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. National Alignment ───────────────────────────────── */}
      <Section tone="navy">
        <OrbitBackdrop className="text-sky/70" />
        <Container className="relative">
          <SectionHeading
            onDark
            eyebrow="Aligned with national priorities"
            title="Built for Malaysia's digital acceleration"
            description={digitalAcceleration.intro}
          />
          <CheckList
            items={digitalAcceleration.initiatives}
            onDark
            className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 [&>li]:mt-0"
          />
          <div className="mt-10">
            <Button href="/technology" variant="light" icon>
              Our approach
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 5. Products ─────────────────────────────────────────── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Flagship Platform Ecosystem"
            title="Products built for Malaysian operations"
            description="A growing suite of platforms engineered for local workflows — from rural transformation to automotive and facility maintenance."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} hover className="flex flex-col">
                <IconBadge name={product.icon} />
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-nadi-blue">
                  {product.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-deep-navy">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {product.audience}
                </p>
                <div className="mt-6 pt-2">
                  <Button
                    href={`/products#${product.id}`}
                    variant="outline"
                    size="sm"
                    icon
                  >
                    View platform
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/products" variant="primary" icon>
              See all platforms
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 6. Closing CTA ──────────────────────────────────────── */}
      <CTA secondaryLabel="View the roadmap" secondaryHref="/roadmap" />
    </>
  );
}
