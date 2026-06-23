import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.websiteHref),
  title: {
    default: `${company.name} — ${company.headline}`,
    template: `%s — ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "Nadisoft",
    "digital transformation Malaysia",
    "government digital systems",
    "enterprise software Johor",
    "smart community platforms",
    "IT solutions Malaysia",
    "JS-SEZ technology",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} — ${company.headline}`,
    description: company.description,
    url: company.websiteHref,
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.headline}`,
    description: company.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
