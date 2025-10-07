import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import CursorBubble from "@/components/cursor-bubble"

export const metadata: Metadata = {
  metadataBase: new URL("https://tauhid.dev"), // replace with your actual domain
  title: {
    default: "Tauhid | Full-Stack Developer",
    template: "%s | Tauhid.dev",
  },
  description:
    "Portfolio of Tauhid — a developer crafting web experiences with Next.js, TypeScript, Tailwind CSS, and Three.js.",
  keywords: [
    "Tauhid",
    "Next.js Developer",
    "Full Stack Developer",
    "Web Portfolio",
    "JavaScript",
    "Three.js",
  ],
  authors: [{ name: "Tauhid", url: "https://tauhid.dev" }],
  creator: "Tauhid",
  publisher: "Tauhid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tauhid.dev",
    siteName: "Tauhid Portfolio",
    title: "Tauhid | Full-Stack Developer",
    description:
      "Explore Tauhid’s projects and experiences as a full-stack web developer.",
    images: [
      {
        url: "/og-image.jpg", // Place this in your /public folder
        width: 1200,
        height: 630,
        alt: "Tauhid Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tauhid | Full-Stack Developer",
    description:
      "Building modern, high-performance web experiences with Next.js, TypeScript, and Tailwind CSS.",
    creator: "@tauhid", // optional, if you have a Twitter handle
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tauhid.dev",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <CursorBubble />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
