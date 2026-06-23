"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HomeLogo } from "@/components/Logo";
import { Button, cx } from "@/components/ui";
import { Icon } from "@/components/icons";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Subtle shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <HomeLogo />

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-nadi-blue"
                  : "text-foreground/70 hover:text-deep-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm" icon>
            Get in touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-deep-navy hover:bg-surface lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!open}
        className={cx(
          "overflow-hidden border-t border-border bg-white transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-[28rem]" : "max-h-0 border-t-0",
        )}
      >
        <div className="space-y-1 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={cx(
                "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                isActive(item.href)
                  ? "bg-nadi-blue/10 text-nadi-blue"
                  : "text-foreground/80 hover:bg-surface",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <Button href="/contact" className="w-full" icon onClick={close}>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
