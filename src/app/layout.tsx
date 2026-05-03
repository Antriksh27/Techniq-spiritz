import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: 'swap',
});

const ibmPlex = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Medical Gas Pipeline (MGPS) for Hospitals | Technik Spirits",
  description: "Medical Gas Pipeline (MGPS) equipment and design. Manufacturers of: medical air compressors, medical vacuum pumps, O2 generator & AGSS for hospitals.",
  keywords: ["medical gas pipeline system", "medical air compressor", "medical vacuum pump system", "oxygen generator hospital", "anaesthetic gas scavenging system", "MGPS equipment"],
  authors: [{ name: "Technik Spirits MedTech Private Limited" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Technik Spirits MedTech Private Limited",
    "url": "https://technikspirits.com",
    "logo": "https://technikspirits.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/technik-spirits"
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${ibmPlex.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
