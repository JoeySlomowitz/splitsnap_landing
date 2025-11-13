import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://split-snap.com"),
  title: "Splitra - Split Receipts in Seconds",
  description: "Transform receipt splitting through three simple steps: Snap a photo of any receipt, Split the bill by entering the number of people, and Share the results instantly with friends.",
  keywords: ["receipt splitting", "bill splitting", "iOS app", "mobile app", "finance", "payments", "Splitra"],
  authors: [{ name: "Splitra Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://split-snap.com",
    title: "Splitra - Simplify bill splits",
    description: "Split bills effortlessly with friends. Join our iOS beta to test and shape Splitra!",
    siteName: "Splitra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Splitra App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Splitra - Simplify bill splits",
    description: "Split bills effortlessly with friends. Join our iOS beta to test and shape Splitra!",
    images: ["/og-image.png"],
    site: "@Splitra"
  },
  appleWebApp: {
    capable: true,
    title: "Splitra",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
