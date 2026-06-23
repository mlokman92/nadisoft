import type { Metadata } from "next";
import {
  Container,
  Section,
  SectionHeading,
  CheckList,
} from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";
import {
  techFoundation,
  strategicAlignment,
  digitalAcceleration,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology",
  description: techFoundation.closing,
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology & Approach"
        title="Practical infrastructure, engineered to evolve into AI"
        description={techFoundation.closing}
      />

      {/* ── The Technology Foundation: two-layer architecture ───── */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="The Technology Foundation"
            title="A two-layer architecture"
            align="center"
          />

          <div className="relative mx-auto mt-14 max-w-3xl">
            {/* Top layer — AI-ready, tinted blue */}
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-nadi-blue to-azure p-8 text-white shadow-lg shadow-nadi-blue/25 sm:p-9">
              <span className="inline-flex items-center rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-inset ring-white/20">
                {techFoundation.topLayer.label}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                {techFoundation.topLayer.title}
              </h3>
              <CheckList
                items={techFoundation.topLayer.points}
                onDark
                className="mt-6"
              />
            </div>

            {/* Connector showing the top resting on the base */}
            <div
              className="mx-auto -my-2 h-8 w-px bg-gradient-to-b from-azure/60 to-deep-navy/40"
              aria-hidden="true"
            />

            {/* Base layer — execution-focused engineering, deep navy */}
            <div className="relative z-0 mx-auto w-full max-w-[calc(100%+1.5rem)] overflow-hidden rounded-2xl bg-deep-navy p-8 text-white shadow-xl shadow-deep-navy/20 sm:-mx-3 sm:w-[calc(100%+1.5rem)] sm:p-9">
              <OrbitBackdrop className="text-sky/70" />
              <div className="relative">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky ring-1 ring-inset ring-white/15">
                  {techFoundation.baseLayer.label}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {techFoundation.baseLayer.title}
                </h3>
                <CheckList
                  items={techFoundation.baseLayer.points}
                  onDark
                  className="mt-6"
                />
              </div>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium leading-relaxed text-deep-navy">
            {techFoundation.closing}
          </p>
        </Container>
      </Section>

      {/* ── The Strategic Alignment Matrix ──────────────────────── */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="The Strategic Alignment Matrix"
            title="Aligned with national mandates"
          />

          {/* Large screens: semantic matrix table */}
          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-border shadow-sm lg:block">
            <table className="w-full table-fixed border-collapse text-left">
              <caption className="sr-only">
                Nadisoft core capabilities mapped against Malaysia&apos;s national
                mandates.
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[22%] bg-deep-navy p-5 align-middle"
                  >
                    <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-sky">
                      National Mandates
                    </span>
                  </th>
                  {strategicAlignment.capabilities.map((capability) => (
                    <th
                      scope="col"
                      key={capability}
                      className="border-l border-white/10 bg-deep-navy p-5 align-middle font-display text-base font-semibold leading-snug text-white"
                    >
                      {capability}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {strategicAlignment.rows.map((row) => (
                  <tr key={row.mandate} className="border-t border-border">
                    <th
                      scope="row"
                      className="bg-navy-700 p-5 align-top font-display text-base font-semibold leading-snug text-white"
                    >
                      {row.mandate}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td
                        key={`${row.mandate}-${i}`}
                        className="border-l border-border bg-white p-5 align-top text-[0.95rem] leading-relaxed text-muted"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Small / medium screens: stacked mandate cards */}
          <div className="mt-10 space-y-5 lg:hidden">
            {strategicAlignment.rows.map((row) => (
              <div
                key={row.mandate}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              >
                <div className="bg-deep-navy px-5 py-4">
                  <h3 className="font-display text-base font-semibold text-white">
                    {row.mandate}
                  </h3>
                </div>
                <dl className="divide-y divide-border">
                  {row.cells.map((cell, i) => (
                    <div key={`${row.mandate}-m-${i}`} className="px-5 py-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-nadi-blue">
                        {strategicAlignment.capabilities[i]}
                      </dt>
                      <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                        {cell}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Emphasized closing panel */}
          <div className="mt-10 rounded-2xl bg-nadi-blue p-6 text-center text-white shadow-sm shadow-nadi-blue/25 sm:p-8">
            <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed">
              {strategicAlignment.closing}
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Malaysia's Digital Acceleration Phase ───────────────── */}
      <Section tone="navy">
        <OrbitBackdrop className="text-sky/70" />
        <Container className="relative">
          <SectionHeading
            onDark
            eyebrow="Malaysia's Digital Acceleration Phase"
            title="A critical modernization window"
            description={digitalAcceleration.intro}
          />
          <CheckList
            items={digitalAcceleration.initiatives}
            onDark
            className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 [&>li]:mt-0"
          />
        </Container>
      </Section>

      <CTA
        title="Build on infrastructure made for what's next"
        secondaryLabel="See the roadmap"
        secondaryHref="/roadmap"
      />
    </>
  );
}
