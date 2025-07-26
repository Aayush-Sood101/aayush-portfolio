import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aayush Sood - Software Developer & CS Student",
  description:
    "Portfolio of Aayush Sood - Software Developer, Computer Science Student at VIT with expertise in full-stack development, competitive programming, and AI/ML projects.",
  keywords:
    "Aayush Sood, Software Developer, Computer Science, VIT, Full Stack Developer, React, Next.js, Node.js, Python, Competitive Programming, LeetCode",
  authors: [{ name: "Aayush Sood" }],
  openGraph: {
    title: "Aayush Sood - Software Developer & CS Student",
    description:
      "Portfolio showcasing projects, achievements, and experience in software development and competitive programming.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
