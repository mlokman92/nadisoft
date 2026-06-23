import { Button, Container } from "@/components/ui";
import { OrbitBackdrop } from "@/components/OrbitBackdrop";
import { company } from "@/lib/site";

/** Reusable closing call-to-action band. Defaults to the corporate message. */
export function CTA({
  title = "Build technology that moves Malaysia forward.",
  description = company.description,
  primaryLabel = "Start a conversation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-deep-navy text-white">
      <OrbitBackdrop className="text-sky/70" />
      <Container className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="light" size="lg" icon>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="outlineLight" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
