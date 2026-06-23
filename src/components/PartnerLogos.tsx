import Image from "next/image";
import { Container } from "@/components/ui";
import { partners } from "@/lib/site";

/** Static "trusted by" logo band below the hero.
 *  Tablet/desktop: a centered row. Mobile: a full-bleed, swipeable
 *  scroll-snap carousel that lets the next logo peek in. */
export function PartnerLogos({
  title = "Trusted by organisations across Malaysia",
}: {
  title?: string;
}) {
  return (
    <section className="border-b border-border bg-surface py-12 sm:py-16">
      <Container>
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-steel-gray">
          {title}
        </h2>
      </Container>

      {/* Tablet / desktop: static centered row */}
      <Container className="hidden sm:block">
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 lg:gap-x-24">
          {partners.map((partner) => (
            <li key={partner.file} className="flex items-center justify-center">
              <Image
                src={`/logos/${partner.file}`}
                alt={partner.name}
                width={160}
                height={160}
                unoptimized
                className="h-28 w-auto object-contain lg:h-32"
              />
            </li>
          ))}
        </ul>
      </Container>

      {/* Mobile: full-width swipe carousel with a peek of the next logo */}
      <ul className="mt-12 flex snap-x snap-mandatory gap-12 overflow-x-auto scroll-px-6 px-6 [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden">
        {partners.map((partner) => (
          <li
            key={partner.file}
            className="flex shrink-0 snap-start items-center justify-center"
          >
            <Image
              src={`/logos/${partner.file}`}
              alt={partner.name}
              width={160}
              height={160}
              unoptimized
              className="h-28 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
