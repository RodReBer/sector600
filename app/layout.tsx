import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-proxima">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
