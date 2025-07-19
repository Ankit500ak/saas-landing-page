import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cookies } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartSuite - AI-Powered Solution",
  description: "Your AI-powered solution for sales, support, and automation — all in one secure platform.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sidebar removed for landing-page build-time simplicity */}
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  )
}
