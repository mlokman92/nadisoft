/** Decorative concentric orbit rings echoing the logo. Purely visual;
 *  meant to sit absolutely-positioned inside dark hero/CTA sections. */
export function OrbitBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 orbit-spin"
        viewBox="0 0 800 800"
        fill="none"
      >
        <g
          transform="rotate(-28 400 400)"
          stroke="currentColor"
          fill="none"
        >
          <ellipse cx="400" cy="400" rx="380" ry="150" strokeWidth="1.5" opacity="0.18" />
          <ellipse cx="400" cy="400" rx="300" ry="118" strokeWidth="1.5" opacity="0.13" />
          <ellipse cx="400" cy="400" rx="220" ry="86" strokeWidth="1.5" opacity="0.1" />
        </g>
      </svg>
      {/* radial glow */}
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--nadi-blue) 55%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}
