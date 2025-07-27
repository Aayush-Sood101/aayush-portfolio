import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Font configuration
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter" 
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

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
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Aayush Sood Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Sood - Software Developer & CS Student",
    description: "Portfolio showcasing projects, achievements, and experience in software development",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
