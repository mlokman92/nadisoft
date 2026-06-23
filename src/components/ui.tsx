import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ── Layout ──────────────────────────────────────────────────── */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

type Tone = "light" | "surface" | "navy";

export function Section({
  children,
  className,
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: Tone;
}) {
  const tones: Record<Tone, string> = {
    light: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    navy: "relative overflow-hidden bg-deep-navy text-white",
  };
  return (
    <section id={id} className={cx("py-20 sm:py-28", tones[tone], className)}>
      {children}
    </section>
  );
}

/* ── Headings ────────────────────────────────────────────────── */
export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
        onDark ? "text-sky" : "text-nadi-blue",
        className,
      )}
    >
      <span
        className={cx(
          "h-px w-6",
          onDark ? "bg-sky/60" : "bg-nadi-blue/50",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cx(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <div className={cx("mb-4", align === "center" && "flex justify-center")}>
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cx(
          "font-display text-3xl font-semibold sm:text-4xl",
          onDark ? "text-white" : "text-deep-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cx(
            "mt-5 text-lg leading-relaxed",
            onDark ? "text-slate-300" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ── Buttons ─────────────────────────────────────────────────── */
type ButtonVariant = "primary" | "secondary" | "outline" | "light" | "outlineLight";
type ButtonSize = "sm" | "md" | "lg";

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = false,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-nadi-blue text-white shadow-sm shadow-nadi-blue/30 hover:bg-nadi-blue-strong hover:shadow-md hover:shadow-nadi-blue/30",
    secondary: "bg-deep-navy text-white hover:bg-navy-700",
    outline:
      "border border-border bg-white text-deep-navy hover:border-nadi-blue/40 hover:text-nadi-blue",
    light: "bg-white text-deep-navy hover:bg-sky/90",
    outlineLight:
      "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
  };
  const classes = cx(base, sizes[size], variants[variant], className);

  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  const content = (
    <>
      {children}
      {icon && (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (isExternal) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}

/* ── Surfaces ────────────────────────────────────────────────── */
export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-border bg-white p-7 shadow-sm",
        hover &&
          "transition duration-300 hover:-translate-y-1 hover:border-nadi-blue/30 hover:shadow-lg hover:shadow-deep-navy/5",
        className,
      )}
    >
      {children}
    </div>
  );
}

type BadgeTone = "blue" | "navy" | "soft" | "onNavy";

export function IconBadge({
  name,
  tone = "blue",
  className,
}: {
  name: IconName;
  tone?: BadgeTone;
  className?: string;
}) {
  const tones: Record<BadgeTone, string> = {
    blue: "bg-nadi-blue/10 text-nadi-blue",
    navy: "bg-deep-navy text-white",
    soft: "bg-surface-2 text-deep-navy",
    onNavy: "bg-white/10 text-sky ring-1 ring-inset ring-white/15",
  };
  return (
    <span
      className={cx(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl",
        tones[tone],
        className,
      )}
    >
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}

export function Tag({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium",
        onDark
          ? "bg-white/10 text-slate-100 ring-1 ring-inset ring-white/15"
          : "bg-surface-2 text-deep-navy",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Stat({
  value,
  label,
  onDark = false,
}: {
  value: ReactNode;
  label: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div>
      <div
        className={cx(
          "font-display text-3xl font-semibold sm:text-4xl",
          onDark ? "text-white" : "text-deep-navy",
        )}
      >
        {value}
      </div>
      <div
        className={cx(
          "mt-1 text-sm",
          onDark ? "text-slate-300" : "text-muted",
        )}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Composite: feature card used across pages ──────────────── */
export function FeatureCard({
  icon,
  title,
  body,
  className,
  hover = true,
}: {
  icon: IconName;
  title: ReactNode;
  body?: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <Card hover={hover} className={className}>
      <IconBadge name={icon} />
      <h3 className="mt-5 font-display text-lg font-semibold text-deep-navy">
        {title}
      </h3>
      {body && <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>}
    </Card>
  );
}

/* ── Bulleted check list ─────────────────────────────────────── */
export function CheckList({
  items,
  onDark = false,
  className,
}: {
  items: readonly string[];
  onDark?: boolean;
  className?: string;
}) {
  return (
    <ul className={cx("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cx(
              "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              onDark ? "bg-nadi-blue/20 text-sky" : "bg-nadi-blue/10 text-nadi-blue",
            )}
          >
            <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <span
            className={cx(
              "text-[0.95rem] leading-relaxed",
              onDark ? "text-slate-200" : "text-foreground/80",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
