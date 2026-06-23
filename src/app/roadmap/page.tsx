import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";
import {
  Container,
  Section,
  SectionHeading,
  Card,
  CheckList,
  Tag,
} from "@/components/ui";
import { roadmap, visionMission } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Nadisoft's 2026–2030 Growth Roadmap: three phases from Foundation Expansion (2026) and Regional Scaling (2027–2028) to a National Ecosystem (2029–2030) and ASEAN beyond.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="2026–2030 Growth Roadmap"
        title="Our path to a national digital ecosystem"
        description="A phased journey from foundation expansion to a Malaysia-wide, AI-assisted digital ecosystem — and ASEAN beyond."
      />

      {/* ── Timeline ────────────────────────────────────────────── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Growth Roadmap"
            title="Three phases, one trajectory"
          />

          {/* Desktop: horizontal 3-column timeline */}
          <div className="mt-16 hidden lg:block">
            <div className="relative">
              {/* connecting line behind the markers */}
              <div
                className="absolute inset-x-0 top-6 h-px bg-gradient-to-r from-nadi-blue/20 via-nadi-blue/50 to-nadi-blue"
                aria-hidden="true"
              />
              <ol className="grid grid-cols-3 gap-8">
                {roadmap.map((phase, index) => (
                  <li key={phase.phase} className="relative">
                    {/* numbered phase marker on the rule */}
                    <div className="flex justify-center">
                      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-nadi-blue font-display text-lg font-semibold text-white shadow-sm shadow-nadi-blue/30 ring-4 ring-background">
                        {index + 1}
                      </span>
                    </div>
                    <Card hover className="mt-8 h-full">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-nadi-blue">
                        {phase.phase}
                      </p>
                      <div className="mt-3">
                        <Tag>{phase.period}</Tag>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold text-deep-navy">
                        {phase.title}
                      </h3>
                      <CheckList items={phase.items} className="mt-6" />
                    </Card>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Mobile / tablet: vertical timeline */}
          <div className="mt-12 lg:hidden">
            <ol className="relative ml-3 space-y-10 border-l-2 border-border pl-8">
              {roadmap.map((phase, index) => (
                <li key={phase.phase} className="relative">
                  {/* numbered phase marker on the left rule */}
                  <span className="absolute -left-[2.65rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-nadi-blue font-display text-sm font-semibold text-white shadow-sm shadow-nadi-blue/30 ring-4 ring-background">
                    {index + 1}
                  </span>
                  <Card hover>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-nadi-blue">
                      {phase.phase}
                    </p>
                    <div className="mt-3">
                      <Tag>{phase.period}</Tag>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-deep-navy">
                      {phase.title}
                    </h3>
                    <CheckList items={phase.items} className="mt-6" />
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* ── Vision 2030 ─────────────────────────────────────────── */}
      <Section tone="navy">
        <OrbitBackdrop className="text-sky/70" />
        <Container className="relative">
          <SectionHeading
            onDark
            align="center"
            eyebrow={visionMission.vision.title}
            title={visionMission.closingQuote}
          />
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-300">
            {visionMission.vision.body}
          </p>
        </Container>
      </Section>

      <CTA
        title="Help shape Malaysia's 2030 digital ecosystem"
        secondaryLabel="Meet the team"
        secondaryHref="/about"
      />
    </>
  );
}
