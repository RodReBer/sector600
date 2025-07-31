import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sector 600 - Partido Colorado | Robert Silva",
  description:
    "Sitio oficial del Sector 600 del Partido Colorado, liderado por Robert Silva. Construyendo el Uruguay del futuro con propuestas innovadoras y participación ciudadana.",
  keywords: "Sector 600, Partido Colorado, Robert Silva, Uruguay, política, propuestas, participación ciudadana",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
