import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Anchor Hotel – Haydon Bridge",
  description:
    "Riverside Tavern & Inn since 1422. Eat, drink, and stay by the South Tyne in Haydon Bridge, Northumberland.",
  metadataBase: new URL("https://example.com"), // update to your real domain when ready
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID; // optional

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-offwhite text-brown">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Optional: Google Analytics via next/script */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
