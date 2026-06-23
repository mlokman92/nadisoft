import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";

/** Standard interior-page hero: deep-navy band with the orbit motif. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-deep-navy text-white">
      <OrbitBackdrop className="text-sky/70" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="mb-5">
              <Eyebrow onDark>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
