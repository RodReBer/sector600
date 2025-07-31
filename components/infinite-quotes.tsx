"use client"

import { useEffect, useState } from "react"

const quotes = [
  "La política debe ser el arte de hacer posible lo necesario - Robert Silva",
  "Un Uruguay próspero es un Uruguay que no deja a nadie atrás - Sector 600",
  "La educación es la herramienta más poderosa para cambiar el mundo - Robert Silva",
  "Trabajamos por un país donde cada uruguayo pueda cumplir sus sueños - Sector 600",
  "La transparencia no es una opción, es una obligación - Robert Silva",
  "El diálogo es el camino hacia las mejores soluciones - Sector 600",
]

export function InfiniteQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Duplicamos las frases para crear el efecto infinito
  const duplicatedQuotes = [...quotes, ...quotes, ...quotes]

  return (
    <section className="bg-red-600 py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          {duplicatedQuotes.map((quote, index) => (
            <span key={index} className="text-white text-lg font-medium mx-8 inline-block">
              {quote}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
