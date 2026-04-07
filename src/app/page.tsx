import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Header */}
      <header className="w-full border-b border-gray-light">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
          <Image
            src="/nadisoft-logo.png"
            alt="Nadisoft"
            width={190}
            height={55}
            priority
          />
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-1 items-center justify-center">
        <section className="mx-auto max-w-6xl w-full px-6 py-32 sm:py-44 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-ocean-dark">
            Pemacuan Digital,
            <br />
            Transformasi Global
          </h1>

          {/* Decorative line */}
          <div className="mt-10 flex justify-center">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-ocean to-ocean-light" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-light bg-gray-light/50">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8 text-sm text-gray">
          <span className="font-medium text-ocean-dark">Nadisoft</span>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Link href="/privacy-policy" className="transition-colors hover:text-ocean">
              Privacy Policy
            </Link>
            <a
              href="tel:+60174768369"
              className="transition-colors hover:text-ocean"
            >
              +60174768369
            </a>
            <a
              href="mailto:nash@nadisoft.my"
              className="transition-colors hover:text-ocean"
            >
              nash@nadisoft.my
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
