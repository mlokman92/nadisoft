import type { Metadata } from "next";
import {
  Card,
  Container,
  FeatureCard,
  IconBadge,
  Section,
  SectionHeading,
} from "@/components/ui";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";
import {
  company,
  founders,
  johorAdvantage,
  values,
  visionMission,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nadisoft Tech PLT is a Johor-based digital execution partner with a Vision 2030 to power smart industries, connected communities, and intelligent operations across Southeast Asia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nadisoft"
        title="The digital execution partner for Malaysia's next growth era"
        description={company.description}
      />

      {/* ── Vision & Mission ─────────────────────────────────────── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow={visionMission.partnerLabel}
            title={visionMission.manifesto}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <IconBadge name="target" />
              <h3 className="mt-5 font-display text-xl font-semibold text-deep-navy">
                {visionMission.vision.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {visionMission.vision.body}
              </p>
            </Card>
            <Card>
              <IconBadge name="flag" />
              <h3 className="mt-5 font-display text-xl font-semibold text-deep-navy">
                {visionMission.mission.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {visionMission.mission.body}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ── Corporate Fact Sheet ─────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Corporate Fact Sheet"
            title="Company at a glance"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Card>
              <IconBadge name="building" />
              <h3 className="mt-5 font-display text-xl font-semibold text-deep-navy">
                Entity Details
              </h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    Company Name
                  </dt>
                  <dd className="mt-1 font-medium text-deep-navy">
                    {company.legalName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    LLP No
                  </dt>
                  <dd className="mt-1 font-medium text-deep-navy">
                    {company.llpNo}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    Incorporation Date
                  </dt>
                  <dd className="mt-1 font-medium text-deep-navy">
                    {company.incorporation}
                  </dd>
                </div>
              </dl>
            </Card>

            <Card>
              <IconBadge name="gears" />
              <h3 className="mt-5 font-display text-xl font-semibold text-deep-navy">
                Core Operations
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {company.coreOperations}
              </p>
            </Card>

            <Card>
              <IconBadge name="mapPin" />
              <h3 className="mt-5 font-display text-xl font-semibold text-deep-navy">
                Headquarters
              </h3>
              <address className="mt-3 text-[0.95rem] not-italic leading-relaxed text-muted">
                {company.address.line1}
                <br />
                {company.address.line2}
              </address>
            </Card>

            <Card>
              <IconBadge name="users" />
              <h3 className="mt-5 font-display text-xl font-semibold text-deep-navy">
                Leadership
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                Three founding partners bringing multidisciplinary expertise:
              </p>
              <ul className="mt-4 space-y-2.5">
                {founders.map((founder) => (
                  <li key={founder} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nadi-blue/10 text-nadi-blue">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    <span className="text-[0.95rem] font-medium leading-relaxed text-deep-navy">
                      {founder}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ── Johor Strategic Advantage ────────────────────────────── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="The Johor Strategic Advantage"
            title="Rooted in one of Malaysia's fastest-growing regions"
            description={johorAdvantage.intro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {johorAdvantage.points.map((point) => (
              <FeatureCard
                key={point.title}
                icon={point.icon}
                title={point.title}
                body={point.body}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Core Corporate Values ────────────────────────────────── */}
      <Section tone="navy">
        <OrbitBackdrop className="text-sky/70" />
        <Container className="relative">
          <SectionHeading
            onDark
            align="center"
            eyebrow="Core Corporate Values"
            title="What we stand for"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
              >
                <IconBadge tone="onNavy" name={value.icon} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA
        title="Partner with Nadisoft"
        secondaryLabel="Explore solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
