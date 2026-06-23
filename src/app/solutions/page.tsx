import type { Metadata } from "next";
import {
  Button,
  Card,
  Container,
  FeatureCard,
  Section,
  SectionHeading,
  Tag,
  cx,
} from "@/components/ui";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { industries, pillars, pillarsClosing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: pillarsClosing,
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Three core pillars. One integrated ecosystem."
        description={pillarsClosing}
      />

      {/* Overview — quick anchors into each pillar section */}
      <Section tone="light">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Vision 2030 Integrated Ecosystem"
            title="Cross-sector capability by design"
            description="Our three pillars share one architecture — secure, AI-ready, and deeply localized — so progress in one sector compounds across the rest."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.id} hover className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-nadi-blue">
                  Pillar {pillar.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-deep-navy">
                  {pillar.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {pillar.tagline}
                </p>
                <div className="mt-6">
                  <Button href={`#${pillar.id}`} variant="outline" size="sm" icon>
                    Explore pillar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Detailed pillar sections */}
      {pillars.map((pillar, index) => (
        <Section
          key={pillar.id}
          id={pillar.id}
          tone={index % 2 === 0 ? "surface" : "light"}
        >
          <Container>
            {/* Header row */}
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-nadi-blue">
                Pillar {pillar.number}
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-deep-navy sm:text-4xl">
                {pillar.name}
              </h2>
              <p className="mt-4 text-lg font-medium text-deep-navy/80">
                {pillar.detailHeading}
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                {pillar.detailIntro}
              </p>
            </div>

            {/* Pillar II — industries served */}
            {pillar.id === "enterprise" && (
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel-gray">
                  Industries we serve
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {industries.map((industry) => (
                    <Tag key={industry}>{industry}</Tag>
                  ))}
                </div>
              </div>
            )}

            {/* Features grid */}
            <div
              className={cx(
                "mt-12 grid gap-6",
                pillar.id === "government" && "sm:grid-cols-2 lg:grid-cols-3",
                pillar.id === "enterprise" && "sm:grid-cols-2",
                pillar.id === "community" && "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {pillar.features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  body={feature.body}
                />
              ))}
            </div>

            {/* Closing note */}
            <p className="mt-12 max-w-3xl border-l-2 border-nadi-blue pl-4 font-display text-lg font-medium text-deep-navy">
              {pillar.closing}
            </p>
          </Container>
        </Section>
      ))}

      <CTA
        title="Find the right solution for your organization"
        secondaryLabel="See our platforms"
        secondaryHref="/products"
      />
    </>
  );
}
