import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Poppins, Luckiest_Guy } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Montshe Mokgokong - Developer Portfolio",
  description: "Full-stack developer passionate about creating innovative digital solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${poppins.variable} ${luckiestGuy.variable} antialiased dark`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
