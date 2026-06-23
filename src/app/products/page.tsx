import type { Metadata } from "next";
import {
  Card,
  CheckList,
  Container,
  IconBadge,
  Section,
  SectionHeading,
  cx,
} from "@/components/ui";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Nadisoft's flagship platform ecosystem — DESA+ for rural transformation, roda+ for automotive operations, and Karen+ for smart electrical maintenance.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Platforms"
        title="Flagship Platform Ecosystem"
        description="Purpose-built platforms that standardize and automate operations across Malaysia's public, automotive, and facilities sectors."
      />

      {products.map((product, index) => {
        const reversed = index % 2 === 1;
        return (
          <Section
            key={product.id}
            id={product.id}
            tone={index % 2 === 0 ? "light" : "surface"}
          >
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Content column */}
                <div className={cx(reversed && "lg:order-2")}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-nadi-blue">
                    {product.category}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-deep-navy sm:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    <span className="font-semibold text-deep-navy">Built for: </span>
                    {product.audience}
                  </p>

                  <CheckList items={product.features} className="mt-7" />

                  <div className="mt-8 rounded-2xl border border-nadi-blue/15 bg-nadi-blue/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nadi-blue">
                      Strategic value
                    </p>
                    <p className="mt-2 text-[0.95rem] font-medium leading-relaxed text-deep-navy">
                      {product.value}
                    </p>
                  </div>
                </div>

                {/* Visual column — branded panel standing in for a screenshot */}
                <div className={cx(reversed && "lg:order-1")}>
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-navy to-navy-700 p-10 shadow-xl shadow-deep-navy/10 sm:p-12">
                    <OrbitBackdrop className="text-sky/60" />
                    <div className="relative flex min-h-[18rem] flex-col justify-between gap-10">
                      <div className="flex items-center justify-between">
                        <IconBadge
                          name={product.icon}
                          tone="onNavy"
                          className="h-16 w-16 rounded-2xl"
                        />
                        <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-sky ring-1 ring-inset ring-white/15">
                          Platform
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky">
                          {product.category}
                        </p>
                        <p className="mt-2 font-display text-4xl font-semibold text-white">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Platform Diagnostic Matrix */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Platform Diagnostic Matrix"
            title="How the platforms compare"
            description="A side-by-side view of who each flagship platform serves, what it delivers, and the market value it captures."
          />

          {/* Stacked cards on small screens */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
            {products.map((product) => (
              <Card key={product.id}>
                <div className="flex items-center gap-3">
                  <IconBadge name={product.icon} tone="navy" />
                  <div>
                    <p className="font-display text-lg font-semibold text-deep-navy">
                      {product.name}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nadi-blue">
                      {product.category}
                    </p>
                  </div>
                </div>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-gray">
                      Target Audience
                    </dt>
                    <dd className="mt-1 text-[0.95rem] leading-relaxed text-foreground/80">
                      {product.audience}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-gray">
                      Core Features
                    </dt>
                    <dd className="mt-1 text-[0.95rem] leading-relaxed text-foreground/80">
                      {product.features.join(", ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-gray">
                      Strategic Market Value
                    </dt>
                    <dd className="mt-1 text-[0.95rem] leading-relaxed text-foreground/80">
                      {product.value}
                    </dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>

          {/* Real table on large screens */}
          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Comparison of Nadisoft flagship platforms by audience, features, and
                strategic market value.
              </caption>
              <thead>
                <tr className="bg-deep-navy text-white">
                  <th scope="col" className="w-44 px-6 py-5 align-bottom">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">
                      Platform
                    </span>
                  </th>
                  {products.map((product) => (
                    <th
                      scope="col"
                      key={product.id}
                      className="px-6 py-5 align-bottom"
                    >
                      <span className="flex items-center gap-3">
                        <IconBadge name={product.icon} tone="onNavy" />
                        <span className="flex flex-col">
                          <span className="font-display text-lg font-semibold text-white">
                            {product.name}
                          </span>
                          <span className="text-xs font-medium uppercase tracking-[0.14em] text-sky">
                            {product.category}
                          </span>
                        </span>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <th
                    scope="row"
                    className="bg-surface px-6 py-6 align-top text-xs font-semibold uppercase tracking-[0.18em] text-steel-gray"
                  >
                    Target Audience
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="px-6 py-6 align-top text-[0.95rem] leading-relaxed text-foreground/80"
                    >
                      {product.audience}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="bg-surface px-6 py-6 align-top text-xs font-semibold uppercase tracking-[0.18em] text-steel-gray"
                  >
                    Core Features
                  </th>
                  {products.map((product) => (
                    <td key={product.id} className="px-6 py-6 align-top">
                      <ul className="space-y-2.5">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-foreground/80"
                          >
                            <Icon
                              name="check"
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-nadi-blue"
                              strokeWidth={2}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="bg-surface px-6 py-6 align-top text-xs font-semibold uppercase tracking-[0.18em] text-steel-gray"
                  >
                    Strategic Market Value
                  </th>
                  {products.map((product) => (
                    <td
                      key={product.id}
                      className="px-6 py-6 align-top text-[0.95rem] font-medium leading-relaxed text-deep-navy"
                    >
                      {product.value}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <CTA
        title="Bring a flagship platform to your sector"
        secondaryLabel="Talk to our team"
        secondaryHref="/contact"
      />
    </>
  );
}
