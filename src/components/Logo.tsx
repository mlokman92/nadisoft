import Image from "next/image";
import Link from "next/link";

/** The abstract "N + orbit" brand glyph, rebuilt as inline SVG so it works on
 *  any background. `idPrefix` keeps gradient ids unique across instances. */
export function OrbitMark({
  className,
  idPrefix = "nm",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const n = `${idPrefix}-n`;
  const o = `${idPrefix}-o`;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={n} x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066ff" />
          <stop offset="1" stopColor="#3b8bff" />
        </linearGradient>
        <linearGradient id={o} x1="2" y1="14" x2="46" y2="34" gradientUnits="userSpaceOnUse">
          {/* mirrors brand tokens: soft-gray → steel-gray (SVG stops can't read CSS vars) */}
          <stop stopColor="#e6e8eb" />
          <stop offset="1" stopColor="#7a8699" />
        </linearGradient>
      </defs>
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9"
        transform="rotate(-32 24 24)"
        fill="none"
        stroke={`url(#${o})`}
        strokeWidth="2.4"
      />
      <g
        fill="none"
        stroke={`url(#${n})`}
        strokeWidth="5.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 33V16" />
        <path d="M15 16l18 16" />
        <path d="M33 32V15" />
      </g>
    </svg>
  );
}

/** Two-tone "nadisoft" wordmark. `variant` = the surface it sits on. */
export function Wordmark({
  variant = "dark",
  showTagline = false,
  idPrefix = "wm",
  className,
}: {
  variant?: "dark" | "light";
  showTagline?: boolean;
  idPrefix?: string;
  className?: string;
}) {
  const onDark = variant === "light";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <OrbitMark idPrefix={idPrefix} className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold lowercase tracking-tight">
          <span className={onDark ? "text-white" : "text-deep-navy"}>nadi</span>
          <span className={onDark ? "text-sky" : "text-steel-gray"}>soft</span>
        </span>
        {showTagline && (
          <span
            className={`mt-1 text-[0.5rem] font-medium uppercase tracking-[0.32em] ${
              onDark ? "text-sky/80" : "text-nadi-blue"
            }`}
          >
            Technology Forward
          </span>
        )}
      </span>
    </span>
  );
}

/** The real brand PNG (best for light surfaces such as the header). */
export function LogoImage({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/nadisoft-logo.png"
      alt="Nadisoft"
      width={190}
      height={55}
      priority={priority}
      className={className}
    />
  );
}

/** Clickable home logo used in the header. */
export function HomeLogo() {
  return (
    <Link href="/" aria-label="Nadisoft — home" className="inline-flex items-center">
      <LogoImage priority className="h-9 w-auto" />
    </Link>
  );
}
