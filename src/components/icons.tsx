import type { ReactNode, SVGProps } from "react";

// Self-contained line-icon set (no external dependency). 24×24, stroke = currentColor.
export type IconName =
  | "layers"
  | "cloud"
  | "shield"
  | "mapPin"
  | "building"
  | "gears"
  | "globe"
  | "users"
  | "document"
  | "idCard"
  | "dashboard"
  | "network"
  | "chat"
  | "wrench"
  | "gauge"
  | "chart"
  | "sprout"
  | "rocket"
  | "car"
  | "bolt"
  | "lightbulb"
  | "cpu"
  | "sparkles"
  | "flag"
  | "target"
  | "arrowRight"
  | "arrowUpRight"
  | "check"
  | "menu"
  | "close"
  | "phone"
  | "mail";

const paths: Record<IconName, ReactNode> = {
  layers: (
    <>
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </>
  ),
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01" />
    </>
  ),
  gears: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
  users: (
    <>
      <path d="M16 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 19v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  document: (
    <>
      <path d="M18 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8l5 5v11a1 1 0 0 1-1 1Z" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  idCard: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M13 9h5M13 13h5M6.5 16a3 3 0 0 1 5 0" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M10.5 7 6.5 16.7M13.5 7l4 9.7M7.5 19h9" />
    </>
  ),
  chat: <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1.3-4.5A8 8 0 1 1 21 12Z" />,
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8a2 2 0 1 0 2.8 2.8l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.1-.5-.5-2.1 2.6-2.6Z" />
  ),
  gauge: (
    <>
      <path d="M3.3 16a9 9 0 1 1 17.4 0" />
      <path d="m12 13 4-4" />
      <circle cx="12" cy="13" r="1.5" />
    </>
  ),
  chart: (
    <>
      <path d="m21 7-8 8-4-4L3 17" />
      <path d="M15 7h6v6" />
    </>
  ),
  sprout: (
    <>
      <path d="M7 20c0-5 3-8 8-9" />
      <path d="M9 11c-3 0-5-2-5-5 3 0 5 2 5 5Z" />
      <path d="M15 10c3 0 5-2 5-5-3 0-5 2-5 5Z" />
      <path d="M12 20v-5" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 13c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
      <path d="M14.5 4.5C18 4 20 6 19.5 9.5c-.4 3-3.5 6-7 8l-4-4c2-3.5 5-6.6 8-9Z" />
      <circle cx="14.5" cy="9.5" r="1.5" />
    </>
  ),
  car: (
    <>
      <path d="M3 13l1.6-4.3A2 2 0 0 1 6.5 7.4h11a2 2 0 0 1 1.9 1.3L21 13" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1.5M3 13v4a1 1 0 0 0 1 1h1.5" />
      <path d="M8 18h8" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 2Z" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="M19 14l.7 2L22 16.7l-2 .7L19.3 20l-.7-2L16 17.3l2-.7L19 14Z" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h12l-2.5 3.5L17 11H5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  check: <path d="m5 12 5 5L20 7" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 6 18 18M18 6 6 18" />,
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
};

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
