import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "SplitSnap - Split Receipts in Seconds",
  description: "Transform receipt splitting through three simple steps: Snap a photo of any receipt, Split the bill by entering the number of people, and Share the results instantly with friends.",
  keywords: ["receipt splitting", "bill splitting", "iOS app", "mobile app", "finance", "payments", "SplitSnap"],
  authors: [{ name: "SplitSnap Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://splitsnap.app",
    title: "SplitSnap - Split Receipts in Seconds",
    description: "Transform receipt splitting through three simple steps: Snap, Split, Share.",
    siteName: "SplitSnap",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SplitSnap App",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "SplitSnap",
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
